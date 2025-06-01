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

// Logo and Brand Assets
export const logos = {
  main: '/Logo.svg',
  white: '/src/assets/Images/Logo_white.svg', 
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
  HeroImage: '/src/assets/Images/HeroImage.png',
  aboutUsSection: '',
  logoWhite: '/src/assets/Images/Logo_white.svg',
  logo: '/Logo.svg',
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

// EV Charging Images
export const evImgs = {
  acAbout: '',
  acCharger: '',
  cpoAbout: '',
  cpo: '',
  dcAbout: '',
  dcCharger: '',
  engineeringWorks: '',
  ewAbout: '',
  moreAbout: '',
  charger: '',
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
export const whiteLogo = logos.white; // Available: /src/assets/Images/Logo_white.svg