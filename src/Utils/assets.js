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
import chargingStationsUrl from '../assets/Images/Charging_Stations.png'
import dcChargingStationUrl from '../assets/Images/DC_Charging_Station.png'
import dcFastChargingUrl from '../assets/Images/DC_Fast_Charging_Station.png'
import evChargingUrl from '../assets/Images/Ev_charging.png'
import portableEvChargingUrl from '../assets/Images/Portable_EV_Charging.png'
import productImageUrl from '../assets/Images/Product_image.png'

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
  productImage: productImageUrl, // New Figma product image
};

// Product Images for Product Pages
export const productImgs = {
  chargingCables: productImageUrl,
  chargingStations: chargingStationsUrl,
  dcCharging: dcChargingStationUrl,
  dcFastCharging: dcFastChargingUrl,
  portableCharging: portableEvChargingUrl,
  evCharging: evChargingUrl,
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
    productImgs, // Added product images category
    wasteImgs 
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

// Common exports for easy importing
export const footerImage = homeImgs.footerImage; // Empty - no footer image found
export const whiteLogo = logos.white; // Available: logoWhiteUrl (imported)