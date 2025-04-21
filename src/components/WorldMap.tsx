import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import Select from 'react-select';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import type { CountryData, ViewState } from '../types';
import { calculateColorIntensity } from '../utils/dataProcessing';
import { subsectorDefinitions } from '../utils/constants';

interface Props {
  data: CountryData[];
  selectedSector: string | null;
  selectedCountry: string | null;
  onCountrySelect: (country: string | null) => void;
  viewState: ViewState;
}

interface CountryOption {
  value: string;
  label: string;
}

const WorldMap: React.FC<Props> = ({ 
  data, 
  selectedSector, 
  selectedCountry,
  onCountrySelect,
  viewState
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<Element, unknown>>();
  const geoPathRef = useRef<d3.GeoPath>();
  const featuresRef = useRef<any[]>([]);

  // Map for converting between world map country names and data country names
  const countryNameMap = {
    'United States of America': 'United States',
    'USA': 'United States',
    'US': 'United States',
    'U.S.A.': 'United States',
    'United Arab Emirates': 'U.A.E.',
    'UAE': 'U.A.E.'
  };

  const countryOptions = useMemo(() => {
    return data
      .map(country => ({
        value: country.country,
        label: country.country
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [data]);

  const selectedOption = useMemo(() => {
    return selectedCountry ? {
      value: selectedCountry,
      label: selectedCountry
    } : null;
  }, [selectedCountry]);

  const handleZoom = (action: 'in' | 'out' | 'reset') => {
    if (!svgRef.current || !zoomRef.current) return;

    const svg = d3.select(svgRef.current);
    const zoom = zoomRef.current;

    if (action === 'reset') {
      svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
    } else {
      const scale = action === 'in' ? 1.5 : 0.667;
      const currentTransform = d3.zoomTransform(svg.node()!);
      
      svg.transition()
        .duration(750)
        .call(
          zoom.transform,
          currentTransform.scale(scale)
        );
    }
  };

  const zoomToCountry = (countryName: string | null) => {
    if (!svgRef.current || !zoomRef.current || !geoPathRef.current || !countryName) return;

    const svg = d3.select(svgRef.current);
    const zoom = zoomRef.current;
    const path = geoPathRef.current;
    const width = svgRef.current.clientWidth;
    const height = 400;

    // Find the feature using both the direct name and mapped name
    const feature = featuresRef.current.find(f => {
      const featureName = f.properties.name;
      return featureName === countryName || 
             countryNameMap[featureName] === countryName ||
             countryNameMap[countryName] === featureName;
    });
    
    if (feature) {
      const bounds = path.bounds(feature);
      const dx = bounds[1][0] - bounds[0][0];
      const dy = bounds[1][1] - bounds[0][1];
      const x = (bounds[0][0] + bounds[1][0]) / 2;
      const y = (bounds[0][1] + bounds[1][1]) / 2;
      
      const scale = Math.min(8, 0.9 / Math.max(dx / width, dy / height));
      const translate = [width / 2 - scale * x, height / 2 - scale * y];
      
      svg.transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity
            .translate(translate[0], translate[1])
            .scale(scale)
        );
    } else {
      svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
    }
  };

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const width = svgRef.current.clientWidth;
    const height = 400;
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
      .scale((width - 3) / (2 * Math.PI))
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);
    geoPathRef.current = path;

    const g = svg.append("g");

    const tooltip = d3.select(tooltipRef.current)
      .style("position", "fixed")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("padding", "12px")
      .style("border", "1px solid #ddd")
      .style("border-radius", "6px")
      .style("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.15)")
      .style("font-size", "14px")
      .style("pointer-events", "none")
      .style("z-index", "1000");

    fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then(response => response.json())
      .then(worldData => {
        const countries = feature(worldData, worldData.objects.countries);
        featuresRef.current = countries.features;

        const maxScore = d3.max(data, d => {
          if (viewState.type === 'sector' && viewState.sector) {
            const sectorDetails = d.sectorDetails?.[viewState.sector] ?? {};
            return d3.max(Object.values(sectorDetails)) || 0;
          }
          return selectedSector ? d.sectorScores[selectedSector] : d.totalScore;
        }) || 0;

        const countryDataMap = new Map(data.map(d => [d.country, d]));

        g.selectAll('path')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('fill', (d: any) => {
            const countryName = d.properties.name;
            const mappedName = countryNameMap[countryName] || countryName;
            const countryData = countryDataMap.get(mappedName);
            
            if (!countryData) return '#e2e8f0';
            
            let score;
            if (viewState.type === 'sector' && viewState.sector) {
              const sectorScores = Object.values(countryData.sectorDetails?.[viewState.sector] ?? {});
              score = sectorScores.length > 0 ? 
                sectorScores.reduce((sum, val) => sum + (val ?? 0), 0) / sectorScores.length :
                0;
            } else {
              score = selectedSector ? 
                countryData.sectorScores[selectedSector] : 
                countryData.totalScore;
            }
            
            return calculateColorIntensity(
              score, 
              maxScore,
              viewState.type,
              viewState.sector
            );
          })
          .attr('stroke', '#cbd5e0')
          .attr('stroke-width', (d: any) => {
            const countryName = d.properties.name;
            const mappedName = countryNameMap[countryName] || countryName;
            const isSelected = selectedCountry === mappedName;
            return isSelected ? 2 : 0.5;
          })
          .style('opacity', (d: any) => {
            if (!selectedCountry) return 1;
            const countryName = d.properties.name;
            const mappedName = countryNameMap[countryName] || countryName;
            return selectedCountry === mappedName ? 1 : 0.5;
          })
          .style('cursor', 'pointer')
          .on('click', (event, d: any) => {
            const countryName = d.properties.name;
            const mappedName = countryNameMap[countryName] || countryName;
            const newCountry = selectedCountry === mappedName ? null : mappedName;
            onCountrySelect(newCountry);
            zoomToCountry(newCountry);
          })
          .on('mouseover', (event, d: any) => {
            const countryName = d.properties.name;
            const mappedName = countryNameMap[countryName] || countryName;
            const countryData = countryDataMap.get(mappedName);
            
            if (countryData) {
              let tooltipContent = `
                <div class="font-semibold mb-2">${countryData.country}</div>
              `;

              if (viewState.type === 'sector' && viewState.sector) {
                const sectorDetails = countryData.sectorDetails?.[viewState.sector] ?? {};
                tooltipContent += `
                  <div class="space-y-1">
                    ${Object.entries(sectorDetails)
                      .map(([key, value]) => `
                        <div class="flex justify-between">
                          <span class="text-gray-600">${subsectorDefinitions[viewState.sector][key]}:</span>
                          <span class="font-medium">${(value as number).toFixed(3)}</span>
                        </div>
                      `).join('')}
                  </div>
                `;
              } else {
                tooltipContent += `
                  <div class="space-y-1">
                    ${Object.entries(countryData.sectorScores)
                      .map(([sector, score]) => `
                        <div class="flex justify-between">
                          <span class="text-gray-600">${sector.toUpperCase()}:</span>
                          <span class="font-medium">${score.toFixed(3)}</span>
                        </div>
                      `).join('')}
                    <div class="flex justify-between pt-1 border-t mt-1">
                      <span class="text-gray-600">Total Score:</span>
                      <span class="font-semibold">${countryData.totalScore.toFixed(3)}</span>
                    </div>
                  </div>
                `;
              }

              tooltip.html(tooltipContent);
              tooltip.style("visibility", "visible");

              d3.select(event.currentTarget)
                .transition()
                .duration(200)
                .attr('stroke-width', '2')
                .attr('stroke', '#4A5568');
            }
          })
          .on('mousemove', (event) => {
            const [mouseX, mouseY] = d3.pointer(event, document.body);
            const tooltipNode = tooltip.node() as HTMLDivElement;
            const tooltipWidth = tooltipNode.offsetWidth;
            const tooltipHeight = tooltipNode.offsetHeight;
            
            let left = mouseX + 16;
            let top = mouseY - tooltipHeight / 2;
            
            if (left + tooltipWidth > window.innerWidth) {
              left = mouseX - tooltipWidth - 16;
            }
            
            if (top < 0) {
              top = 0;
            } else if (top + tooltipHeight > window.innerHeight) {
              top = window.innerHeight - tooltipHeight;
            }
            
            tooltip
              .style("left", `${left}px`)
              .style("top", `${top}px`);
          })
          .on('mouseout', (event) => {
            tooltip.style("visibility", "hidden");
            
            d3.select(event.currentTarget)
              .transition()
              .duration(200)
              .attr('stroke-width', d => {
                const countryName = (d as any).properties.name;
                const mappedName = countryNameMap[countryName] || countryName;
                const isSelected = selectedCountry === mappedName;
                return isSelected ? 2 : 0.5;
              })
              .attr('stroke', '#cbd5e0');
          });

        const zoom = d3.zoom()
          .scaleExtent([1, 8])
          .on('zoom', (event) => {
            g.attr('transform', event.transform);
          });

        zoomRef.current = zoom;
        svg.call(zoom as any);

        if (selectedCountry) {
          zoomToCountry(selectedCountry);
        }
      });
  }, [data, selectedSector, selectedCountry, onCountrySelect, viewState, countryNameMap]);

  const handleCountrySelect = (option: CountryOption | null) => {
    const countryName = option?.value || null;
    onCountrySelect?.(countryName);
    zoomToCountry(countryName);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Select<CountryOption>
          className="w-64"
          value={selectedOption}
          onChange={handleCountrySelect}
          options={countryOptions}
          isClearable
          placeholder="Search for a country..."
          classNames={{
            control: (state) => 
              `!bg-white !border-gray-300 !shadow-sm hover:!border-gray-400 ${
                state.isFocused ? '!border-blue-500 !ring-1 !ring-blue-500' : ''
              }`,
            option: (state) =>
              `!py-2 !px-3 ${
                state.isSelected
                  ? '!bg-blue-500 !text-white'
                  : state.isFocused
                  ? '!bg-blue-50 !text-gray-900'
                  : '!text-gray-700'
              }`,
          }}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleZoom('in')}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => handleZoom('reset')}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="relative">
        <svg
          ref={svgRef}
          width="100%"
          height="400"
          className="bg-gray-50"
          style={{ overflow: "hidden" }}
        />
        <div ref={tooltipRef} />
      </div>
    </div>
  );
};

export default WorldMap;