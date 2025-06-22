/**
 * Local Assets Utility
 * Provides shorter named imports for local images, videos, and icons
 */

// Hero Section Videos
export const heroVids = {
  heroSection: '/src/assets/Videos/HeoIntro.mp4',
};

// Other Videos
export const vids = {
  subfooter: '',
  goatfooter: '',
  subhero1: '',
  subhero2: '',
  // Fallback for missing video files
  evCharging: '', // Fallback for EV_charging _video.mp4
  wasteToEnergy: '', // Fallback for Waste_To_Energy.mp4
  videoBanner: '', // Fallback for Video_Banner.mp4
  connectWithUs: '' // Fallback for Connectwithus.mp4
};

// Import all image assets
import logoWhiteUrl from '../assets/Images/Logo_white.svg'
// import heroImageUrl from '../assets/Images/HeroImage.png' // File doesn't exist - commented out
import chargingStationsUrl from '../assets/Images/CatImages/Charging_Stations.png'
import dcChargingStationUrl from '../assets/Images/CatImages/DC_Charging_Station.png'
import dcFastChargingUrl from '../assets/Images/CatImages/DC_Fast_Charging_Station.png'
import evChargingUrl from '../assets/Images/CatImages/Ev_charging.png'
import portableEvChargingUrl from '../assets/Images/CatImages/Portable_EV_Charging.png'
// import productImageUrl from '../assets/Images/Product_image.png' // File doesn't exist - using fallback
// import chargerUrl from '../assets/Images/charger.jpg' // File doesn't exist - using fallback

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
  icon: ''
};

// Hero Section Icons
export const heroIcons = {
  battery: '',
  circle: '',
};

// Home Section Images
export const homeImgs = {
  aboutUs: '',
  hero: '', // No hero image available
  aboutUsSection: '',
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
  main: evChargingUrl, // Main product image fallback
  charger: chargingStationsUrl, // Using charging station as fallback
  cable1: evCab1Url,
  cable2: evCab2Url,
  cable3: evCab3Url,
  cable4: evCab4Url,
  cableMid: evCabMidUrl,
  cableMidRight: evCabMidRightUrl,
  cablePd1: evCab1Url, // Using cable1 as fallback
  cablePd2: evCab2Url, // Using cable2 as fallback
};

// Product Images for Product Pages
export const productImgs = {
  chargingCables: evChargingUrl, // Using EV charging as fallback
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
  evCabMid: evCabMidUrl,  evCabMidRight: evCabMidRightUrl,
  evCabPd1: evCab1Url, // Using cable1 as fallback
  evCabPd2: evCab2Url, // Using cable2 as fallback
};

// Client Images
export const clientImgs = {
  client1: '',
  client2: '',
  client3: '',
  client4: '',
  client5: '',
  client6: '',
  client7: '',
  client8: '',
  client9: '',
  client10: ''
};

// EV Charging Images (Updated with actual images)
export const evImgs = {
  // Charging stations
  stations: chargingStationsUrl,
  dcStation: dcChargingStationUrl,
  dcFast: dcFastChargingUrl,
  portable: portableEvChargingUrl,
  charging: evChargingUrl,
  
  // Legacy names (keeping for backward compatibility)
  acAbout: '',
  acCharger: '',
  cpoAbout: '',
  cpo: '',
  dcAbout: '',
  dcCharger: dcChargingStationUrl,
  engineeringWorks: '',
  ewAbout: '',
  moreAbout: '',
  charger: chargingStationsUrl,
  more: ''
};

// Waste to Energy Images
export const wasteImgs = {
  containerizedPlant: '',
  cpAbout: '',
  household: '',
  hsAbout: '',
  largeScalePlant: '',
  lsAbout: '',
  smartWaste: '',
  swAbout: ''
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
  const videoMaps = { heroVids, vids };
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
    clientImgs, 
    evImgs, 
    chargingImgs, // Added new category
    evCableImgs, // Added EV cable images category
    productImgs, // Added product images category
    overviewImgs, // Added overview images category
    wasteImgs,
    bgImgs // Added background images category
  };
  const imageMap = imageMaps[category];
  
  if (!imageMap || !imageMap[imageKey]) {
    console.warn(`Image not found: ${category}.${imageKey}`);
    return '';
  }
  
  return imageMap[imageKey];
};

// Utility function to get icon source with error handling
export const getIconSrc = (iconKey) => {
  if (!heroIcons[iconKey]) {
    console.warn(`Icon not found: ${iconKey}`);
    return '';
  }
  
  return heroIcons[iconKey];
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