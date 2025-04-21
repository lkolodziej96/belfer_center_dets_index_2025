import type { SectorWeights } from '../types';

export const defaultSectorWeights = {
  ai: 0.2,
  quantum: 0.2,
  semiconductors: 0.2,
  biotech: 0.2,
  space: 0.2
};

export const defaultAISubsectorWeights = {
  algorithms: 0.20,
  computing_power: 0.20,
  data: 0.20,
  economic_resources: 0.20,
  global_player: 0.025,
  human_capital: 0.15,
  regulatory: 0.025
};

export const defaultQuantumSubsectorWeights = {
  economic_resources: 0.20,
  human_capital: 0.15,
  policy_environment: 0.10,
  quantum_communications: 0.20,
  quantum_computing: 0.10,
  quantum_sensing: 0.20,
  security: 0.05
};

export const defaultSemiconductorsSubsectorWeights = {
  assembly_testing: 0.05,
  chip_design: 0.40,
  economic_resources: 0.15,
  equipment: 0.05,
  global_player: 0.025,
  human_capital: 0.15,
  manufacturing: 0.125,
  raw_materials: 0.025,
  regulatory: 0.025
};

export const defaultBiotechSubsectorWeights = {
  economic_resources: 0.15,
  security: 0.05,
  human_capital: 0.25,
  global_player: 0.025,
  regulatory: 0.025,
  agricultural_technology: 0.15,
  vaccine_research: 0.15,
  pharmaceutical_production: 0.15,
  genetic_engineering: 0.10
};

export const defaultSpaceSubsectorWeights = {
  domestic_launch_capability: 0.15,
  economic_resources: 0.15,
  global_player: 0.05,
  human_capital: 0.15,
  pnt: 0.10,
  regulatory: 0.05,
  remote_sensing: 0.10,
  science_exploration: 0.10,
  telecommunications: 0.10,
  security: 0.05
};

// Main view colors
export const sectorColors = {
  ai: '#5A97DB',
  quantum: '#69B97E',
  semiconductors: '#ED8936',
  biotech: '#9F7AEA',
  space: '#F56565'
};

// View-specific base colors
export const viewBaseColors = {
  main: '#962437',
  ai: '#5A97DB',
  quantum: '#69B97E',
  semiconductors: '#ED8936',
  biotech: '#9F7AEA',
  space: '#F56565'
};

// AI view colors
export const aiSubsectorColors = {
  algorithms: '#1E40AF',
  computing_power: '#2563EB',
  data: '#3B82F6',
  economic_resources: '#60A5FA',
  global_player: '#93C5FD',
  human_capital: '#BFDBFE',
  regulatory: '#DBEAFE'
};

// Quantum view colors
export const quantumSubsectorColors = {
  economic_resources: '#065F46',
  security: '#047857',
  human_capital: '#059669',
  policy_environment: '#10B981',
  quantum_sensing: '#34D399',
  quantum_communications: '#6EE7B7',
  quantum_computing: '#A7F3D0'
};

// Semiconductors view colors
export const semiconductorsSubsectorColors = {
  assembly_testing: '#7C2D12',
  chip_design: '#9A3412',
  economic_resources: '#C2410C',
  equipment: '#EA580C',
  global_player: '#F97316',
  human_capital: '#FB923C',
  manufacturing: '#FDBA74',
  raw_materials: '#FED7AA',
  regulatory: '#FFEDD5'
};

// Biotech view colors
export const biotechSubsectorColors = {
  agricultural_technology: '#4C1D95',
  genetic_engineering: '#5B21B6',
  global_player: '#6D28D9',
  human_capital: '#7C3AED',
  pharmaceutical_production: '#8B5CF6',
  regulatory: '#A78BFA',
  economic_resources: '#C4B5FD',
  security: '#DDD6FE',
  vaccine_research: '#EDE9FE'
};

// Space view colors
export const spaceSubsectorColors = {
  domestic_launch_capability: '#991B1B',
  economic_resources: '#B91C1C',
  global_player: '#DC2626',
  human_capital: '#EF4444',
  pnt: '#F87171',
  regulatory: '#FCA5A5',
  remote_sensing: '#FECACA',
  science_exploration: '#FEE2E2',
  telecommunications: '#FEF2F2',
  security: '#FFF1F1'
};

export const sectorNames = {
  ai: 'AI',
  quantum: 'Quantum',
  semiconductors: 'Semiconductors',
  biotech: 'Biotech',
  space: 'Space'
};

export const subsectorDefinitions = {
  ai: {
    algorithms: 'Algorithms',
    computing_power: 'Computing Power',
    data: 'Data',
    economic_resources: 'Economic Resources',
    global_player: 'Global Player',
    human_capital: 'Human Capital',
    regulatory: 'Regulatory'
  },
  quantum: {
    economic_resources: 'Economic Resources',
    security: 'Security',
    human_capital: 'Human Capital',
    policy_environment: 'Policy Environment',
    quantum_sensing: 'Quantum Sensing',
    quantum_communications: 'Quantum Communications',
    quantum_computing: 'Quantum Computing'
  },
  semiconductors: {
    economic_resources: 'Economic Resources',
    human_capital: 'Human Capital',
    global_player: 'Global Player',
    regulatory: 'Regulatory',
    raw_materials: 'Raw Materials',
    chip_design: 'Chip Design',
    manufacturing: 'Manufacturing',
    equipment: 'Equipment',
    assembly_testing: 'Assembly Testing'
  },
  biotech: {
    agricultural_technology: 'Agricultural Technology',
    genetic_engineering: 'Genetic Engineering',
    global_player: 'Global Player',
    human_capital: 'Human Capital',
    pharmaceutical_production: 'Pharmaceutical Production',
    regulatory: 'Regulatory',
    economic_resources: 'Economic Resources',
    security: 'Security',
    vaccine_research: 'Vaccine Research'
  },
  space: {
    domestic_launch_capability: 'Launch Capability',
    economic_resources: 'Economic Resources',
    global_player: 'Global Player',
    human_capital: 'Human Capital',
    pnt: 'PNT',
    regulatory: 'Regulatory',
    remote_sensing: 'Remote Sensing',
    science_exploration: 'Science & Exploration',
    telecommunications: 'Telecommunications',
    security: 'Security'
  }
};