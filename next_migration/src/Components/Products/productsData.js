import { chargingCablesData } from "../../Data/ChargingCables/data.js";
import { chargingStationsData } from "../../Data/ChargingStations/data.js";
import { dcChargingStationData } from "../../Data/DCChargingStation/data.js";
import { portableEvChargingData } from "../../Data/PortableEVCharging/data.js";
import { dcSuperFastChargingStationData } from "../../Data/DCSuperFastChargingStation/data.js";
// import { filterProducts } from "../../utils/productExclusions.js"; // TODO: Fix import issue

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
  "3.0kW",
  "3.7kW",
  "7.4kW",
  "11kW",
  "22kW",
  "43kW",
  "30kW",
  "40kW",
  "50kW",
  "60kW",
  "80kW",
  "120kW",
  "150kW",
  "180kW",
  "160kW",
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

// -----------------------------------------------------------------------------
// Normalization helpers (keep product cards clean and consistent)
// -----------------------------------------------------------------------------
const toStr = (v) => (typeof v === "number" ? `${v}` : (v || "").toString());

const normalizePower = (val) => {
  if (!val) return "";
  const s = toStr(val).replace(/\s+/g, "").toLowerCase();
  // extract number + kW
  const m = s.match(/(\d+(?:[.,]\d+)?)\s*k?w/);
  if (m) return `${m[1].replace(",", ".")}kW`;
  // fallback to rated current based form like 32A -> leave as-is
  return toStr(val);
};

const buildSpecs = (tokens) => tokens.filter(Boolean).join(" | ");

const uniqueId = (prefix, code, idx) => code || `${prefix}-${idx}`;

// Create a normalized product object
const makeProduct = ({
  prefix,
  model,
  title,
  fallbackImage,
  type,
  powerKeys = [],
  connectorKeys = [],
  phaseKeys = [],
  extraSpecKeys = [],
  hardCodedPhase = "",
  index,
}) => {
  const productCode = model.modelCode || model.code || "";
  const img = model.image || fallbackImage;

  const powerRaw = [...powerKeys]
    .map((k) => model[k])
    .find((v) => !!v);
  const power = normalizePower(powerRaw);

  const connector = [...connectorKeys]
    .map((k) => model[k])
    .find((v) => !!v) || "";

  const phase =
    hardCodedPhase ||
    ([...phaseKeys].map((k) => model[k]).find((v) => !!v) || "");

  const extraTokens = extraSpecKeys
    .map((k) => model[k])
    .filter(Boolean)
    .map(toStr);

  const specifications = buildSpecs([power, connector, phase, ...extraTokens]);

  return {
    id: uniqueId(prefix, productCode, index),
    title,
    specifications,
    productCode: productCode || `${prefix}-${index + 1}`,
    image: img,
    type,
    chargingSpeed: power || "",
    connectorType: connector || "",
    phaseType: phase || "",
    price: undefined,
  };
};

// -----------------------------------------------------------------------------
// Build PRODUCTS from real data (no placeholders, no "spaghetti")
// -----------------------------------------------------------------------------
const buildProducts = () => {
  const list = [];

  // 1) Cables
  (chargingCablesData.modelsData?.models || []).forEach((model, i) => {
    list.push(
      makeProduct({
        prefix: "cable",
        model,
        title: chargingCablesData.title || "EV Charging Cable",
        fallbackImage: chargingCablesData.mainImage,
        type: "Cables",
        powerKeys: ["maximumPower", "power", "chargingPower"],
        connectorKeys: ["connectorType"],
        phaseKeys: ["phaseType"],
        extraSpecKeys: ["current", "cableLength"],
        index: i,
      })
    );
  });

  // 2) AC Charging Stations (nested sections/categories)
  const acSections = chargingStationsData.modelsData?.sections || [];
  acSections.forEach((section, si) => {
    section.categories?.forEach((cat, ci) => {
      (cat.models || []).forEach((model, mi) => {
        list.push(
          makeProduct({
            prefix: "station",
            model,
            title: chargingStationsData.title || "Charging Station",
            fallbackImage: chargingStationsData.mainImage,
            type: "Charging Stations",
            powerKeys: ["maximumPower", "power"],
            connectorKeys: ["connectorType", "socketType"],
            phaseKeys: ["phaseType"],
            extraSpecKeys: ["current", "cableLength"],
            index: `${si}-${ci}-${mi}`,
          })
        );
      });
    });
  });

  // 3) DC Charging Station (30/40kW) - uses ratedPower, ratedCurrent, connectorPin
  (dcChargingStationData.modelsData?.models || []).forEach((model, i) => {
    list.push(
      makeProduct({
        prefix: "dc-station",
        model,
        title: dcChargingStationData.title || "DC Charging Station",
        fallbackImage: dcChargingStationData.mainImage,
        type: "DC Charging Station",
        powerKeys: ["ratedPower", "maximumPower", "power"],
        connectorKeys: ["connectorPin", "connectorType"],
        phaseKeys: ["phaseType"],
        extraSpecKeys: ["ratedCurrent"],
        hardCodedPhase: "DC",
        index: i,
      })
    );
  });

  // 4) Portable EV Charging
  (portableEvChargingData.modelsData || []).forEach((model, i) => {
    list.push(
      makeProduct({
        prefix: "portable",
        model,
        title: portableEvChargingData.title || "Portable EV Charging",
        fallbackImage: portableEvChargingData.mainImage,
        type: "Portable Charging",
        powerKeys: ["maximumPower", "chargingPower"],
        connectorKeys: ["connectorType"],
        phaseKeys: ["phaseType", "powerPhase"],
        extraSpecKeys: ["current", "cableLength"],
        index: i,
      })
    );
  });

  // 5) DC Super Fast Charging (normalize type to match filter options)
  (
    Array.isArray(dcSuperFastChargingStationData.modelsData)
      ? dcSuperFastChargingStationData.modelsData
      : (dcSuperFastChargingStationData.modelsData?.models || [])
  ).forEach(
    (model, i) => {
      list.push(
        makeProduct({
          prefix: "dc-fast",
          model,
          title:
            dcSuperFastChargingStationData.title ||
            "DC Super Fast Charging Station",
          fallbackImage: dcSuperFastChargingStationData.mainImage,
          type: "DC Fast Charging", // align with PRODUCT_TYPE_OPTIONS
          powerKeys: ["maximumPower"],
          connectorKeys: ["connectorType"],
          phaseKeys: [],
          extraSpecKeys: ["outputCurrent", "outputVoltage"],
          hardCodedPhase: "DC",
          index: i,
        })
      );
    }
  );

  // De-duplicate by productCode if needed
  const seen = new Set();
  const deduped = list.filter((p) => {
    const key = p.productCode || `${p.type}-${p.title}-${p.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return deduped;
};

export const PRODUCTS = buildProducts(); // TODO: Apply filterProducts when import is fixed
export const SAMPLE_PRODUCTS = PRODUCTS;
