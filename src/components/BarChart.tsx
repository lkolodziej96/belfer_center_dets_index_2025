import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { CountryData, ViewState } from '../types';
import { 
  sectorColors, 
  subsectorDefinitions, 
  aiSubsectorColors, 
  quantumSubsectorColors,
  spaceSubsectorColors,
  biotechSubsectorColors,
  defaultSpaceSubsectorWeights,
  defaultBiotechSubsectorWeights
} from '../utils/constants';

interface Props {
  data: CountryData[];
  selectedSector: string | null;
  selectedCountry: string | null;
  onCountrySelect: (country: string | null) => void;
  viewState: ViewState;
}

const BarChart: React.FC<Props> = ({ 
  data, 
  selectedSector,
  selectedCountry,
  onCountrySelect,
  viewState
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length || !containerRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = 400;
    const margin = { top: 40, right: 20, bottom: 100, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Sort data by total score or sector score
    const sortedData = [...data].sort((a, b) => {
      if (viewState.type === 'sector' && viewState.sector) {
        const aDetails = a.sectorDetails?.[viewState.sector] ?? {};
        const bDetails = b.sectorDetails?.[viewState.sector] ?? {};
        
        const getWeightedTotal = (details: Record<string, number>, sector: string) => {
          return Object.entries(details).reduce((sum, [key, val]) => {
            const weight = sector === 'space' 
              ? defaultSpaceSubsectorWeights[key as keyof typeof defaultSpaceSubsectorWeights] || 0
              : sector === 'biotech'
              ? defaultBiotechSubsectorWeights[key as keyof typeof defaultBiotechSubsectorWeights] || 0
              : 1;
            return sum + ((val ?? 0) * weight);
          }, 0);
        };

        const aTotal = getWeightedTotal(aDetails, viewState.sector);
        const bTotal = getWeightedTotal(bDetails, viewState.sector);
        
        return bTotal - aTotal;
      }
      return (b.totalScore ?? 0) - (a.totalScore ?? 0);
    });

    // Get data keys based on view state
    const keys = viewState.type === 'sector' && viewState.sector && sortedData[0]?.sectorDetails?.[viewState.sector]
      ? Object.keys(sortedData[0].sectorDetails[viewState.sector])
      : Object.keys(sortedData[0]?.sectorScores ?? {});

    // Prepare data for stacking
    const stackData = d3.stack<CountryData>()
      .keys(keys)
      .value((d, key) => {
        if (viewState.type === 'sector' && viewState.sector && d.sectorDetails) {
          const score = d.sectorDetails[viewState.sector]?.[key] ?? 0;
          const weight = viewState.sector === 'space' 
            ? defaultSpaceSubsectorWeights[key as keyof typeof defaultSpaceSubsectorWeights] || 0
            : viewState.sector === 'biotech'
            ? defaultBiotechSubsectorWeights[key as keyof typeof defaultBiotechSubsectorWeights] || 0
            : 1;
          return score * weight;
        }
        return d.sectorScores?.[key] ?? 0;
      })(sortedData);

    const svg = d3.select(svgRef.current);
    
    // Only clear if no previous elements exist
    if (svg.select("g").empty()) {
      svg.selectAll("*").remove();
      svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    }

    const g = svg.select("g");

    // Create scales
    const x = d3.scaleBand()
      .domain(sortedData.map(d => d.country))
      .range([0, innerWidth])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(stackData[stackData.length - 1], d => d[1]) || 0])
      .range([innerHeight, 0]);

    // Update axes with transitions
    const xAxis = g.select(".x-axis");
    if (xAxis.empty()) {
      g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end")
        .attr("dx", "-0.8em")
        .attr("dy", "0.15em")
        .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
        .style("font-size", "11px")
        .style("font-weight", "500");
    } else {
      xAxis.transition()
        .duration(750)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end")
        .attr("dx", "-0.8em")
        .attr("dy", "0.15em")
        .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
        .style("font-size", "11px")
        .style("font-weight", "500");
    }

    const yAxis = g.select(".y-axis");
    if (yAxis.empty()) {
      g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y).ticks(8).tickFormat(d => d.toString()))
        .selectAll("text")
        .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
        .style("font-size", "11px")
        .style("font-weight", "500");
    } else {
      yAxis.transition()
        .duration(750)
        .call(d3.axisLeft(y).ticks(8).tickFormat(d => d.toString()))
        .selectAll("text")
        .style("font-family", "'Inter', 'Helvetica', 'Arial', sans-serif")
        .style("font-size", "11px")
        .style("font-weight", "500");
    }

    // Style the axis lines and ticks
    svg.selectAll(".domain, .tick line")
      .style("stroke", "#cbd5e0")
      .style("stroke-width", "1px");

    // Create tooltip
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
      .style("z-index", "1000")
      .style("min-width", "220px");

    // Update stacked bars with transitions
    const layers = g.selectAll("g.layer")
      .data(stackData);

    layers.exit().remove();

    const layersEnter = layers.enter()
      .append("g")
      .attr("class", "layer");

    const layersMerge = layers.merge(layersEnter)
      .style("fill", (d, i) => {
        if (viewState.type === 'sector' && viewState.sector) {
          if (viewState.sector === 'space') {
            return spaceSubsectorColors[keys[i] as keyof typeof spaceSubsectorColors];
          } else if (viewState.sector === 'biotech') {
            return biotechSubsectorColors[keys[i] as keyof typeof biotechSubsectorColors];
          } else if (viewState.sector === 'ai') {
            return aiSubsectorColors[keys[i] as keyof typeof aiSubsectorColors];
          } else if (viewState.sector === 'quantum') {
            return quantumSubsectorColors[keys[i] as keyof typeof quantumSubsectorColors];
          } else {
            const baseColor = sectorColors[viewState.sector];
            return d3.color(baseColor)!.brighter(i / keys.length).toString();
          }
        }
        return sectorColors[keys[i]];
      });

    const rects = layersMerge.selectAll("rect")
      .data(d => d);

    rects.exit().remove();

    const rectsEnter = rects.enter()
      .append("rect")
      .attr("x", d => x(d.data.country) || 0)
      .attr("y", innerHeight)
      .attr("height", 0)
      .attr("width", x.bandwidth());

    rects.merge(rectsEnter)
      .transition()
      .duration(750)
      .ease(d3.easeQuadOut)
      .attr("x", d => x(d.data.country) || 0)
      .attr("y", d => y(d[1]))
      .attr("height", d => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth())
      .style("opacity", (d, i, nodes) => {
        const currentKey = keys[d3.select(nodes[i].parentNode).datum().index];
        if (selectedCountry && d.data.country !== selectedCountry) return 0.3;
        if (selectedSector && currentKey !== selectedSector) return 0.3;
        return 1;
      });

    // Add interactivity
    layersMerge.selectAll("rect")
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        onCountrySelect(d.data.country === selectedCountry ? null : d.data.country);
      })
      .on("mouseover", (event, d) => {
        const hoveredKey = keys[d3.select(event.currentTarget.parentNode).datum().index];
        
        let tooltipContent = `
          <div style="font-weight: 700; margin-bottom: 8px; color: #1A202C; font-size: 16px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px;">
            ${d.data.country}
          </div>
          <div style="margin-bottom: 8px;">
        `;

        if (viewState.type === 'sector' && viewState.sector && d.data.sectorDetails) {
          // Show subsector scores
          Object.entries(d.data.sectorDetails[viewState.sector] ?? {}).forEach(([key, score]) => {
            const weight = viewState.sector === 'space' 
              ? defaultSpaceSubsectorWeights[key as keyof typeof defaultSpaceSubsectorWeights] || 0
              : viewState.sector === 'biotech'
              ? defaultBiotechSubsectorWeights[key as keyof typeof defaultBiotechSubsectorWeights] || 0
              : 1;
            const weightedScore = (score as number) * weight;
            
            const color = viewState.sector === 'space' 
              ? spaceSubsectorColors[key as keyof typeof spaceSubsectorColors]
              : viewState.sector === 'biotech'
              ? biotechSubsectorColors[key as keyof typeof biotechSubsectorColors]
              : viewState.sector === 'ai'
                ? aiSubsectorColors[key as keyof typeof aiSubsectorColors]
                : viewState.sector === 'quantum'
                  ? quantumSubsectorColors[key as keyof typeof quantumSubsectorColors]
                  : d3.color(sectorColors[viewState.sector])!.brighter(keys.indexOf(key) / keys.length);

            tooltipContent += `
              <div style="
                display: flex; 
                align-items: center; 
                margin-bottom: 6px;
                padding: 4px;
                background-color: ${key === hoveredKey ? '#f7fafc' : 'transparent'};
                border-radius: 4px;
                ${key === hoveredKey ? 'font-weight: 600;' : ''}
              ">
                <div style="
                  width: 12px; 
                  height: 12px; 
                  background-color: ${color}; 
                  margin-right: 8px; 
                  border-radius: 2px;
                "></div>
                <div style="flex-grow: 1; color: ${key === hoveredKey ? '#2D3748' : '#4A5568'};">
                  ${subsectorDefinitions[viewState.sector][key]}
                </div>
                <div style="color: ${key === hoveredKey ? '#2D3748' : '#718096'};">
                  ${weightedScore.toFixed(3)}
                </div>
              </div>
            `;
          });
        } else {
          // Show sector scores
          Object.entries(d.data.sectorScores ?? {}).forEach(([key, score]) => {
            tooltipContent += `
              <div style="
                display: flex; 
                align-items: center; 
                margin-bottom: 6px;
                padding: 4px;
                background-color: ${key === hoveredKey ? '#f7fafc' : 'transparent'};
                border-radius: 4px;
                ${key === hoveredKey ? 'font-weight: 600;' : ''}
              ">
                <div style="
                  width: 12px; 
                  height: 12px; 
                  background-color: ${sectorColors[key]}; 
                  margin-right: 8px; 
                  border-radius: 2px;
                "></div>
                <div style="flex-grow: 1; color: ${key === hoveredKey ? '#2D3748' : '#4A5568'};">
                  ${key.toUpperCase()}
                </div>
                <div style="color: ${key === hoveredKey ? '#2D3748' : '#718096'};">
                  ${score.toFixed(3)}
                </div>
              </div>
            `;
          });
        }

        tooltipContent += `
          </div>
          <div style="font-weight: 600; color: #2D3748; border-top: 1px solid #E2E8F0; padding-top: 6px;">
            Total Score: ${d.data.totalScore.toFixed(3)}
          </div>
        `;

        tooltip.html(tooltipContent);
        tooltip.style("visibility", "visible");

        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .style("opacity", 1)
          .style("stroke", "#000")
          .style("stroke-width", "1px");
      })
      .on("mousemove", (event) => {
        const containerRect = containerRef.current!.getBoundingClientRect();
        const svgRect = svgRef.current!.getBoundingClientRect();
        const tooltipNode = tooltipRef.current!;
        
        const xPos = event.clientX - svgRect.left;
        const yPos = event.clientY - svgRect.top;
        
        let left = xPos + margin.left + 16;
        let top = yPos;
        
        if (left + tooltipNode.offsetWidth > containerRect.width) {
          left = xPos - tooltipNode.offsetWidth - 16;
        }
        
        if (top + tooltipNode.offsetHeight > containerRect.height) {
          top = containerRect.height - tooltipNode.offsetHeight - 8;
        }
        if (top < 0) {
          top = 8;
        }
        
        tooltip
          .style("left", `${left}px`)
          .style("top", `${top}px`);
      })
      .on("mouseout", (event) => {
        tooltip.style("visibility", "hidden");

        const currentKey = keys[d3.select(event.currentTarget.parentNode).datum().index];
        d3.select(event.currentTarget)
          .transition()
          .duration(200)
          .style("opacity", () => {
            if (selectedCountry && event.target.__data__.data.country !== selectedCountry) return 0.3;
            if (selectedSector && currentKey !== selectedSector) return 0.3;
            return 1;
          })
          .style("stroke", "none");
      });

  }, [data, selectedSector, selectedCountry, onCountrySelect, viewState]);

  return (
    <div ref={containerRef} className="relative">
      <svg
        ref={svgRef}
        width="100%"
        height="400"
        className="bg-white"
      />
      <div ref={tooltipRef} className="absolute" />
    </div>
  );
};

export default BarChart;