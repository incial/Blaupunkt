// Hero Section Videos
export const heroVids = {
  heroSection: '/src/assets/Videos/HeoIntro.mp4',
};

// Import Product Images

import evCabPd1 from '../assets/Images/pdImages/EVCab-Pd-1.png'
import evCabPd2 from '../assets/Images/pdImages/EVCab-pd-2.png'
import dcPd1 from '../assets/Images/pdImages/Dcpd1.png'
import dcPd2 from '../assets/Images/pdImages/Dcpd2.png'
import fastPd1 from '../assets/Images/pdImages/Fastpd1.png'
import portEvPd1 from '../assets/Images/pdImages/PortEvPd1.png'
import stationPd1 from '../assets/Images/pdImages/StationPd-1.png'
import stationPd2 from '../assets/Images/pdImages/StationPd-2.png'


// Import all image assets
import logoWhiteUrl from '../assets/Images/Logo_white.svg'
import chargingStationsUrl from '../assets/Images/CatImages/Charging_Stations.png'
import dcChargingStationUrl from '../assets/Images/CatImages/DC_Charging_Station.png'
import dcFastChargingUrl from '../assets/Images/CatImages/DC_Fast_Charging_Station.png'
import evChargingUrl from '../assets/Images/CatImages/Ev_charging.png'
import portableEvChargingUrl from '../assets/Images/CatImages/Portable_EV_Charging.png'

// EV Charging Cable Images
import evCab1Url from '../assets/Images/EvCables/EVCab-1.png'
import evCab2Url from '../assets/Images/EvCables/EVCab-2.png'
import evCab3Url from '../assets/Images/EvCables/EVCab-3.png'
import evCab4Url from '../assets/Images/EvCables/EVCab-4.png'
import evCabMidUrl from '../assets/Images/EvCables/EVCab-Mid.png'
import evCabMidRightUrl from '../assets/Images/EvCables/EVCab-Mid-Right.png'

// Logo and Brand Assets
export const logos = {
  main: '/Logo.svg',
  white: logoWhiteUrl, 
};

// Home Section Images
export const homeImgs = {

  logoWhite: logoWhiteUrl,
  logo: '/Logo.svg',
  // EV Charging related images
  evCharging: evChargingUrl,
};

// Charging Station Images (New Category)
export const chargingImgs = {
  // Charging Stations
  stations: chargingStationsUrl,
  dcStation: dcChargingStationUrl,
  dcFast: dcFastChargingUrl,
  portable: portableEvChargingUrl,
  evGeneral: evChargingUrl,
  productImage: evChargingUrl, // Using EV charging as fallback
};

// EV Charging Cables Images (New Category)
export const evCableImgs = {
  main: evCabMidUrl, // Using specific cable image as main
  charger: chargingStationsUrl, // Using charging station as fallback
  cable1: evCab1Url,
  cable2: evCab2Url,
  cable3: evCab3Url,
  cable4: evCab4Url,
  cableMid: evCabMidUrl,
  cableMidRight: evCabMidRightUrl,
  cablePd1: evCabPd1, // Using actual imported image
  cablePd2: evCabPd2, // Using actual imported image
};

// Product Images for Product Pages
export const productImgs = {
  chargingCables: evCabMidUrl, // Using specific EV cable image
  chargingStations: chargingStationsUrl,
  dcCharging: dcChargingStationUrl,
  dcFastCharging: dcFastChargingUrl,
  portableCharging: portableEvChargingUrl,
  evCharging: evChargingUrl,
  charger: chargingStationsUrl, // Using charging station as fallback
  // EV Charging Cable variations
  evCab1: evCab1Url,
  evCab2: evCab2Url,
  evCab3: evCab3Url,
  evCab4: evCab4Url,
  evCabMid: evCabMidUrl,  
  evCabMidRight: evCabMidRightUrl,
  evCabPd1: evCabPd1, // Using actual imported image
  evCabPd2: evCabPd2, // Using actual imported image
  // DC Charging Product Images
  dcPd1: dcPd1,
  dcPd2: dcPd2,
  // Fast Charging Product Images
  fastPd1: fastPd1,
  // Portable EV Charging Product Images
  portEvPd1: portEvPd1,
  // Station Product Images
  stationPd1: stationPd1,
  stationPd2: stationPd2,
};


