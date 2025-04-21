import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { CountryData, ViewState } from '../types';
import { 
  sectorColors, 
  sectorNames, 
  subsectorDefinitions, 
  aiSubsectorColors, 
  quantumSubsectorColors, 
  semiconductorsSubsectorColors,
  spaceSubsectorColors,
  biotechSubsectorColors,
  defaultSpaceSubsectorWeights,
  defaultBiotechSubsectorWeights
} from '../utils/constants';

interface Props {
  data: CountryData[];
  selectedSector: string | null;
  onSectorSelect: (sector: string | null) => void;
  viewState: ViewState;
}

const PieChart: React.FC<Props> = ({ 
  data, 
  selectedSector,
  onSectorSelect,
  viewState
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const width = svgRef.current.clientWidth;
    const height = 400;
    const radius = Math.min(width, height) / 3;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${width/2},${height/2})`);

    const tooltip = d3.select(tooltipRef.current)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("padding", "12px")
      .style("border", "1px solid #ddd")
      .style("border-radius", "6px")
      .style("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.15)")
      .style("pointer-events", "none")
      .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
      .style("font-size", "14px")
      .style("z-index", "1000");

    let pieData;
    if (viewState.type === 'sector' && viewState.sector) {
      // Calculate weighted subsector scores
      const subsectorScores = data.reduce((acc, country) => {
        const subsectors = country.sectorDetails?.[viewState.sector] ?? {};
        Object.entries(subsectors).forEach(([subsector, score]) => {
          const weight = viewState.sector === 'space' 
            ? defaultSpaceSubsectorWeights[subsector as keyof typeof defaultSpaceSubsectorWeights] || 0
            : viewState.sector === 'biotech'
            ? defaultBiotechSubsectorWeights[subsector as keyof typeof defaultBiotechSubsectorWeights] || 0
            : 1;
          acc[subsector] = (acc[subsector] ?? 0) + ((score ?? 0) * weight);
        });
        return acc;
      }, {} as Record<string, number>);

      const subsectorEntries = Object.entries(subsectorScores)
        .sort((a, b) => b[1] - a[1]);

      pieData = d3.pie<[string, number]>()
        .value(d => d[1])(subsectorEntries);
    } else {
      const sectorScores = Object.keys(data[0]?.sectorScores ?? {}).reduce((acc, sector) => {
        const avg = d3.mean(data, d => d.sectorScores?.[sector] ?? 0) || 0;
        return { ...acc, [sector]: avg };
      }, {} as Record<string, number>);

      pieData = d3.pie<[string, number]>()
        .value(d => d[1])(Object.entries(sectorScores));
    }

    const arc = d3.arc<d3.PieArcDatum<[string, number]>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);

    // Draw pie segments
    const segments = g.selectAll("path")
      .data(pieData)
      .enter()
      .append("g");

    segments.append("path")
      .attr("d", arc as any)
      .attr("fill", d => {
        if (viewState.type === 'sector' && viewState.sector) {
          if (viewState.sector === 'space') {
            return spaceSubsectorColors[d.data[0] as keyof typeof spaceSubsectorColors];
          } else if (viewState.sector === 'biotech') {
            return biotechSubsectorColors[d.data[0] as keyof typeof biotechSubsectorColors];
          } else if (viewState.sector === 'ai') {
            return aiSubsectorColors[d.data[0] as keyof typeof aiSubsectorColors];
          } else if (viewState.sector === 'quantum') {
            return quantumSubsectorColors[d.data[0] as keyof typeof quantumSubsectorColors];
          } else if (viewState.sector === 'semiconductors') {
            return semiconductorsSubsectorColors[d.data[0] as keyof typeof semiconductorsSubsectorColors];
          }
        }
        return sectorColors[d.data[0]];
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("cursor", "pointer")
      .style("opacity", d => selectedSector === d.data[0] ? 1 : selectedSector ? 0.3 : 1);

    // Add labels with lines
    const labelRadius = radius * 1.2;
    const labels = g.selectAll(".label")
      .data(pieData)
      .enter()
      .append("g")
      .attr("class", "label");

    labels.append("line")
      .attr("x1", d => {
        const pos = arc.centroid(d);
        return pos[0];
      })
      .attr("y1", d => {
        const pos = arc.centroid(d);
        return pos[1];
      })
      .attr("x2", d => {
        const pos = arc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        const x = Math.cos(midAngle - Math.PI / 2) * labelRadius;
        return x;
      })
      .attr("y2", d => {
        const pos = arc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        const y = Math.sin(midAngle - Math.PI / 2) * labelRadius;
        return y;
      })
      .style("stroke", "#999")
      .style("stroke-width", "1px");

    labels.append("text")
      .attr("transform", d => {
        const pos = arc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        const x = Math.cos(midAngle - Math.PI / 2) * (labelRadius + 10);
        const y = Math.sin(midAngle - Math.PI / 2) * (labelRadius + 10);
        return `translate(${x},${y})`;
      })
      .style("text-anchor", d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? "start" : "end";
      })
      .style("font-size", "12px")
      .each(function(d) {
        const text = viewState.type === 'sector' && viewState.sector
          ? subsectorDefinitions[viewState.sector][d.data[0]]
          : sectorNames[d.data[0]];
        
        const value = d.data[1].toFixed(3);
        
        d3.select(this)
          .append("tspan")
          .attr("x", 0)
          .attr("dy", "0em")
          .text(text);
        
        d3.select(this)
          .append("tspan")
          .attr("x", 0)
          .attr("dy", "1.2em")
          .style("fill", "#666")
          .text(value);
      });

    // Add interactivity
    segments.selectAll("path")
      .on("click", (event, d) => {
        onSectorSelect(selectedSector === d.data[0] ? null : d.data[0]);
      })
      .on("mouseover", (event, d) => {
        const sector = d.data[0];
        const value = d.data[1];
        
        let tooltipContent = `
          <div style="font-weight: 700; margin-bottom: 8px; color: #1A202C; font-size: 16px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px;">
            ${viewState.type === 'sector' && viewState.sector ? 
              subsectorDefinitions[viewState.sector][sector] : 
              sectorNames[sector]}
          </div>
          <div style="margin-bottom: 4px;">
            Score: ${value.toFixed(3)}
          </div>
        `;

        tooltip.html(tooltipContent);
        tooltip.style("visibility", "visible");

        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr("transform", "scale(1.05)");
      })
      .on("mousemove", (event) => {
        const [mouseX, mouseY] = d3.pointer(event, document.body);
        
        tooltip
          .style("left", `${mouseX + 16}px`)
          .style("top", `${mouseY - 16}px`);
      })
      .on("mouseout", (event) => {
        tooltip.style("visibility", "hidden");
        
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .attr("transform", "scale(1)");
      });

  }, [data, selectedSector, onSectorSelect, viewState]);

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        width="100%"
        height="400"
        className="bg-white"
        style={{ overflow: "visible" }}
      />
      <div ref={tooltipRef} className="absolute" />
    </div>
  );
};

export default PieChart;