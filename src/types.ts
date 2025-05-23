export interface SubsectorData {
  name: string;
  score: number;
}

export interface SectorData {
  name: string;
  score: number;
  subsectors: SubsectorData[];
}

export interface CountryData {
  country: string;
  totalScore: number;
  sectorScores: {
    ai: number;
    quantum: number;
    semiconductors: number;
    biotech: number;
    space: number;
  };
  sectorDetails: {
    [key: string]: {
      [subsector: string]: number;
    };
  };
}

export interface SectorWeights {
  ai: number;
  quantum: number;
  semiconductors: number;
  biotech: number;
  space: number;
}

export interface InteractiveProps {
  selectedCountry: string | null;
  onCountrySelect: (country: string | null) => void;
}

export interface ViewState {
  type: 'main' | 'sector';
  sector: string | null;
}

export interface AISectorData {
  economic_resources: number;
  human_capital: number;
  global_player: number;
  regulatory: number;
  computing_power: number;
  algorithms: number;
  data: number;
}

export interface QuantumSectorData {
  economic_resources: number;
  security: number;
  human_capital: number;
  policy_environment: number;
  quantum_sensing: number;
  quantum_communications: number;
  quantum_computing: number;
}