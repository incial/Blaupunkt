import { chargingCablesData } from "../../Data/ChargingCables/data.js";
import { chargingStationsData } from "../../Data/ChargingStations/data.js";
import { dcChargingStationData } from "../../Data/DCChargingStation/data.js";
import { portableEvChargingData } from "../../Data/PortableEVCharging/data.js";
import { dcFastChargingStationData } from "../../Data/DCFastChargingStation/data.js";

/**
 * Filter options constants for product filtering and sorting
 */
export const SORT_OPTIONS = [
  "Popularity",
  "Price Low to High",
  "Price High to Low",
  "Newest First",
];
export const PRODUCT_TYPE_OPTIONS = [
  "All",
  "Cables",
  "Charging Stations",
  "DC Charging Station",
  "DC Fast Charging",
  "Portable Charging",
];
export const CHARGING_SPEED_OPTIONS = [
  "All",
  "3.7kW",
  "7.4kW",
  "11kW",
  "22kW",
  "43kW",
  "50kW",
  "60kW",
  "120kW",
  "150kW",
  "180kW",
  "250kW",
  "350kW",
];
export const CONNECTOR_TYPE_OPTIONS = [
  "All",
  "Type 1",
  "Type 2",
  "CCS",
  "CHAdeMO",
  "CCS1",
  "CCS2",
  "Multi",
  "Universal",
  "Dual",
];
export const PHASE_TYPE_OPTIONS = [
  "All",
  "Single-Phase",
  "Three-Phase",
  "DC",
  "Universal",
  "Single - Phase",
  "Three - Phase",
];

/**
 * Sample product data - in a real app this would come from an API
 */
const createUniqueId = (prefix, modelCode, index) => {
  return modelCode || `${prefix}-${Date.now()}-${index}`;
};

export const PRODUCTS = [
  // EV Charging Cables
  ...((chargingCablesData.modelsData?.models || []).map((model, index) => ({
    id: createUniqueId("cable", model.modelCode, index),
    title: chargingCablesData.title || "EV Charging Cable",
    specifications: `${model.current || ""} | ${model.cableLength || ""} | ${
      model.phaseType || ""
    } | ${model.connectorType || ""}`,
    productCode: model.modelCode || `CABLE-${index + 1}`,
    image: model.image || chargingCablesData.mainImage,
    type: "Cables",
    chargingSpeed:
      chargingCablesData.specificationsData?.specs?.find(
        (s) => s.label === "Rated Current"
      )?.value || "",
    connectorType: model.connectorType || "",
    phaseType: model.phaseType || "",
    price: undefined, // Add price if available in data
  })) || []),
  // Charging Stations (remove duplicates by modelCode)
  ...(() => {
    const allModels =
      chargingStationsData.modelsData?.sections?.flatMap(
        (section, sectionIndex) =>
          section.categories.flatMap((category, categoryIndex) =>
            (category.models || []).map((model, modelIndex) => ({
              id: createUniqueId(
                "station",
                model.modelCode,
                `${sectionIndex}-${categoryIndex}-${modelIndex}`
              ),
              title: chargingStationsData.title || "Charging Station",
              specifications: `${model.maximumPower || ""} | ${
                model.connectorType || ""
              } | ${model.phaseType || ""}`,
              productCode:
                model.modelCode ||
                `STATION-${sectionIndex}-${categoryIndex}-${modelIndex + 1}`,
              image: model.image || chargingStationsData.mainImage,
              type: "Charging Stations",
              chargingSpeed: model.maximumPower || "",
              connectorType: model.connectorType || "",
              phaseType: model.phaseType || "",
              price: undefined, // Add price if available in data
            }))
          )
      ) || [];
    // Filter unique by modelCode
    const seen = new Set();
    return allModels.filter((product) => {
      if (!product.productCode) return true;
      if (seen.has(product.productCode)) return false;
      seen.add(product.productCode);
      return true;
    });
  })(),
  // DC Charging Stations
  ...((dcChargingStationData.modelsData?.models || []).map((model, index) => ({
    id: createUniqueId("dc-station", model.modelCode, index),
    title: dcChargingStationData.title || "DC Charging Station",
    specifications: `${model.maximumPower || ""} | ${
      model.connectorType || ""
    } | ${model.phaseType || ""}`,
    productCode: model.modelCode || `DC-STATION-${index + 1}`,
    image: model.image || dcChargingStationData.mainImage,
    type: "DC Charging Station",
    chargingSpeed: model.maximumPower || "",
    connectorType: model.connectorType || "",
    phaseType: model.phaseType || "",
    price: undefined, // Add price if available in data
  })) || []),
  // Portable EV Charging
  ...((portableEvChargingData.modelsData || []).map((model, index) => ({
    id: createUniqueId("portable", model.modelCode, index),
    title: portableEvChargingData.title || "Portable EV Charging",
    specifications: `${model.maximumPower || model.chargingPower || ""} | ${
      model.connectorType || ""
    } | ${model.phaseType || model.powerPhase || ""}`,
    productCode: model.modelCode || `PORTABLE-${index + 1}`,
    image: model.image || portableEvChargingData.mainImage,
    type: "Portable Charging",
    chargingSpeed: model.maximumPower || model.chargingPower || "",
    connectorType: model.connectorType || "",
    phaseType: model.phaseType || model.powerPhase || "",
    price: undefined, // Add price if available in data
  })) || []),
  // DC Fast Charging Station
  ...((dcFastChargingStationData.modelsData?.models || []).map(
    (model, index) => ({
      id: createUniqueId("dc-fast", model.modelCode, index),
      title: dcFastChargingStationData.title || "DC Fast Charging Station",
      specifications: `${model.maximumPower || ""} | ${
        model.connectorType || ""
      } | ${model.outputVoltage || ""}`,
      productCode: model.modelCode || `DC-FAST-${index + 1}`,
      image: model.image || dcFastChargingStationData.mainImage,
      type: "DC Fast Charging",
      chargingSpeed: model.maximumPower || "",
      connectorType: model.connectorType || "",
      phaseType: model.phaseType || "DC",
      price: undefined, // Add price if available in data
    })
  ) || []),
];

// Export as SAMPLE_PRODUCTS for compatibility with existing imports
export const SAMPLE_PRODUCTS = PRODUCTS;
