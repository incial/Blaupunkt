// Import background images from assets
import { bgImgs } from './assets.js'

// Hero section data for different pages
export const Entirepagedata = {
  chargingCables: {
    title: 'EV Charging Cables',
    description:
      'Durable, efficient, and compatible with most electric vehicles.',
    active: true,
    breadcrumbs: [
      { text: 'Home', path: '/' },
      { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
      { text: 'EV Charging Cables', path: '/charging-cables', active: true }
    ],
    buttonText: 'Connect',
    mainImage: 'Product_image.png',
    imageAlt: 'EV Charging Cable',
    thumbnails: [
      { src: 'Product_image.png', alt: 'Cable Front View' },
      { src: 'Product_image.png', alt: 'Cable Connector' },
      { src: 'Product_image.png', alt: 'Cable in Use' },
      { src: 'Product_image.png', alt: 'Cable Specifications' },
      { src: 'Product_image.png', alt: 'Cable Storage' }
    ],    OverviewData: {
      BgImage: bgImgs.evChargingCables,
      para: {
        active: false,
        data: [
          {
            subheading: 'Superior Build Quality',
            text: 'Our EV charging cables are engineered with premium materials and cutting-edge technology to ensure reliable, safe, and efficient charging for your electric vehicle.'
          },
          {
            subheading: 'Universal Compatibility',
            text: 'Designed to work seamlessly with most electric vehicles, our cables feature industry-standard connectors and are compatible with both Type 1 and Type 2 charging ports.'
          },
          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          {
            subheading: 'Advantages Monta Backend Integration:',
            listItems: [
              'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
              'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
              'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering up to 11KW or 22 KW of power depending on the model. The charging capacity can be set between 8A and 32A depending on the model.',
              'Integrated Safety Features: The inbuilt 6mA DC RCM provides the highest level of protection, eliminating the need for an additional DC protection RCCB during installation, ensuring your home and vehicle are safeguarded at all times.',
              'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
            ]
          }
        ]
      },
      list: {
        active: true,
        data: [
          'Compatible with Type 1 & Type 2 connectors supports up to 3-phase charging',
          'Rated for up to 32A safely delivers a charging power of up to 22 kW',
          'Cable length up to 8 meters offers maximum flexibility and reach',
          'IP54 rated – weather-resistant and safe for outdoor use',
          'Includes a durable carry case for easy transport and protection',
          'CE certified by a leading independent testing laboratory',
          'Engineered with Blaupunkt’s commitment to quality and safety'
        ]
      },
      image: 'Product_image.png'
    },
    highlightsData: {
      title: 'Key Features',
      features: [
        {
          title: 'Universal Compatibility',
          description: 'Works with Tesla, BMW, Audi, and all major EV brands',
          icon: 'compatibility'
        },
        {
          title: 'Weather Resistant',
          description: 'IP67 rated for all-weather outdoor use',
          icon: 'weather'
        },
        {
          title: 'Fast Charging',
          description: 'Supports up to 32A charging current',
          icon: 'speed'
        },
        {
          title: 'Portable Design',
          description: 'Lightweight and easy to store in your vehicle',
          icon: 'portable'
        }
      ]
    },
    specificationsData: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Charging Current', value: '16A / 32A' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Cable Length', value: '5m / 7.5m / 10m' },
        { label: 'Connector Type', value: 'Type 1 / Type 2' },
        { label: 'Protection Rating', value: 'IP67' },
        { label: 'Operating Temperature', value: '-30°C to +50°C' },
        { label: 'Cable Diameter', value: '32mm' },
        { label: 'Weight', value: '3.2kg (5m version)' }
      ]
    },
    modelsData: {
      title: 'Available Models',
      models: [
        {
          name: 'Standard Cable 5m',
          price: '$299',
          features: ['16A charging', 'Type 2 connector', '5m length'],
          popular: false
        },
        {
          name: 'Professional Cable 7.5m',
          price: '$399',
          features: [
            '32A charging',
            'Type 2 connector',
            '7.5m length',
            'LED indicators'
          ],
          popular: true
        },
        {
          name: 'Extended Cable 10m',
          price: '$499',
          features: [
            '32A charging',
            'Type 2 connector',
            '10m length',
            'Premium carrying case'
          ],
          popular: false
        }
      ]
    },
    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      suppliers: [
        {
          name: 'EV Components Ltd',
          region: 'Europe',
          contact: 'europe@evcomponents.com',
          specialization: 'Cable assemblies and connectors'
        },
        {
          name: 'PowerTech Solutions',
          region: 'North America',
          contact: 'na@powertech.com',
          specialization: 'Charging infrastructure'
        },
        {
          name: 'GreenCharge Industries',
          region: 'Asia Pacific',
          contact: 'apac@greencharge.com',
          specialization: 'Portable charging solutions'
        }
      ]
    }
  },

  chargingStations: {
    title: 'Charging Stations',
    description:
      'Reliable and efficient charging solutions for your electric vehicle.',
    active: true,
    breadcrumbs: [
      { text: 'Home', path: '/' },
      { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
      { text: 'Charging Stations', path: '/charging-stations', active: true }
    ],
    buttonText: 'Learn More',
    mainImage: 'Charging_Stations.png',
    imageAlt: 'EV Charging Station',
    thumbnails: [
      { src: 'Charging_Stations.png', alt: 'Charging Station Front' },
      { src: 'Charging_Stations.png', alt: 'Charging Station Side' },
      { src: 'Charging_Stations.png', alt: 'Charging Station Interface' },
      { src: 'Charging_Stations.png', alt: 'Charging Station in Use' },
      { src: 'Charging_Stations.png', alt: 'Charging Station Features' }
    ],    OverviewData: {
      BgImage: bgImgs.chargingStations,
      para: {
        active: true,
        data: [
          {
            subheading:
              'Reliable and Robust: Blaupunkt Three-Phase Charging Station',
            text: "Charging your electric car is more than just a task – it's a matter of trust. That's why Blaupunkt's three-phase charging station is engineered to meet and exceed all applicable electrical safety requirements. Every product is rigorously tested and certified by leading independent laboratories, ensuring you receive only the highest quality equipment."
          },
          {
            subheading: 'Durability and Safety You Can Rely On',
            text: "Built with durability in mind, Blaupunkt's charging station features a robust construction designed to withstand everyday use, whether installed indoors or outdoors. The IP54-rated charger provides reliable protection against the elements, ensuring long-lasting performance in various outdoor conditions."
          },          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          {
            subheading: 'Advantages Monta Backend Integration:',
            listItems: [
              'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
              'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
              'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering up to 11KW or 22 KW of power depending on the model. The charging capacity can be set between 8A and 32A depending on the model.',
              'Integrated Safety Features: The inbuilt 6mA DC RCM provides the highest level of protection, eliminating the need for an additional DC protection RCCB during installation, ensuring your home and vehicle are safeguarded at all times.',
              'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
            ]
          }
        ]
      },
      list: {
        active: false,
        data: [
          'Three-phase charging capability for faster and more efficient charging',
          'IP54-rated for reliable protection against dust and water splashes',
          'Pre-configured with Monta backend for immediate use',
          'Rigorously tested and certified to meet all safety standards',
          'Robust construction suitable for both indoor and outdoor installation',
          'Smart connectivity with easy setup and user-friendly interface'
        ]
      },

      imageHeight: {
        mobile: '400px',
        desktop: '1000px'
      },
      image: 'Charging_Stations.png'
    },
    highlightsData: {
      title: 'Station Features',
      features: [
        {
          title: 'Smart Connectivity',
          description: 'WiFi and 4G connectivity for remote monitoring',
          icon: 'connectivity'
        },
        {
          title: 'Multiple Outlets',
          description: 'Charge up to 2 vehicles simultaneously',
          icon: 'multiple'
        },
        {
          title: 'Energy Management',
          description: 'Built-in load balancing and power management',
          icon: 'energy'
        },
        {
          title: 'User Authentication',
          description: 'RFID cards and mobile app authentication',
          icon: 'security'
        }
      ]
    },
    specificationsData: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Power Output', value: '7.4kW / 11kW / 22kW' },
        { label: 'Input Voltage', value: '400V AC 3-phase' },
        { label: 'Charging Ports', value: '1 or 2 Type 2 outlets' },
        { label: 'Protection', value: 'IP54 rated enclosure' },
        { label: 'Communication', value: 'WiFi, 4G, Ethernet' },
        { label: 'Display', value: '7-inch color touchscreen' },
        { label: 'Dimensions', value: '1200 x 300 x 200mm' },
        { label: 'Weight', value: '45kg' }
      ]
    },
    modelsData: {
      title: 'Available Models',
      models: [
        {
          name: 'Home Station 7.4kW',
          price: '$1,299',
          features: [
            'Single outlet',
            'WiFi connectivity',
            'Mobile app',
            'Wall mounted'
          ],
          popular: false
        },
        {
          name: 'Business Station 22kW',
          price: '$2,899',
          features: [
            'Dual outlets',
            '4G + WiFi',
            'RFID access',
            'Pedestal mount'
          ],
          popular: true
        },
        {
          name: 'Enterprise Station 22kW',
          price: '$3,599',
          features: [
            'Dual outlets',
            'Advanced analytics',
            'Fleet management',
            'Custom branding'
          ],
          popular: false
        }
      ]
    },
    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      suppliers: [
        {
          name: 'StationTech Europe',
          region: 'Europe',
          contact: 'stations@stationtech.eu',
          specialization: 'AC charging stations and infrastructure'
        },
        {
          name: 'ChargePoint Americas',
          region: 'North America',
          contact: 'info@chargepoint-am.com',
          specialization: 'Smart charging solutions'
        },
        {
          name: 'PowerGrid Asia',
          region: 'Asia Pacific',
          contact: 'sales@powergrid-asia.com',
          specialization: 'Commercial charging infrastructure'
        }
      ]
    }
  },
  dcChargingStation: {
    title: 'DC Charging Station',
    description: 'High-powered DC charging for faster charging times.',
    active: true,
    breadcrumbs: [
      { text: 'Home', path: '/' },
      { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
      {
        text: 'DC Charging Station',
        path: '/dc-charging-station',
        active: true
      }
    ],
    buttonText: 'Explore',
    mainImage: 'DC_Charging_Station.png',
    imageAlt: 'DC Charging Station',
    thumbnails: [
      { src: 'DC_Charging_Station.png', alt: 'DC Station Front' },
      { src: 'DC_Charging_Station.png', alt: 'DC Station Display' },
      { src: 'DC_Charging_Station.png', alt: 'DC Station Connectors' },
      { src: 'DC_Charging_Station.png', alt: 'DC Station Installation' },
      { src: 'DC_Charging_Station.png', alt: 'DC Station Specifications' }
    ],
    OverviewData: {
      BgImage: bgImgs.dcChargingStation,
      para: {
        active: true,
        data: [
          {
            subheading: 'Powerful Performance in a Compact Design',
            text: 'The Blaupunkt 30-40 kW DC Charger delivers rapid, reliable charging in a compact footprint, ideal for mid-power applications. Designed for versatility, this charger provides efficient charging times suited for commercial environments like parking facilities, office complexes, and retail centers.'
          },
          {
            subheading: 'Durability and Safety You Can Rely On',
            text: 'Engineered for performance and reliability, Blaupunkt’s 30-40 kW DC Charger is built to last in any environment. Its robust design ensures dependable charging whether installed indoors or outdoors, and its IP54-rated enclosure provides superior protection against dust, water, and other elements, guaranteeing long-term performance under a wide range of weather conditions.'
          },
          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          {
            subheading: 'Advantages Monta Backend Integration:',
            listItems: [
              'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
              'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
              'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering up to 11KW or 22 KW of power depending on the model. The charging capacity can be set between 8A and 32A depending on the model.',
              'Integrated Safety Features: The inbuilt 6mA DC RCM provides the highest level of protection, eliminating the need for an additional DC protection RCCB during installation, ensuring your home and vehicle are safeguarded at all times.',
              'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
            ]
          }
        ]
      },
      list: {
        active: false,
        data: [
          '50kW to 150kW DC fast charging capability',
          'CCS and CHAdeMO connector compatibility',
          'Advanced cooling system for continuous operation',
          'Payment processing with contactless options',
          'Real-time diagnostics and remote monitoring',
          'Modular design for easy maintenance',
          'Dynamic load management system',
          'Power quality monitoring and protection',
          'Remote firmware updates and configuration'
        ]
      },
      imageHeight: {
        mobile: '450px',
        desktop: '550px'
      }
    },
    highlightsData: {
      title: 'DC Charging Benefits',
      features: [
        {
          title: 'Rapid Charging',
          description: '50kW-150kW power output for quick charging',
          icon: 'lightning'
        },
        {
          title: 'Universal Compatibility',
          description: 'CCS1, CCS2, and CHAdeMO connectors',
          icon: 'compatibility'
        },
        {
          title: 'Advanced Cooling',
          description: 'Liquid cooling for optimal performance',
          icon: 'cooling'
        },
        {
          title: 'Payment Integration',
          description: 'Credit card, RFID, and mobile payments',
          icon: 'payment'
        }
      ]
    },    specificationsData: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Power Output', value: '50kW / 100kW / 150kW' },
        { label: 'Input Voltage', value: '400V AC 3-phase' },
        { label: 'DC Output Voltage', value: '200-920V DC' },
        { label: 'Maximum Current', value: '250A (50kW) / 400A (150kW)' },
        { label: 'Connectors', value: 'CCS1/CCS2, CHAdeMO' },
        { label: 'Efficiency', value: '>94%' },
        { label: 'Cooling', value: 'Liquid cooled' },
        { label: 'Display', value: '15-inch touchscreen' },
        { label: 'Dimensions', value: '1800 x 800 x 600mm' },
        { label: 'Weight', value: '350kg (50kW) / 420kg (100kW) / 480kg (150kW)' },
        { label: 'Operating Temperature', value: '-30°C to +50°C' },
        { label: 'Humidity Range', value: '5% to 95%, non-condensing' },
        { label: 'Protection Rating', value: 'IP54 / IK10' },
        { label: 'Network Connectivity', value: '4G/LTE, WiFi, Ethernet, OCPP 1.6J/2.0' }
      ]
    },
    modelsData: {
      title: 'Available Models',
      models: [
        {
          name: 'DC50 Station',
          price: '$29,999',
          features: [
            '50kW output',
            'Single connector',
            'Basic display',
            'Card payment'
          ],
          popular: false
        },
        {
          name: 'DC100 Station',
          price: '$45,999',
          features: [
            '100kW output',
            'Dual connectors',
            'Large display',
            'Multiple payments'
          ],
          popular: true
        },
        {
          name: 'DC150 Ultra',
          price: '$65,999',
          features: [
            '150kW output',
            'Liquid cooling',
            'Premium display',
            'Fleet management'
          ],
          popular: false
        }
      ]
    },    installationData: {
      title: 'Installation Requirements',
      requirements: [
        {
          category: 'Electrical',
          items: [
            'Three-phase power supply: 400V AC ± 10%, 50/60Hz',
            'Rated input current: 80A (50kW) / 160A (100kW) / 240A (150kW)',
            'Protective devices: Surge protection, RCD type B, circuit breakers',
            'Grounding system: TN-S or TN-C-S, resistance < 10 ohms'
          ]
        },
        {
          category: 'Site Preparation',
          items: [
            'Concrete foundation pad: min. 2000 x 1000 x 200mm',
            'Cable conduits: minimum diameter 100mm',
            'Weather protection: optional canopy recommended for extreme conditions',
            'Clearance zones: 1000mm at front, 500mm at sides and rear'
          ]
        },
        {
          category: 'Connectivity',
          items: [
            'Internet connection: minimum 10Mbps down/5Mbps up',
            'Mobile network coverage for 4G/LTE backup connectivity',
            'Optional dedicated IP address for advanced networking',
            'Secured connection to charging network management system'
          ]
        }
      ]
    },

    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      suppliers: [
        {
          name: 'FastCharge Europe GmbH',
          region: 'Europe',
          contact: 'dc@fastcharge.eu',
          specialization: 'DC fast charging infrastructure'
        },
        {
          name: 'RapidPower USA',
          region: 'North America',
          contact: 'sales@rapidpower.com',
          specialization: 'High-power charging systems'
        },
        {
          name: 'ElectroCharge Solutions',
          region: 'Asia Pacific',
          contact: 'info@electrocharge.asia',
          specialization: 'DC charging technology'
        }
      ]
    }
  },

  dcFastChargingStation: {
    title: 'DC Fast Charging Station',
    description: 'Ultra-fast charging solution for minimal downtime.',
    active: true,
    breadcrumbs: [
      { text: 'Home', path: '/' },
      { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
      {
        text: 'DC Fast Charging Station',
        path: '/dc-fast-charging-station',
        active: true
      }
    ],
    buttonText: 'Discover',
    mainImage: 'DC_Fast_Charging_Station.png',
    imageAlt: 'DC Fast Charging Station',
    thumbnails: [
      { src: 'DC_Fast_Charging_Station.png', alt: 'Fast Charging Unit' },
      { src: 'DC_Fast_Charging_Station.png', alt: 'Fast Charging Interface' },
      { src: 'DC_Fast_Charging_Station.png', alt: 'Fast Charging Ports' },
      { src: 'DC_Fast_Charging_Station.png', alt: 'Fast Charging Network' },
      { src: 'DC_Fast_Charging_Station.png', alt: 'Fast Charging Capabilities' }
    ],
    OverviewData: {
      BgImage: bgImgs.dcFastChargingStation,
      para: {
        active: true,
        data: [
          {
            subheading: 'Maximum Power for High-Intensity Environments',
            text: 'The Blaupunkt 60-160 kW DC Charger is designed to meet the demands of high-traffic locations where charging speed and capacity are paramount. With ultra-fast charging capabilities, this charger is perfect for service stations, highway rest stops, and fleet depots.'
          },
          {
            subheading: 'Power, Durability, and Safety Combined',
            text: 'For high-demand environments, Blaupunkt\'s 60-160 kW DC Charger delivers the perfect blend of power and durability. Its IP54-rated enclosure ensures that it can handle any outdoor condition while maintaining peak performance. Built for heavy daily use, this charger is ideal for locations where fast and efficient charging is essential.'
          },
          {
            subheading: 'Efficient Maintenance with Plug-In Control Module',
            text: 'Our plug-in module integrates critical components into a single, replaceable unit, including the fuse, relay, terminal block, voltage detection module, DC contactor, switch power supply, diverter, electric energy meter, monitor wafer, main control panel, and insulation protection module. In case of malfunction, operators can simply swap out the module, eliminating the need for on-site specialized technicians.'
          },
          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          {
            subheading: 'Advantages Monta Backend Integration:',
            listItems: [
              'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
              'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
              'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering up to 11KW or 22 KW of power depending on the model. The charging capacity can be set between 8A and 32A depending on the model.',
              'Integrated Safety Features: The inbuilt 6mA DC RCM provides the highest level of protection, eliminating the need for an additional DC protection RCCB during installation, ensuring your home and vehicle are safeguarded at all times.',
              'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
            ]
          }
        ]
      },
      list: {
        active: false,
        data: [
          'Ultra-fast 350kW charging capability',
          'Multiple vehicle charging simultaneously',
          'Advanced thermal management system',
          'Plug & Charge technology support',
          'Grid-tie and energy storage integration',
          'Future-ready for next-gen vehicles'
        ]
      },
      imageHeight: {
        mobile: '450px',
        desktop: '750px'
      }
    },
    highlightsData: {
      title: 'Ultra-Fast Features',
      features: [
        {
          title: '350kW Power',
          description: 'Industry-leading ultra-fast charging speeds',
          icon: 'ultra-fast'
        },
        {
          title: 'Multi-Vehicle',
          description: 'Charge up to 4 vehicles simultaneously',
          icon: 'multi-port'
        },
        {
          title: 'Plug & Charge',
          description: 'Automatic authentication and billing',
          icon: 'plug-charge'
        },
        {
          title: 'Grid Integration',
          description: 'Smart grid connectivity and load management',
          icon: 'grid'
        }
      ]
    },
    specificationsData: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Max Power Output', value: '350kW' },
        { label: 'Input Voltage', value: '800V AC 3-phase' },
        { label: 'DC Output Range', value: '200-1000V DC' },
        { label: 'Current Range', value: '0-500A DC' },
        { label: 'Charging Ports', value: '2-4 CCS connectors' },
        { label: 'Cooling System', value: 'Liquid + forced air' },
        { label: 'Communication', value: '5G, WiFi, Ethernet' },
        { label: 'Footprint', value: '2000 x 1000 x 800mm' }
      ]
    },
    modelsData: {
      title: 'Available Models',
      models: [
        {
          name: 'UltraFast 175kW',
          price: '$89,999',
          features: [
            '175kW per port',
            '2 charging ports',
            'Standard cooling',
            'Basic analytics'
          ],
          popular: false
        },
        {
          name: 'UltraFast 350kW',
          price: '$149,999',
          features: [
            '350kW total power',
            '4 charging ports',
            'Advanced cooling',
            'Fleet management'
          ],
          popular: true
        },
        {
          name: 'UltraFast Pro 350kW',
          price: '$199,999',
          features: [
            '350kW per port',
            '2 premium ports',
            'Battery storage',
            'Custom branding'
          ],
          popular: false
        }
      ]
    },
    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      suppliers: [
        {
          name: 'UltraCharge Systems',
          region: 'Europe',
          contact: 'ultra@ultracharge.eu',
          specialization: 'Ultra-fast charging technology'
        },
        {
          name: 'HyperPower Inc',
          region: 'North America',
          contact: 'sales@hyperpower.com',
          specialization: 'High-power charging infrastructure'
        },
        {
          name: 'NextGen Charging',
          region: 'Asia Pacific',
          contact: 'info@nextgen-charging.com',
          specialization: 'Future charging technologies'
        }
      ]
    }
  },

  portableEVCharging: {
    title: 'Portable EV Charging',
    description: 'Flexible charging solutions wherever you go.',
    active: true,
    breadcrumbs: [
      { text: 'Home', path: '/' },
      { text: 'Electric Vehicle Charging Equipment', path: '/ev-charging' },
      {
        text: 'Portable EV Charging',
        path: '/portable-ev-charging',
        active: true
      }
    ],
    buttonText: 'View Details',
    mainImage: 'Portable_EV_Charging.png',
    imageAlt: 'Portable EV Charger',
    thumbnails: [
      { src: 'Portable_EV_Charging.png', alt: 'Portable Charger Unit' },
      { src: 'Portable_EV_Charging.png', alt: 'Portable Charger Case' },
      { src: 'Portable_EV_Charging.png', alt: 'Portable Charger Setup' },
      { src: 'Portable_EV_Charging.png', alt: 'Portable Charger Adapters' },
      { src: 'Portable_EV_Charging.png', alt: 'Portable Charger in Use' }
    ],
    OverviewData: {
      BgImage: bgImgs.portableEVCharging,
      para: {
        active: true,
        data: [
          {
            subheading: 'Portable Charging Freedom',
            text: 'Compact and portable charging solutions that provide flexibility and convenience for electric vehicle owners. Perfect for emergency charging, travel, and locations without fixed charging infrastructure.'
          },
          {
            subheading: 'Travel-Ready Design',
            text: 'Lightweight construction with multiple adapter options and intelligent charging control. Designed for versatility with support for various outlet types and charging standards.'
          },
          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets this charging station apart is its pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          {
            subheading: 'Advantages Monta Backend Integration:',
            listItems: [
              'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
              'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
              'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering up to 11KW or 22 KW of power depending on the model. The charging capacity can be set between 8A and 32A depending on the model.',
              'Integrated Safety Features: The inbuilt 6mA DC RCM provides the highest level of protection, eliminating the need for an additional DC protection RCCB during installation, ensuring your home and vehicle are safeguarded at all times.',
              'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
            ]
          }
        ]
      },
      list: {
        active: false,
        data: [
          'Lightweight and portable design',
          'Multiple adapter compatibility',
          'Emergency charging capability',
          'Smart charging with app control',
          'Compact storage solution',
          'Travel-friendly carrying case'
        ]
      },
      imageHeight: {
        mobile: '350px',
        desktop: '450px'
      }
    },
    highlightsData: {
      title: 'Portable Advantages',
      features: [
        {
          title: 'Ultra Portable',
          description: 'Lightweight design under 2kg',
          icon: 'portable'
        },
        {
          title: 'Universal Adapters',
          description: 'Works with any standard outlet',
          icon: 'adapters'
        },
        {
          title: 'Smart Control',
          description: 'Mobile app for monitoring and control',
          icon: 'smart'
        },
        {
          title: 'Emergency Ready',
          description: 'Always available when you need it',
          icon: 'emergency'
        }
      ]
    },
    specificationsData: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Max Power', value: '3.6kW (16A)' },
        { label: 'Input Voltage', value: '230V AC single phase' },
        { label: 'Cable Length', value: '5m with extensions' },
        { label: 'Connector Type', value: 'Type 1 / Type 2' },
        { label: 'Protection', value: 'IP65 rated' },
        { label: 'Weight', value: '1.8kg' },
        { label: 'Dimensions', value: '300 x 200 x 100mm' },
        { label: 'Temperature Range', value: '-20°C to +45°C' }
      ]
    },
    modelsData: {
      title: 'Available Models',
      models: [
        {
          name: 'Portable Basic',
          price: '$399',
          features: [
            '3.6kW charging',
            '5m cable',
            'Basic case',
            'LED indicators'
          ],
          popular: false
        },
        {
          name: 'Portable Smart',
          price: '$599',
          features: [
            '3.6kW charging',
            'App control',
            'Premium case',
            'Multiple adapters'
          ],
          popular: true
        },
        {
          name: 'Portable Pro',
          price: '$799',
          features: [
            '7.2kW charging',
            'Advanced app',
            'Rugged case',
            'Emergency kit'
          ],
          popular: false
        }
      ]
    },
    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      suppliers: [
        {
          name: 'MobileCharge Europe',
          region: 'Europe',
          contact: 'portable@mobilecharge.eu',
          specialization: 'Portable charging solutions'
        },
        {
          name: 'OnTheGo Power',
          region: 'North America',
          contact: 'sales@onthego-power.com',
          specialization: 'Mobile charging technology'
        },
        {
          name: 'FlexiCharge Asia',
          region: 'Asia Pacific',
          contact: 'info@flexicharge.asia',
          specialization: 'Compact charging devices'
        }
      ]
    }
  },

  // HomePage data
  homePage: {
    title: 'Blaupunkt EV Charging Solutions',
    description:
      'Leading the future of electric vehicle charging with innovative, reliable, and efficient solutions.',
    active: true,
    breadcrumbs: [{ text: 'Home', path: '/', active: true }],
    buttonText: 'Explore Products',
    mainImage: 'Ev_charging.png',
    imageAlt: 'EV Charging Solutions',
    heroVideo: 'HeoIntro.mp4',
    thumbnails: [
      { src: 'Product_image.png', alt: 'Charging Cables' },
      { src: 'Charging_Stations.png', alt: 'Charging Stations' },
      { src: 'DC_Charging_Station.png', alt: 'DC Charging' },
      { src: 'DC_Fast_Charging_Station.png', alt: 'Fast Charging' },
      { src: 'Portable_EV_Charging.png', alt: 'Portable Charging' }
    ],
    OverviewData: {
      BgImage: bgImgs.evCharging,
      para: {
        active: true,
        data: [
          {
            subheading: 'German Engineering Excellence',
            text: 'Blaupunkt is at the forefront of electric vehicle charging technology, providing comprehensive solutions for residential, commercial, and industrial applications. Our innovative products combine German engineering excellence with cutting-edge technology.'
          },
          {
            subheading: 'Complete EV Ecosystem',
            text: 'From portable chargers to ultra-fast DC charging stations, we offer a complete ecosystem of EV charging solutions designed to accelerate the transition to sustainable transportation.'
          },
          {
            subheading: 'Pre-Configured for Seamless Integration',
            text: 'What sets our charging stations apart is their pre-configuration with the Monta backend. This advanced feature allows for a quick and hassle-free setup, enabling you to start charging immediately with minimal effort.'
          },
          {
            subheading: 'Advantages Monta Backend Integration:',
            listItems: [
              'Effortless Setup: With pre-configuration, your charging station is ready to use right out of the box. No need for complex installations or technical adjustments – simply plug in and charge.',
              'Enhanced Control and Monitoring: Through the Monta platform, gain full control over your charging sessions. Monitor energy usage, set charging schedules, and access detailed reports, all from a user-friendly interface.',
              'Optimized Charging Efficiency: The pre-configuration ensures that your charging station operates at peak performance, delivering optimal power based on the model. The charging capacity can be adjusted to match your specific needs.',
              'Integrated Safety Features: Our products include the highest level of protection, ensuring your home and vehicle are safeguarded at all times.',
              'Future-Ready Technology: Stay ahead with automatic updates and continuous feature enhancements via the Monta backend, keeping your charging station aligned with the latest technological advancements.'
            ]
          }
        ]
      },
      list: {
        active: true,
        data: [
          'Complete range of EV charging solutions',
          'German engineering and quality standards',
          'Smart connectivity and IoT integration',
          'Scalable solutions for any application',
          '24/7 customer support and service',
          'Sustainable and eco-friendly technology'
        ]
      },
      imageHeight: {
        mobile: '400px',
        desktop: '500px'
      }
    },
    highlightsData: {
      title: 'Why Choose Blaupunkt',
      features: [
        {
          title: 'Innovation Leader',
          description: 'Pioneering the future of EV charging technology',
          icon: 'innovation'
        },
        {
          title: 'Global Presence',
          description: 'Worldwide network of suppliers and partners',
          icon: 'global'
        },
        {
          title: 'Quality Assurance',
          description: 'German engineering meets international standards',
          icon: 'quality'
        },
        {
          title: 'Future Ready',
          description: "Designed for tomorrow's electric vehicles",
          icon: 'future'
        }
      ]
    },
    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      headquarters: 'Berlin, Germany',
      globalSuppliers: [
        {
          name: 'Blaupunkt Europe GmbH',
          region: 'Europe & Middle East',
          contact: 'europe@blaupunkt-ev.com',
          specialization: 'Regional distribution and support'
        },
        {
          name: 'Blaupunkt Americas Inc',
          region: 'North & South America',
          contact: 'americas@blaupunkt-ev.com',
          specialization: 'Regional distribution and support'
        },
        {
          name: 'Blaupunkt Asia Pacific',
          region: 'Asia Pacific',
          contact: 'apac@blaupunkt-ev.com',
          specialization: 'Regional distribution and support'
        }
      ]
    }
  },

  // Products page data
  productsPage: {
    title: 'Our EV Charging Products',
    description:
      'Discover our comprehensive range of electric vehicle charging solutions.',
    active: true,
    breadcrumbs: [
      { text: 'Home', path: '/' },
      { text: 'Products', path: '/products', active: true }
    ],
    buttonText: 'View All',
    mainImage: 'Ev_charging.png',
    imageAlt: 'EV Charging Products',
    categories: [
      {
        id: 'cables',
        name: 'Charging Cables',
        description: 'Portable and durable charging cables',
        image: 'Product_image.png',
        productCount: 12
      },
      {
        id: 'stations',
        name: 'AC Charging Stations',
        description: 'Residential and commercial AC chargers',
        image: 'Charging_Stations.png',
        productCount: 8
      },
      {
        id: 'dc-chargers',
        name: 'DC Fast Chargers',
        description: 'High-power DC charging solutions',
        image: 'DC_Charging_Station.png',
        productCount: 6
      },
      {
        id: 'portable',
        name: 'Portable Chargers',
        description: 'Compact and travel-friendly chargers',
        image: 'Portable_EV_Charging.png',
        productCount: 5
      }
    ],
    supplierData: {
      manufacturer: 'Blaupunkt Technologies',
      productLines: [
        {
          name: 'Essential Series',
          supplier: 'BasicTech Manufacturing',
          region: 'Global',
          specialization: 'Entry-level charging solutions'
        },
        {
          name: 'Professional Series',
          supplier: 'ProCharge Systems',
          region: 'Europe & Americas',
          specialization: 'Commercial charging infrastructure'
        },
        {
          name: 'Premium Series',
          supplier: 'EliteCharge Technologies',
          region: 'Global',
          specialization: 'High-end charging solutions'
        }
      ]
    }
  },

  // Common office/contact section data
  officeData: {
    title: 'Global Offices & Support Centers',
    description:
      'Find your local Blaupunkt office for sales, support, and service.',
    offices: [
      {
        region: 'Europe Headquarters',
        address: 'Blaupunkt Straße 1, 10115 Berlin, Germany',
        phone: '+49 30 1234 5678',
        email: 'europe@blaupunkt-ev.com',
        hours: 'Mon-Fri: 8:00-18:00 CET',
        services: ['Sales', 'Technical Support', 'Service Center', 'Training']
      },
      {
        region: 'North America Office',
        address: '1234 Innovation Drive, San Francisco, CA 94105, USA',
        phone: '+1 415 555 0123',
        email: 'americas@blaupunkt-ev.com',
        hours: 'Mon-Fri: 8:00-17:00 PST',
        services: ['Sales', 'Technical Support', 'Distribution']
      },
      {
        region: 'Asia Pacific Office',
        address: '123 Future Street, Singapore 018956',
        phone: '+65 6123 4567',
        email: 'apac@blaupunkt-ev.com',
        hours: 'Mon-Fri: 9:00-18:00 SGT',
        services: ['Sales', 'Technical Support', 'Manufacturing']
      }
    ]
  },

  // Download section data
  downloadData: {
    title: 'Downloads & Resources',
    description:
      'Access technical documentation, specifications, and installation guides.',
    categories: [
      {
        name: 'Product Catalogs',
        files: [
          {
            name: 'EV Charging Solutions Catalog 2025',
            type: 'PDF',
            size: '12.5 MB',
            url: '/downloads/catalog-2025.pdf'
          },
          {
            name: 'Technical Specifications Guide',
            type: 'PDF',
            size: '8.2 MB',
            url: '/downloads/tech-specs.pdf'
          }
        ]
      },
      {
        name: 'Installation Guides',
        files: [
          {
            name: 'AC Charging Station Installation',
            type: 'PDF',
            size: '5.1 MB',
            url: '/downloads/ac-installation.pdf'
          },
          {
            name: 'DC Fast Charger Setup Guide',
            type: 'PDF',
            size: '7.8 MB',
            url: '/downloads/dc-installation.pdf'
          }
        ]
      },
      {
        name: 'Software & Apps',
        files: [
          {
            name: 'Blaupunkt Charging App',
            type: 'APK',
            size: '45.2 MB',
            url: '/downloads/blaupunkt-app.apk'
          },
          {
            name: 'Station Management Software',
            type: 'ZIP',
            size: '125.6 MB',
            url: '/downloads/management-software.zip'
          }
        ]
      },
      {
        name: 'Certifications',
        files: [
          {
            name: 'CE Certification Documents',
            type: 'PDF',
            size: '3.4 MB',
            url: '/downloads/ce-certs.pdf'
          },
          {
            name: 'UL Safety Certifications',
            type: 'PDF',
            size: '2.8 MB',
            url: '/downloads/ul-certs.pdf'
          }
        ]
      }
    ]
  },

  // Filter options for products pages
  filterData: {
    powerOutput: [
      { value: '3.6kW', label: '3.6kW', count: 8 },
      { value: '7.4kW', label: '7.4kW', count: 12 },
      { value: '11kW', label: '11kW', count: 10 },
      { value: '22kW', label: '22kW', count: 15 },
      { value: '50kW', label: '50kW', count: 6 },
      { value: '100kW', label: '100kW+', count: 9 }
    ],
    connectorType: [
      { value: 'type1', label: 'Type 1 (J1772)', count: 18 },
      { value: 'type2', label: 'Type 2 (Mennekes)', count: 25 },
      { value: 'ccs1', label: 'CCS1', count: 12 },
      { value: 'ccs2', label: 'CCS2', count: 15 },
      { value: 'chademo', label: 'CHAdeMO', count: 8 }
    ],
    installationType: [
      { value: 'wall', label: 'Wall Mounted', count: 20 },
      { value: 'pedestal', label: 'Pedestal', count: 15 },
      { value: 'portable', label: 'Portable', count: 12 },
      { value: 'floor', label: 'Floor Standing', count: 8 }
    ],
    application: [
      { value: 'residential', label: 'Residential', count: 22 },
      { value: 'commercial', label: 'Commercial', count: 18 },
      { value: 'public', label: 'Public', count: 15 },
      { value: 'fleet', label: 'Fleet', count: 10 }
    ],
    priceRange: [
      { value: '0-500', label: 'Under $500', count: 15 },
      { value: '500-2000', label: '$500 - $2,000', count: 18 },
      { value: '2000-10000', label: '$2,000 - $10,000', count: 12 },
      { value: '10000-50000', label: '$10,000 - $50,000', count: 8 },
      { value: '50000+', label: 'Over $50,000', count: 5 }
    ]
  },

  // Company information and supplier network
  companyData: {
    name: 'Blaupunkt Technologies',
    founded: 1924,
    headquarters: 'Berlin, Germany',
    employees: '5,000+',
    markets: '50+ countries',
    description:
      'A pioneer in automotive and consumer electronics, now leading the electric vehicle charging revolution with innovative, reliable, and sustainable solutions.',
    values: [
      'Innovation & Technology Leadership',
      'Quality & Reliability',
      'Sustainability & Environmental Responsibility',
      'Customer-Centric Solutions',
      'Global Partnership Network'
    ],
    certifications: [
      'ISO 9001:2015 Quality Management',
      'ISO 14001:2015 Environmental Management',
      'ISO 45001:2018 Occupational Health & Safety',
      'CE Marking Compliance',
      'UL Safety Standards',
      'FCC Certification'
    ]
  },

  // Global supplier and partner network
  supplierNetwork: {
    title: 'Global Supplier & Partner Network',
    description:
      'Our extensive network of suppliers and partners ensures quality, reliability, and global support for all Blaupunkt EV charging solutions.',
    categories: [
      {
        category: 'Component Suppliers',
        suppliers: [
          {
            name: 'PowerTech Components',
            location: 'Munich, Germany',
            specialization: 'Power electronics and control systems',
            partnership: 'Strategic Partner since 2018'
          },
          {
            name: 'ConnectorPro International',
            location: 'Shenzhen, China',
            specialization: 'Charging connectors and cables',
            partnership: 'Preferred Supplier since 2019'
          },
          {
            name: 'SafeGuard Systems',
            location: 'Boston, USA',
            specialization: 'Safety and protection systems',
            partnership: 'Technology Partner since 2020'
          }
        ]
      },
      {
        category: 'Manufacturing Partners',
        suppliers: [
          {
            name: 'PrecisionTech Manufacturing',
            location: 'Stuttgart, Germany',
            specialization: 'High-precision manufacturing and assembly',
            partnership: 'Manufacturing Partner since 2017'
          },
          {
            name: 'GlobalAssembly Solutions',
            location: 'Guadalajara, Mexico',
            specialization: 'Volume manufacturing and logistics',
            partnership: 'Regional Partner since 2019'
          },
          {
            name: 'TechBuild Industries',
            location: 'Bangalore, India',
            specialization: 'Electronics manufacturing and testing',
            partnership: 'Strategic Partner since 2021'
          }
        ]
      },
      {
        category: 'Distribution Partners',
        suppliers: [
          {
            name: 'EVolution Distribution',
            location: 'Amsterdam, Netherlands',
            specialization: 'European market distribution',
            partnership: 'Exclusive Distributor since 2018'
          },
          {
            name: 'ChargeTech Americas',
            location: 'Toronto, Canada',
            specialization: 'North American market coverage',
            partnership: 'Regional Distributor since 2019'
          },
          {
            name: 'EcoCharge Network',
            location: 'Tokyo, Japan',
            specialization: 'Asia-Pacific distribution and support',
            partnership: 'Strategic Distributor since 2020'
          }
        ]
      }
    ]
  }
}
