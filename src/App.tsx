import React, { useState, useEffect } from 'react';
import WorldMap from './components/WorldMap';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DataTable from './components/DataTable';
import SectorWeights from './components/SectorWeights';
import SectorNav from './components/SectorNav';
import { defaultSectorWeights, defaultAISubsectorWeights, defaultQuantumSubsectorWeights, defaultSemiconductorsSubsectorWeights, defaultBiotechSubsectorWeights, defaultSpaceSubsectorWeights } from './utils/constants';
import { mainData } from './data/mainData';
import type { CountryData, SectorWeights as SectorWeightsType, ViewState } from './types';

function App() {
  const [data, setData] = useState<CountryData[]>(mainData);
  const [sectorWeights, setSectorWeights] = useState<SectorWeightsType>(defaultSectorWeights);
  const [aiSubsectorWeights, setAISubsectorWeights] = useState<Record<string, number>>(defaultAISubsectorWeights);
  const [quantumSubsectorWeights, setQuantumSubsectorWeights] = useState<Record<string, number>>(defaultQuantumSubsectorWeights);
  const [semiconductorsSubsectorWeights, setSemiconductorsSubsectorWeights] = useState<Record<string, number>>(defaultSemiconductorsSubsectorWeights);
  const [biotechSubsectorWeights, setBiotechSubsectorWeights] = useState<Record<string, number>>(defaultBiotechSubsectorWeights);
  const [spaceSubsectorWeights, setSpaceSubsectorWeights] = useState<Record<string, number>>(defaultSpaceSubsectorWeights);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [viewState, setViewState] = useState<ViewState>({ type: 'main' });

  const overviewColumns = [
    { key: 'ai', name: 'AI' },
    { key: 'quantum', name: 'Quantum' },
    { key: 'semiconductors', name: 'Semiconductors' },
    { key: 'biotech', name: 'Biotech' },
    { key: 'space', name: 'Space' }
  ];

  const aiColumns = [
    { key: 'algorithms', name: 'Algorithms' },
    { key: 'computing_power', name: 'Computing Power' },
    { key: 'data', name: 'Data' },
    { key: 'economic_resources', name: 'Economic Resources' },
    { key: 'global_player', name: 'Global Player' },
    { key: 'human_capital', name: 'Human Capital' },
    { key: 'regulatory', name: 'Regulatory' }
  ];

  const quantumColumns = [
    { key: 'economic_resources', name: 'Economic Resources' },
    { key: 'security', name: 'Security' },
    { key: 'human_capital', name: 'Human Capital' },
    { key: 'policy_environment', name: 'Policy Environment' },
    { key: 'quantum_sensing', name: 'Quantum Sensing' },
    { key: 'quantum_communications', name: 'Quantum Communications' },
    { key: 'quantum_computing', name: 'Quantum Computing' }
  ];

  const semiconductorsColumns = [
    { key: 'economic_resources', name: 'Economic Resources' },
    { key: 'human_capital', name: 'Human Capital' },
    { key: 'global_player', name: 'Global Player' },
    { key: 'regulatory', name: 'Regulatory' },
    { key: 'raw_materials', name: 'Raw Materials' },
    { key: 'chip_design', name: 'Chip Design' },
    { key: 'manufacturing', name: 'Manufacturing' },
    { key: 'equipment', name: 'Equipment' },
    { key: 'assembly_testing', name: 'Assembly Testing' }
  ];

  const biotechColumns = [
    { key: 'economic_resources', name: 'Economic Resources' },
    { key: 'security', name: 'Security' },
    { key: 'human_capital', name: 'Human Capital' },
    { key: 'global_player', name: 'Global Player' },
    { key: 'regulatory', name: 'Regulatory' },
    { key: 'agricultural_technology', name: 'Agricultural Technology' },
    { key: 'vaccine_research', name: 'Vaccine Research' },
    { key: 'pharmaceutical_production', name: 'Pharmaceutical Production' },
    { key: 'genetic_engineering', name: 'Genetic Engineering' }
  ];

  const spaceColumns = [
    { key: 'economic_resources', name: 'Economic Resources' },
    { key: 'human_capital', name: 'Human Capital' },
    { key: 'security', name: 'Security' },
    { key: 'global_player', name: 'Global Player' },
    { key: 'regulatory', name: 'Regulatory' },
    { key: 'domestic_launch_capability', name: 'Launch Capability' },
    { key: 'science_exploration', name: 'Science & Exploration' },
    { key: 'pnt', name: 'PNT' },
    { key: 'telecommunications', name: 'Telecommunications' },
    { key: 'remote_sensing', name: 'Remote Sensing' }
  ];

  const handleSort = (key: string) => {
    console.log('Sorting by:', key);
  };

  // Update data when weights change
  useEffect(() => {
    const updatedData = mainData.map(country => {
      if (viewState.type === 'sector') {
        const sectorDetails = country.sectorDetails ?? {};
        
        if (viewState.sector === 'ai' && sectorDetails.ai) {
          const aiSubsectorScores = Object.entries(sectorDetails.ai).reduce((acc, [key, value]) => {
            acc[key] = (value ?? 0) * (aiSubsectorWeights[key] ?? 0);
            return acc;
          }, {} as Record<string, number>);

          const aiTotalScore = Object.values(aiSubsectorScores).reduce((sum, score) => sum + score, 0);

          return {
            ...country,
            sectorDetails: {
              ...sectorDetails,
              ai: aiSubsectorScores
            },
            totalScore: aiTotalScore
          };
        } else if (viewState.sector === 'quantum' && sectorDetails.quantum) {
          const quantumSubsectorScores = Object.entries(sectorDetails.quantum).reduce((acc, [key, value]) => {
            acc[key] = (value ?? 0) * (quantumSubsectorWeights[key] ?? 0);
            return acc;
          }, {} as Record<string, number>);

          const quantumTotalScore = Object.values(quantumSubsectorScores).reduce((sum, score) => sum + score, 0);

          return {
            ...country,
            sectorDetails: {
              ...sectorDetails,
              quantum: quantumSubsectorScores
            },
            totalScore: quantumTotalScore
          };
        } else if (viewState.sector === 'semiconductors' && sectorDetails.semiconductors) {
          const semiconductorsSubsectorScores = Object.entries(sectorDetails.semiconductors).reduce((acc, [key, value]) => {
            acc[key] = (value ?? 0) * (semiconductorsSubsectorWeights[key] ?? 0);
            return acc;
          }, {} as Record<string, number>);

          const semiconductorsTotalScore = Object.values(semiconductorsSubsectorScores).reduce((sum, score) => sum + score, 0);

          return {
            ...country,
            sectorDetails: {
              ...sectorDetails,
              semiconductors: semiconductorsSubsectorScores
            },
            totalScore: semiconductorsTotalScore
          };
        } else if (viewState.sector === 'biotech' && sectorDetails.biotech) {
          const biotechSubsectorScores = Object.entries(sectorDetails.biotech).reduce((acc, [key, value]) => {
            acc[key] = (value ?? 0) * (biotechSubsectorWeights[key] ?? 0);
            return acc;
          }, {} as Record<string, number>);

          const biotechTotalScore = Object.values(biotechSubsectorScores).reduce((sum, score) => sum + score, 0);

          return {
            ...country,
            sectorDetails: {
              ...sectorDetails,
              biotech: biotechSubsectorScores
            },
            totalScore: biotechTotalScore
          };
        } else if (viewState.sector === 'space' && sectorDetails.space) {
          const spaceSubsectorScores = Object.entries(sectorDetails.space).reduce((acc, [key, value]) => {
            acc[key] = (value ?? 0) * (spaceSubsectorWeights[key] ?? 0);
            return acc;
          }, {} as Record<string, number>);

          const spaceTotalScore = Object.values(spaceSubsectorScores).reduce((sum, score) => sum + score, 0);

          return {
            ...country,
            sectorDetails: {
              ...sectorDetails,
              space: spaceSubsectorScores
            },
            totalScore: spaceTotalScore
          };
        }
      }

      const sectorScores = country.sectorScores ?? {};
      const weightedSectorScores = {
        ai: (sectorScores.ai ?? 0) * sectorWeights.ai,
        quantum: (sectorScores.quantum ?? 0) * sectorWeights.quantum,
        semiconductors: (sectorScores.semiconductors ?? 0) * sectorWeights.semiconductors,
        biotech: (sectorScores.biotech ?? 0) * sectorWeights.biotech,
        space: (sectorScores.space ?? 0) * sectorWeights.space
      };

      const totalScore = Object.values(weightedSectorScores).reduce((sum, score) => sum + score, 0);

      return {
        ...country,
        sectorScores: weightedSectorScores,
        totalScore
      };
    });

    setData(updatedData);
  }, [sectorWeights, aiSubsectorWeights, quantumSubsectorWeights, semiconductorsSubsectorWeights, biotechSubsectorWeights, spaceSubsectorWeights, viewState]);

  const handleSectorWeightChange = (sector: string, value: number) => {
    if (viewState.type === 'sector') {
      if (viewState.sector === 'ai') {
        setAISubsectorWeights(prev => ({
          ...prev,
          [sector]: value
        }));
      } else if (viewState.sector === 'quantum') {
        setQuantumSubsectorWeights(prev => ({
          ...prev,
          [sector]: value
        }));
      } else if (viewState.sector === 'semiconductors') {
        setSemiconductorsSubsectorWeights(prev => ({
          ...prev,
          [sector]: value
        }));
      } else if (viewState.sector === 'biotech') {
        setBiotechSubsectorWeights(prev => ({
          ...prev,
          [sector]: value
        }));
      } else if (viewState.sector === 'space') {
        setSpaceSubsectorWeights(prev => ({
          ...prev,
          [sector]: value
        }));
      }
    } else {
      setSectorWeights(prev => ({
        ...prev,
        [sector]: value
      }));
    }
  };

  const handleSectorSelect = (sector: string | null) => {
    setSelectedSector(sector);
  };

  const handleCountrySelect = (country: string | null) => {
    setSelectedCountry(country);
  };

  const handleSectorNavClick = (sector: string | null) => {
    setViewState({ type: sector ? 'sector' : 'main', sector });
    setSelectedSector(null);
    setSelectedCountry(null);
  };

  const getActiveColumns = () => {
    if (viewState.type === 'sector') {
      switch (viewState.sector) {
        case 'ai':
          return aiColumns;
        case 'quantum':
          return quantumColumns;
        case 'semiconductors':
          return semiconductorsColumns;
        case 'biotech':
          return biotechColumns;
        case 'space':
          return spaceColumns;
        default:
          return overviewColumns;
      }
    }
    return overviewColumns;
  };

  return (
    <div className="w-[1400px] mx-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <img 
              src="/image.png" 
              alt="Belfer Center Logo" 
              className="h-16"
            />
            <button
              onClick={() => {
                setSelectedSector(null);
                setSelectedCountry(null);
              }}
              className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors font-medium"
            >
              Reset Selection
            </button>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white rounded-2xl shadow-xl px-8 py-4 border border-gray-100">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#962437] to-[#d4526d] bg-clip-text text-transparent">
                Critical and Emerging Technologies Index 2025
              </h1>
            </div>
          </div>
        </div>
      </div>

      <SectorNav 
        currentSector={viewState.sector}
        onSectorClick={handleSectorNavClick}
      />

      <div className="px-8 py-8">
        <div className="flex gap-8">
          {/* Left Panel - Sector Weights */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                {viewState.type === 'sector' ? `${viewState.sector?.toUpperCase()} Subsector Weights` : 'Sector Weights'}
              </h2>
              <SectorWeights 
                weights={
                  viewState.type === 'sector'
                    ? viewState.sector === 'ai'
                      ? aiSubsectorWeights
                      : viewState.sector === 'quantum'
                      ? quantumSubsectorWeights
                      : viewState.sector === 'semiconductors'
                      ? semiconductorsSubsectorWeights
                      : viewState.sector === 'biotech'
                      ? biotechSubsectorWeights
                      : viewState.sector === 'space'
                      ? spaceSubsectorWeights
                      : sectorWeights
                    : sectorWeights
                }
                onChange={handleSectorWeightChange}
                viewState={viewState}
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-[960px] space-y-8">
            {/* World Map */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                {viewState.type === 'sector' 
                  ? `Global ${viewState.sector?.toUpperCase()} Capabilities`
                  : 'Global View'
                }
              </h2>
              <WorldMap 
                data={data} 
                selectedSector={selectedSector}
                selectedCountry={selectedCountry}
                onCountrySelect={handleCountrySelect}
                viewState={viewState}
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-5 gap-8">
              {/* Bar Chart (3 columns) */}
              <div className="col-span-3 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  {viewState.type === 'sector'
                    ? `${viewState.sector?.toUpperCase()} Rankings`
                    : 'Rankings'
                  }
                </h2>
                <BarChart 
                  data={data} 
                  selectedSector={selectedSector}
                  selectedCountry={selectedCountry}
                  onCountrySelect={handleCountrySelect}
                  viewState={viewState}
                />
              </div>

              {/* Pie Chart (2 columns) */}
              <div className="col-span-2 bg-white rounded-xl shadow-lg p-8 border border-gray-100 overflow-hidden">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  {viewState.type === 'sector'
                    ? `${viewState.sector?.toUpperCase()} Subsector Distribution`
                    : 'Sector Distribution'
                  }
                </h2>
                <div className="relative" style={{ height: "400px" }}>
                  <PieChart 
                    data={data} 
                    selectedSector={selectedSector}
                    onSectorSelect={handleSectorSelect}
                    viewState={viewState}
                  />
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                {viewState.type === 'sector'
                  ? `${viewState.sector?.toUpperCase()} Capabilities Data`
                  : 'Data Table'
                }
              </h2>
              <DataTable 
                data={data}
                columns={getActiveColumns()}
                selectedSector={selectedSector}
                selectedCountry={selectedCountry}
                viewState={viewState}
                handleSort={handleSort}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;