import type { CountryData } from '../types';

export const mainData: CountryData[] = [
  {
    country: "United States",
    sectorScores: {
      ai: 0.90,
      quantum: 0.89,
      semiconductors: 0.80,
      biotech: 0.89,
      space: 0.97
    },
    totalScore: 0.883,
    sectorDetails: {
      ai: {
        algorithms: 1.00,
        computing_power: 1.00,
        data: 0.53,
        economic_resources: 1.00,
        global_player: 1.00,
        human_capital: 0.85,
        regulatory: 1.00
      },
      quantum: {
        economic_resources: 0.29,
        security: 1.00,
        human_capital: 0.69,
        policy_environment: 1.00,
        quantum_sensing: 1.00,
        quantum_communications: 1.00,
        quantum_computing: 1.00
      },
      semiconductors: {
        economic_resources: 0.35,
        human_capital: 0.93,
        global_player: 1.00,
        regulatory: 1.00,
        raw_materials: 0.32,
        chip_design: 1.00,
        manufacturing: 0.42,
        equipment: 1.00,
        assembly_testing: 0.10
      },
      biotech: {
        economic_resources: 0.94,
        security: 1.00,
        human_capital: 0.85,
        global_player: 0.60,
        regulatory: 0.67,
        agricultural_technology: 1.00,
        vaccine_research: 1.00,
        pharmaceutical_production: 0.63,
        genetic_engineering: 1.00
      },
      space: {
        economic_resources: 1.00,
        human_capital: 0.71,
        security: 1.00,
        global_player: 1.00,
        regulatory: 1.00,
        domestic_launch_capability: 1.00,
        science_exploration: 1.00,
        pnt: 0.67,
        telecommunications: 1.00,
        remote_sensing: 1.00
      }
    }
  },
  {
    country: "Australia",
    sectorScores: {
      ai: 0.13,
      quantum: 0.33,
      semiconductors: 0.03,
      biotech: 0.15,
      space: 0.13
    },
    totalScore: 0.273,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.04,
        data: 0.37,
        economic_resources: 0.01,
        global_player: 0.54,
        human_capital: 0.14,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.02,
        security: 1.00,
        human_capital: 0.07,
        policy_environment: 0.90,
        quantum_sensing: 0.07,
        quantum_communications: 0.14,
        quantum_computing: 0.11
      },
      semiconductors: {
        economic_resources: 0.01,
        human_capital: 0.03,
        global_player: 0.05,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.02,
        security: 0.92,
        human_capital: 0.05,
        global_player: 0.60,
        regulatory: 0.57,
        agricultural_technology: 0.84,
        vaccine_research: 0.20,
        pharmaceutical_production: 0.01,
        genetic_engineering: 0.19
      },
      space: {
        economic_resources: 0.02,
        human_capital: 0.21,
        security: 0.34,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.01,
        science_exploration: 0.00,
        pnt: 0.17,
        telecommunications: 0.00,
        remote_sensing: 0.26
      }
    }
  },
  {
    country: "Brazil",
    sectorScores: {
      ai: 0.08,
      quantum: 0.18,
      semiconductors: 0.03,
      biotech: 0.16,
      space: 0.09
    },
    totalScore: 0.172,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.06,
        data: 0.30,
        economic_resources: 0.04,
        global_player: 0.16,
        human_capital: 0.05,
        regulatory: 0.04
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.50,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.00
      },
      semiconductors: {
        economic_resources: 0.07,
        human_capital: 0.02,
        global_player: 0.05,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.01,
        security: 0.68,
        human_capital: 0.02,
        global_player: 0.80,
        regulatory: 0.86,
        agricultural_technology: 0.81,
        vaccine_research: 0.16,
        pharmaceutical_production: 0.01,
        genetic_engineering: 0.10
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.06,
        security: 0.00,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.00,
        pnt: 0.00,
        telecommunications: 0.00,
        remote_sensing: 0.51
      }
    }
  },
  {
    country: "Canada",
    sectorScores: {
      ai: 0.13,
      quantum: 0.56,
      semiconductors: 0.04,
      biotech: 0.18,
      space: 0.15
    },
    totalScore: 0.268,
    sectorDetails: {
      ai: {
        algorithms: 0.07,
        computing_power: 0.06,
        data: 0.45,
        economic_resources: 0.02,
        global_player: 0.24,
        human_capital: 0.15,
        regulatory: 0.04
      },
      quantum: {
        economic_resources: 0.12,
        security: 1.00,
        human_capital: 0.09,
        policy_environment: 1.00,
        quantum_sensing: 0.07,
        quantum_communications: 0.49,
        quantum_computing: 0.79
      },
      semiconductors: {
        economic_resources: 0.02,
        human_capital: 0.07,
        global_player: 0.04,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.02,
        security: 0.83,
        human_capital: 0.05,
        global_player: 0.60,
        regulatory: 0.76,
        agricultural_technology: 0.96,
        vaccine_research: 0.15,
        pharmaceutical_production: 0.02,
        genetic_engineering: 0.11
      },
      space: {
        economic_resources: 0.02,
        human_capital: 0.16,
        security: 0.00,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.01,
        pnt: 0.00,
        telecommunications: 0.01,
        remote_sensing: 0.51
      }
    }
  },
  {
    country: "China",
    sectorScores: {
      ai: 0.55,
      quantum: 0.68,
      semiconductors: 0.49,
      biotech: 0.65,
      space: 0.52
    },
    totalScore: 0.602,
    sectorDetails: {
      ai: {
        algorithms: 0.25,
        computing_power: 0.65,
        data: 0.92,
        economic_resources: 0.12,
        global_player: 0.27,
        human_capital: 1.00,
        regulatory: 0.13
      },
      quantum: {
        economic_resources: 1.00,
        security: 1.00,
        human_capital: 1.00,
        policy_environment: 0.80,
        quantum_sensing: 0.21,
        quantum_communications: 0.84,
        quantum_computing: 0.40
      },
      semiconductors: {
        economic_resources: 1.00,
        human_capital: 1.00,
        global_player: 0.91,
        regulatory: 1.00,
        raw_materials: 0.64,
        chip_design: 0.06,
        manufacturing: 1.00,
        equipment: 0.06,
        assembly_testing: 1.00
      },
      biotech: {
        economic_resources: 1.00,
        security: 0.54,
        human_capital: 1.00,
        global_player: 0.80,
        regulatory: 0.67,
        agricultural_technology: 0.67,
        vaccine_research: 0.63,
        pharmaceutical_production: 1.00,
        genetic_engineering: 0.66
      },
      space: {
        economic_resources: 0.26,
        human_capital: 1.00,
        security: 0.82,
        global_player: 1.00,
        regulatory: 0.00,
        domestic_launch_capability: 0.59,
        science_exploration: 0.05,
        pnt: 1.00,
        telecommunications: 0.02,
        remote_sensing: 0.80
      }
    }
  },
  {
    country: "France",
    sectorScores: {
      ai: 0.18,
      quantum: 0.51,
      semiconductors: 0.12,
      biotech: 0.24,
      space: 0.54
    },
    totalScore: 0.343,
    sectorDetails: {
      ai: {
        algorithms: 0.13,
        computing_power: 0.14,
        data: 0.53,
        economic_resources: 0.03,
        global_player: 0.46,
        human_capital: 0.10,
        regulatory: 0.30
      },
      quantum: {
        economic_resources: 0.15,
        security: 1.00,
        human_capital: 0.10,
        policy_environment: 1.00,
        quantum_sensing: 0.29,
        quantum_communications: 0.26,
        quantum_computing: 0.38
      },
      semiconductors: {
        economic_resources: 0.01,
        human_capital: 0.09,
        global_player: 0.20,
        regulatory: 1.00,
        raw_materials: 0.04,
        chip_design: 0.00,
        manufacturing: 0.06,
        equipment: 0.02,
        assembly_testing: 0.02
      },
      biotech: {
        economic_resources: 0.07,
        security: 0.65,
        human_capital: 0.11,
        global_player: 0.80,
        regulatory: 0.19,
        agricultural_technology: 0.37,
        vaccine_research: 0.12,
        pharmaceutical_production: 0.06,
        genetic_engineering: 0.14
      },
      space: {
        economic_resources: 0.05,
        human_capital: 0.06,
        security: 0.37,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.01,
        science_exploration: 0.11,
        pnt: 0.67,
        telecommunications: 0.00,
        remote_sensing: 0.52
      }
    }
  },
  {
    country: "Germany",
    sectorScores: {
      ai: 0.19,
      quantum: 0.49,
      semiconductors: 0.10,
      biotech: 0.19,
      space: 0.24
    },
    totalScore: 0.283,
    sectorDetails: {
      ai: {
        algorithms: 0.09,
        computing_power: 0.22,
        data: 0.49,
        economic_resources: 0.03,
        global_player: 0.53,
        human_capital: 0.18,
        regulatory: 0.13
      },
      quantum: {
        economic_resources: 0.36,
        security: 1.00,
        human_capital: 0.28,
        policy_environment: 0.80,
        quantum_sensing: 0.36,
        quantum_communications: 0.21,
        quantum_computing: 0.37
      },
      semiconductors: {
        economic_resources: 0.04,
        human_capital: 0.18,
        global_player: 0.25,
        regulatory: 1.00,
        raw_materials: 0.04,
        chip_design: 0.26,
        manufacturing: 0.10,
        equipment: 0.19,
        assembly_testing: 0.02
      },
      biotech: {
        economic_resources: 0.16,
        security: 0.77,
        human_capital: 0.22,
        global_player: 0.80,
        regulatory: 0.19,
        agricultural_technology: 0.37,
        vaccine_research: 0.18,
        pharmaceutical_production: 0.09,
        genetic_engineering: 0.18
      },
      space: {
        economic_resources: 0.02,
        human_capital: 0.18,
        security: 0.18,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.11,
        pnt: 0.67,
        telecommunications: 0.00,
        remote_sensing: 0.52
      }
    }
  },
  {
    country: "India",
    sectorScores: {
      ai: 0.15,
      quantum: 0.31,
      semiconductors: 0.08,
      biotech: 0.15,
      space: 0.25
    },
    totalScore: 0.287,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.02,
        data: 0.34,
        economic_resources: 0.02,
        global_player: 0.40,
        human_capital: 0.38,
        regulatory: 0.04
      },
      quantum: {
        economic_resources: 0.11,
        security: 1.00,
        human_capital: 0.20,
        policy_environment: 0.60,
        quantum_sensing: 0.00,
        quantum_communications: 0.14,
        quantum_computing: 0.10
      },
      semiconductors: {
        economic_resources: 0.05,
        human_capital: 0.20,
        global_player: 0.11,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.41,
        human_capital: 0.19,
        global_player: 0.80,
        regulatory: 0.43,
        agricultural_technology: 0.52,
        vaccine_research: 0.38,
        pharmaceutical_production: 0.02,
        genetic_engineering: 0.09
      },
      space: {
        economic_resources: 0.07,
        human_capital: 0.15,
        security: 0.52,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.07,
        science_exploration: 0.02,
        pnt: 0.33,
        telecommunications: 0.00,
        remote_sensing: 0.54
      }
    }
  },
  {
    country: "Iran",
    sectorScores: {
      ai: 0.04,
      quantum: 0.20,
      semiconductors: 0.01,
      biotech: 0.10,
      space: 0.16
    },
    totalScore: 0.162,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.16,
        economic_resources: 0.00,
        global_player: 0.00,
        human_capital: 0.09,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.06,
        policy_environment: 0.60,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.00
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.06,
        global_player: 0.00,
        regulatory: 0.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.43,
        human_capital: 0.03,
        global_player: 0.00,
        regulatory: 0.00,
        agricultural_technology: 0.11,
        vaccine_research: 0.16,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.01
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.01,
        security: 0.17,
        global_player: 0.00,
        regulatory: 0.00,
        domestic_launch_capability: 0.02,
        science_exploration: 0.00,
        pnt: 0.33,
        telecommunications: 0.00,
        remote_sensing: 0.50
      }
    }
  },
  {
    country: "Israel",
    sectorScores: {
      ai: 0.07,
      quantum: 0.31,
      semiconductors: 0.03,
      biotech: 0.07,
      space: 0.17
    },
    totalScore: 0.233,
    sectorDetails: {
      ai: {
        algorithms: 0.07,
        computing_power: 0.00,
        data: 0.30,
        economic_resources: 0.00,
        global_player: 0.25,
        human_capital: 0.02,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.03,
        security: 1.00,
        human_capital: 0.04,
        policy_environment: 0.60,
        quantum_sensing: 0.00,
        quantum_communications: 0.05,
        quantum_computing: 0.34
      },
      semiconductors: {
        economic_resources: 0.01,
        human_capital: 0.00,
        global_player: 0.04,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.01,
        security: 0.55,
        human_capital: 0.03,
        global_player: 0.40,
        regulatory: 0.69,
        agricultural_technology: 0.25,
        vaccine_research: 0.04,
        pharmaceutical_production: 0.02,
        genetic_engineering: 0.10
      },
      space: {
        economic_resources: 0.01,
        human_capital: 0.00,
        security: 0.52,
        global_player: 0.25,
        regulatory: 0.00,
        domestic_launch_capability: 0.01,
        science_exploration: 0.00,
        pnt: 0.00,
        telecommunications: 0.00,
        remote_sensing: 0.52
      }
    }
  },
  {
    country: "Italy",
    sectorScores: {
      ai: 0.12,
      quantum: 0.29,
      semiconductors: 0.05,
      biotech: 0.13,
      space: 0.19
    },
    totalScore: 0.265,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.07,
        data: 0.36,
        economic_resources: 0.04,
        global_player: 0.20,
        human_capital: 0.13,
        regulatory: 0.43
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.50,
        human_capital: 0.03,
        policy_environment: 0.50,
        quantum_sensing: 0.00,
        quantum_communications: 0.02,
        quantum_computing: 0.33
      },
      semiconductors: {
        economic_resources: 0.01,
        human_capital: 0.11,
        global_player: 0.07,
        regulatory: 1.00,
        raw_materials: 0.04,
        chip_design: 0.00,
        manufacturing: 0.06,
        equipment: 0.00,
        assembly_testing: 0.02
      },
      biotech: {
        economic_resources: 0.04,
        security: 0.58,
        human_capital: 0.06,
        global_player: 1.00,
        regulatory: 0.19,
        agricultural_technology: 0.37,
        vaccine_research: 0.14,
        pharmaceutical_production: 0.02,
        genetic_engineering: 0.13
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.17,
        security: 0.03,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.11,
        pnt: 0.67,
        telecommunications: 0.00,
        remote_sensing: 0.52
      }
    }
  },
  {
    country: "Japan",
    sectorScores: {
      ai: 0.13,
      quantum: 0.41,
      semiconductors: 0.50,
      biotech: 0.20,
      space: 0.25
    },
    totalScore: 0.320,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.20,
        data: 0.41,
        economic_resources: 0.01,
        global_player: 0.35,
        human_capital: 0.09,
        regulatory: 0.09
      },
      quantum: {
        economic_resources: 0.13,
        security: 1.00,
        human_capital: 0.18,
        policy_environment: 0.80,
        quantum_sensing: 0.07,
        quantum_communications: 0.19,
        quantum_computing: 0.39
      },
      semiconductors: {
        economic_resources: 0.23,
        human_capital: 0.62,
        global_player: 0.15,
        regulatory: 1.00,
        raw_materials: 0.43,
        chip_design: 0.06,
        manufacturing: 0.71,
        equipment: 0.55,
        assembly_testing: 0.20
      },
      biotech: {
        economic_resources: 0.25,
        security: 0.75,
        human_capital: 0.16,
        global_player: 0.60,
        regulatory: 1.00,
        agricultural_technology: 0.49,
        vaccine_research: 0.15,
        pharmaceutical_production: 0.12,
        genetic_engineering: 0.15
      },
      space: {
        economic_resources: 0.02,
        human_capital: 0.15,
        security: 0.34,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.03,
        science_exploration: 0.11,
        pnt: 0.33,
        telecommunications: 0.01,
        remote_sensing: 0.55
      }
    }
  },
  {
    country: "Netherlands",
    sectorScores: {
      ai: 0.20,
      quantum: 0.44,
      semiconductors: 0.20,
      biotech: 0.18,
      space: 0.18
    },
    totalScore: 0.300,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.06,
        data: 0.46,
        economic_resources: 0.02,
        global_player: 0.20,
        human_capital: 0.08,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.07,
        security: 0.50,
        human_capital: 0.03,
        policy_environment: 1.00,
        quantum_sensing: 0.21,
        quantum_communications: 0.16,
        quantum_computing: 0.38
      },
      semiconductors: {
        economic_resources: 0.04,
        human_capital: 0.03,
        global_player: 0.09,
        regulatory: 1.00,
        raw_materials: 0.04,
        chip_design: 0.00,
        manufacturing: 0.10,
        equipment: 0.15,
        assembly_testing: 0.02
      },
      biotech: {
        economic_resources: 0.02,
        security: 0.75,
        human_capital: 0.04,
        global_player: 0.80,
        regulatory: 0.19,
        agricultural_technology: 0.37,
        vaccine_research: 0.07,
        pharmaceutical_production: 0.03,
        genetic_engineering: 0.11
      },
      space: {
        economic_resources: 0.01,
        human_capital: 0.03,
        security: 0.00,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.11,
        pnt: 0.67,
        telecommunications: 0.00,
        remote_sensing: 0.50
      }
    }
  },
  {
    country: "New Zealand",
    sectorScores: {
      ai: 0.07,
      quantum: 0.09,
      semiconductors: 0.00,
      biotech: 0.08,
      space: 0.09
    },
    totalScore: 0.138,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.38,
        economic_resources: 0.01,
        global_player: 0.15,
        human_capital: 0.01,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.30,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.00
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.00,
        global_player: 0.00,
        regulatory: 0.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.73,
        human_capital: 0.00,
        global_player: 0.80,
        regulatory: 0.38,
        agricultural_technology: 0.28,
        vaccine_research: 0.05,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.06
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.02,
        security: 0.00,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.06,
        science_exploration: 0.00,
        pnt: 0.17,
        telecommunications: 0.00,
        remote_sensing: 0.25
      }
    }
  },
  {
    country: "North Korea",
    sectorScores: {
      ai: 0.00,
      quantum: 0.00,
      semiconductors: 0.00,
      biotech: 0.05,
      space: 0.03
    },
    totalScore: 0.027,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.00,
        economic_resources: 0.00,
        global_player: 0.00,
        human_capital: 0.00,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.00,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.00
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.00,
        global_player: 0.00,
        regulatory: 0.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.00,
        global_player: 0.00,
        regulatory: 0.00,
        agricultural_technology: 0.00,
        vaccine_research: 0.00,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.00
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.00,
        security: 0.17,
        global_player: 0.00,
        regulatory: 1.00,
        domestic_launch_capability: 0.03,
        science_exploration: 0.00,
        pnt: 0.00,
        telecommunications: 0.00,
        remote_sensing: 0.00
      }
    }
  },
  {
    country: "Russia",
    sectorScores: {
      ai: 0.08,
      quantum: 0.36,
      semiconductors: 0.08,
      biotech: 0.18,
      space: 0.94
    },
    totalScore: 0.322,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.30,
        economic_resources: 0.00,
        global_player: 0.13,
        human_capital: 0.04,
        regulatory: 0.43
      },
      quantum: {
        economic_resources: 0.05,
        security: 0.50,
        human_capital: 0.13,
        policy_environment: 0.80,
        quantum_sensing: 0.00,
        quantum_communications: 0.14,
        quantum_computing: 0.33
      },
      semiconductors: {
        economic_resources: 0.12,
        human_capital: 0.01,
        global_player: 0.04,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.04,
        security: 0.55,
        human_capital: 0.01,
        global_player: 0.80,
        regulatory: 0.81,
        agricultural_technology: 0.31,
        vaccine_research: 0.19,
        pharmaceutical_production: 0.02,
        genetic_engineering: 0.09
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.68,
        security: 0.72,
        global_player: 1.00,
        regulatory: 1.00,
        domestic_launch_capability: 0.18,
        science_exploration: 0.22,
        pnt: 0.67,
        telecommunications: 0.02,
        remote_sensing: 0.52
      }
    }
  },
  {
    country: "Saudi Arabia",
    sectorScores: {
      ai: 0.09,
      quantum: 0.15,
      semiconductors: 0.00,
      biotech: 0.06,
      space: 0.07
    },
    totalScore: 0.128,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.04,
        data: 0.39,
        economic_resources: 0.02,
        global_player: 0.08,
        human_capital: 0.08,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.01,
        policy_environment: 0.20,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.16
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.01,
        global_player: 0.00,
        regulatory: 0.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.01,
        security: 0.48,
        human_capital: 0.01,
        global_player: 0.80,
        regulatory: 0.24,
        agricultural_technology: 0.00,
        vaccine_research: 0.03,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.01
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.00,
        security: 0.00,
        global_player: 0.25,
        regulatory: 0.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.00,
        pnt: 0.17,
        telecommunications: 0.00,
        remote_sensing: 0.51
      }
    }
  },
  {
    country: "Singapore",
    sectorScores: {
      ai: 0.08,
      quantum: 0.29,
      semiconductors: 0.12,
      biotech: 0.07,
      space: 0.11
    },
    totalScore: 0.313,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.02,
        data: 0.39,
        economic_resources: 0.02,
        global_player: 0.75,
        human_capital: 0.07,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.01,
        security: 0.00,
        human_capital: 0.01,
        policy_environment: 1.00,
        quantum_sensing: 0.07,
        quantum_communications: 0.21,
        quantum_computing: 0.09
      },
      semiconductors: {
        economic_resources: 0.19,
        human_capital: 0.07,
        global_player: 0.02,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.73,
        human_capital: 0.01,
        global_player: 0.80,
        regulatory: 0.24,
        agricultural_technology: 0.23,
        vaccine_research: 0.03,
        pharmaceutical_production: 0.01,
        genetic_engineering: 0.01
      },
      space: {
        economic_resources: 0.07,
        human_capital: 0.00,
        security: 0.00,
        global_player: 0.25,
        regulatory: 0.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.00,
        pnt: 0.00,
        telecommunications: 0.00,
        remote_sensing: 0.51
      }
    }
  },
  {
    country: "South Korea",
    sectorScores: {
      ai: 0.13,
      quantum: 0.35,
      semiconductors: 0.70,
      biotech: 0.30,
      space: 0.32
    },
    totalScore: 0.390,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.07,
        data: 0.48,
        economic_resources: 0.02,
        global_player: 0.20,
        human_capital: 0.13,
        regulatory: 0.48
      },
      quantum: {
        economic_resources: 0.16,
        security: 1.00,
        human_capital: 0.06,
        policy_environment: 0.80,
        quantum_sensing: 0.00,
        quantum_communications: 0.09,
        quantum_computing: 0.16
      },
      semiconductors: {
        economic_resources: 0.23,
        human_capital: 0.75,
        global_player: 0.11,
        regulatory: 1.00,
        raw_materials: 0.64,
        chip_design: 0.08,
        manufacturing: 0.71,
        equipment: 0.06,
        assembly_testing: 0.30
      },
      biotech: {
        economic_resources: 0.16,
        security: 0.82,
        human_capital: 0.05,
        global_player: 0.80,
        regulatory: 0.90,
        agricultural_technology: 0.44,
        vaccine_research: 0.09,
        pharmaceutical_production: 0.09,
        genetic_engineering: 0.04
      },
      space: {
        economic_resources: 0.01,
        human_capital: 0.06,
        security: 0.34,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.02,
        science_exploration: 0.00,
        pnt: 0.17,
        telecommunications: 0.00,
        remote_sensing: 0.51
      }
    }
  },
  {
    country: "Spain",
    sectorScores: {
      ai: 0.10,
      quantum: 0.26,
      semiconductors: 0.08,
      biotech: 0.13,
      space: 0.16
    },
    totalScore: 0.235,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.38,
        economic_resources: 0.01,
        global_player: 0.35,
        human_capital: 0.09,
        regulatory: 0.48
      },
      quantum: {
        economic_resources: 0.01,
        security: 0.50,
        human_capital: 0.05,
        policy_environment: 0.50,
        quantum_sensing: 0.00,
        quantum_communications: 0.16,
        quantum_computing: 0.11
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.07,
        global_player: 0.05,
        regulatory: 1.00,
        raw_materials: 0.04,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.02
      },
      biotech: {
        economic_resources: 0.03,
        security: 0.74,
        human_capital: 0.05,
        global_player: 0.80,
        regulatory: 0.19,
        agricultural_technology: 0.87,
        vaccine_research: 0.12,
        pharmaceutical_production: 0.01,
        genetic_engineering: 0.12
      },
      space: {
        economic_resources: 0.01,
        human_capital: 0.04,
        security: 0.01,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.11,
        pnt: 0.67,
        telecommunications: 0.00,
        remote_sensing: 0.26
      }
    }
  },
  {
    country: "Taiwan",
    sectorScores: {
      ai: 0.08,
      quantum: 0.29,
      semiconductors: 0.50,
      biotech: 0.08,
      space: 0.11
    },
    totalScore: 0.313,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.03,
        data: 0.39,
        economic_resources: 0.02,
        global_player: 0.00,
        human_capital: 0.06,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.02,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.80,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.32
      },
      semiconductors: {
        economic_resources: 0.23,
        human_capital: 0.48,
        global_player: 0.11,
        regulatory: 1.00,
        raw_materials: 1.00,
        chip_design: 0.08,
        manufacturing: 0.75,
        equipment: 0.00,
        assembly_testing: 0.93
      },
      biotech: {
        economic_resources: 0.07,
        security: 0.64,
        human_capital: 0.01,
        global_player: 0.00,
        regulatory: 0.76,
        agricultural_technology: 0.38,
        vaccine_research: 0.06,
        pharmaceutical_production: 0.01,
        genetic_engineering: 0.01
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.02,
        security: 0.17,
        global_player: 0.00,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.00,
        pnt: 0.00,
        telecommunications: 0.00,
        remote_sensing: 0.50
      }
    }
  },
  {
    country: "Turkey",
    sectorScores: {
      ai: 0.07,
      quantum: 0.11,
      semiconductors: 0.00,
      biotech: 0.07,
      space: 0.11
    },
    totalScore: 0.162,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.26,
        economic_resources: 0.02,
        global_player: 0.48,
        human_capital: 0.06,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.05,
        quantum_sensing: 0.07,
        quantum_communications: 0.00,
        quantum_computing: 0.00
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.01,
        global_player: 0.00,
        regulatory: 0.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.04,
        security: 0.53,
        human_capital: 0.01,
        global_player: 0.80,
        regulatory: 0.57,
        agricultural_technology: 0.09,
        vaccine_research: 0.10,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.01
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.07,
        security: 0.17,
        global_player: 0.00,
        regulatory: 0.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.00,
        pnt: 0.17,
        telecommunications: 0.00,
        remote_sensing: 0.51
      }
    }
  },
  {
    country: "U.A.E.",
    sectorScores: {
      ai: 0.08,
      quantum: 0.05,
      semiconductors: 0.06,
      biotech: 0.06,
      space: 0.05
    },
    totalScore: 0.123,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.38,
        economic_resources: 0.01,
        global_player: 0.15,
        human_capital: 0.03,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.01,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.10,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.16
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.01,
        global_player: 0.02,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.38,
        human_capital: 0.00,
        global_player: 0.80,
        regulatory: 0.62,
        agricultural_technology: 0.00,
        vaccine_research: 0.10,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.00
      },
      space: {
        economic_resources: 0.01,
        human_capital: 0.00,
        security: 0.01,
        global_player: 0.25,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.00,
        pnt: 0.17,
        telecommunications: 0.00,
        remote_sensing: 0.01
      }
    }
  },
  {
    country: "Ukraine",
    sectorScores: {
      ai: 0.03,
      quantum: 0.05,
      semiconductors: 0.00,
      biotech: 0.05,
      space: 0.07
    },
    totalScore: 0.097,
    sectorDetails: {
      ai: {
        algorithms: 0.00,
        computing_power: 0.00,
        data: 0.20,
        economic_resources: 0.00,
        global_player: 0.02,
        human_capital: 0.01,
        regulatory: 0.00
      },
      quantum: {
        economic_resources: 0.00,
        security: 0.00,
        human_capital: 0.00,
        policy_environment: 0.00,
        quantum_sensing: 0.00,
        quantum_communications: 0.00,
        quantum_computing: 0.00
      },
      semiconductors: {
        economic_resources: 0.00,
        human_capital: 0.00,
        global_player: 0.00,
        regulatory: 0.00,
        raw_materials: 0.00,
        chip_design: 0.00,
        manufacturing: 0.00,
        equipment: 0.00,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.00,
        security: 0.34,
        human_capital: 0.00,
        global_player: 0.80,
        regulatory: 0.62,
        agricultural_technology: 0.00,
        vaccine_research: 0.02,
        pharmaceutical_production: 0.00,
        genetic_engineering: 0.01
      },
      space: {
        economic_resources: 0.00,
        human_capital: 0.02,
        security: 0.00,
        global_player: 0.00,
        regulatory: 1.00,
        domestic_launch_capability: 0.01,
        science_exploration: 0.00,
        pnt: 0.00,
        telecommunications: 0.00,
        remote_sensing: 0.25
      }
    }
  },
  {
    country: "United Kingdom",
    sectorScores: {
      ai: 0.19,
      quantum: 0.62,
      semiconductors: 0.11,
      biotech: 0.17,
      space: 0.25
    },
    totalScore: 0.457,
    sectorDetails: {
      ai: {
        algorithms: 0.07,
        computing_power: 0.09,
        data: 0.45,
        economic_resources: 0.06,
        global_player: 0.82,
        human_capital: 0.25,
        regulatory: 0.35
      },
      quantum: {
        economic_resources: 0.32,
        security: 1.00,
        human_capital: 0.15,
        policy_environment: 1.00,
        quantum_sensing: 0.29,
        quantum_communications: 0.72,
        quantum_computing: 0.43
      },
      semiconductors: {
        economic_resources: 0.01,
        human_capital: 0.09,
        global_player: 0.24,
        regulatory: 1.00,
        raw_materials: 0.00,
        chip_design: 0.05,
        manufacturing: 0.00,
        equipment: 0.02,
        assembly_testing: 0.00
      },
      biotech: {
        economic_resources: 0.09,
        security: 0.87,
        human_capital: 0.18,
        global_player: 0.80,
        regulatory: 0.76,
        agricultural_technology: 0.37,
        vaccine_research: 0.25,
        pharmaceutical_production: 0.06,
        genetic_engineering: 0.17
      },
      space: {
        economic_resources: 0.06,
        human_capital: 0.09,
        security: 0.18,
        global_player: 0.50,
        regulatory: 1.00,
        domestic_launch_capability: 0.00,
        science_exploration: 0.11,
        pnt: 0.67,
        telecommunications: 0.14,
        remote_sensing: 0.51
      }
    }
  }
];