// Background Images for Text Backgrounds and Overview Sections
export const bgImgs = {
  evChargingCables: evCableImgs.cableMidRight, // Using new EV cable image as background
  chargingStations: chargingStationsUrl,
  dcChargingStation: dcChargingStationUrl,
  dcFastChargingStation: dcFastChargingUrl,
  portableEVCharging: portableEvChargingUrl,
  evCharging: evChargingUrl,
};

// Overview Section Specific Images
export const overviewImgs = {
  chargingCables: {
    main: evCableImgs.main,
    feature: evCableImgs.cable3,
    ideal: evCableImgs.cable4,
    background: evCableImgs.cableMidRight
  },
  chargingStations: {
    main: chargingStationsUrl,
    feature: chargingStationsUrl,
    ideal: chargingStationsUrl,
    background: chargingStationsUrl
  },
  dcChargingStation: {
    main: dcChargingStationUrl,
    feature: dcChargingStationUrl,
    ideal: dcChargingStationUrl,
    background: dcChargingStationUrl
  },
  dcFastChargingStation: {
    main: dcFastChargingUrl,
    feature: dcFastChargingUrl,
    ideal: dcFastChargingUrl,
    background: dcFastChargingUrl
  },
  portableEVCharging: {
    main: portableEvChargingUrl,
    feature: portableEvChargingUrl,
    ideal: portableEvChargingUrl,
    background: portableEvChargingUrl
  }
};

// Utility function to get video source with error handling
export const getVideoSrc = (videoKey, category = 'heroVids') => {
  const videoMaps = { heroVids };
  const videoMap = videoMaps[category];
  
  if (!videoMap || !videoMap[videoKey]) {
    console.warn(`Video not found: ${category}.${videoKey}`);
    return '';
  }
  
  return videoMap[videoKey];
};

// Utility function to get image source with error handling
export const getImageSrc = (imageKey, category = 'homeImgs') => {
  const imageMaps = { 
    logos, 
    homeImgs, 
    chargingImgs, // Added new category
    evCableImgs, // Added EV cable images category
    productImgs, // Added product images category
    overviewImgs, // Added overview images category
    bgImgs // Added background images category
  };
  const imageMap = imageMaps[category];
  
  if (!imageMap || !imageMap[imageKey]) {
    console.warn(`Image not found: ${category}.${imageKey}`);
    return '';
  }
  
  return imageMap[imageKey];
};


// Helper function to preload videos for better performance
export const preloadVideo = (videoSrc) => {
  if (!videoSrc) return;
  
  const video = document.createElement('video');
  video.preload = 'metadata';
  video.src = videoSrc;
  video.load();
};

// Helper function to preload multiple videos
export const preloadVideos = (videoSources) => {
  videoSources.forEach(src => preloadVideo(src));
};

// Helper exports for easy access to EV cable images
export const EVCableImages = {
  main: evCableImgs.main,
  cable1: evCableImgs.cable1,
  cable2: evCableImgs.cable2,
  cable3: evCableImgs.cable3,
  cable4: evCableImgs.cable4,
  cableMid: evCableImgs.cableMid,
  cableMidRight: evCableImgs.cableMidRight,
  cablePd1: evCableImgs.cablePd1,
  cablePd2: evCableImgs.cablePd2,
  charger: evCableImgs.charger
};

// Common exports for easy importing
export const footerImage = homeImgs.footerImage; // Empty - no footer image found
export const whiteLogo = logos.white; // Available: logoWhiteUrl (imported)