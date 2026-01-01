import { Product } from '../App';

// Helper to generate range of numbers
const range = (start: number, end: number) => 
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

// Desktop Essentials Images
// 1-8 are .jpeg, 9 is .jpg, 10-35 are .jpg
const desktopImages = [
  ...range(1, 8).map(i => `${import.meta.env.BASE_URL}assets/products/desktop/${i}.jpeg`),
  `${import.meta.env.BASE_URL}assets/products/desktop/9.jpg`,
  ...range(10, 35).map(i => `${import.meta.env.BASE_URL}assets/products/desktop/${i}.jpg`)
];

// Employee Joining Kit Images
// 1-133 are .jpg
const joiningKitImages = range(1, 133).map(i => `${import.meta.env.BASE_URL}assets/products/Employee joining kit/${i}.jpg`);

// Custom T-Shirts Images
// 1 is 01.jpg, 2 is 2.png, 3 is 3.png, 4-28 are .webp
const tshirtImages = [
  `${import.meta.env.BASE_URL}assets/products/tshirts/01.jpg`,
  `${import.meta.env.BASE_URL}assets/products/tshirts/2.png`,
  `${import.meta.env.BASE_URL}assets/products/tshirts/3.png`,
  ...range(4, 28).map(i => `${import.meta.env.BASE_URL}assets/products/tshirts/${i}.webp`)
];

// Trophies Images
// 2-263 are .jpg (exclude 1.jpg per requirement)
const trophiesImages = range(2, 263).map(i => `${import.meta.env.BASE_URL}assets/products/Trophies/${i}.jpg`);

// Medals Images
// 1-9 are 0x.webp, 10-27 are x.webp, 28-35 are .jpg
const medalsImages = [
  ...range(1, 9).map(i => `${import.meta.env.BASE_URL}assets/products/Medals/0${i}.webp`),
  ...range(10, 27).map(i => `${import.meta.env.BASE_URL}assets/products/Medals/${i}.webp`),
  ...range(28, 35).map(i => `${import.meta.env.BASE_URL}assets/products/Medals/${i}.jpg`)
];

// Water Bottles Images
// Actual files present:
// - 1-6 are .jpeg
// - 7-14 are .jpg
// - 21-26 are .jpg (newly added)
const bottleImages = [
  ...range(1, 6).map(i => `${import.meta.env.BASE_URL}assets/products/Water bottles/${i}.jpeg`),
  ...range(7, 14).map(i => `${import.meta.env.BASE_URL}assets/products/Water bottles/${i}.jpg`),
  ...range(21, 26).map(i => `${import.meta.env.BASE_URL}assets/products/Water bottles/${i}.jpg`),
];

// Flags Images (files are 1-5 as .JPG)
const flagsImages = range(1, 5).map(i => `${import.meta.env.BASE_URL}assets/products/Flags/${i}.JPG`);

// Pens Images (converted to .jpg for cross-browser support)
const pensImages = range(1, 9).map(i => `${import.meta.env.BASE_URL}assets/products/Pens/${i}.jpg`);

export const products: Product[] = [
  {
    id: 'desktop',
    title: 'Desktop Essentials',
    description: 'Premium corporate desk accessories and office supplies. Custom branded stationery, desk organizers, and workspace essentials for employee gifting in Delhi NCR.',
    images: desktopImages
  },
  {
    id: 'joining-kit',
    title: 'Employee Joining Kit',
    description: 'Custom employee welcome kits and onboarding packages. Branded merchandise bundles for new hires including desk essentials, apparel, and company swag across India.',
    images: joiningKitImages
  },
  {
    id: 'tshirts',
    title: 'Custom T-Shirts',
    description: 'High-quality branded t-shirts and corporate apparel. Custom printed polo shirts, crew necks, and team uniforms for corporate events and employee gifting in Delhi.',
    images: tshirtImages
  },
  {
    id: 'trophies',
    title: 'Trophies & Awards',
    description: 'Custom corporate trophies, awards, and recognition items. Premium acrylic, crystal, and metal trophies for employee appreciation and company events in India.',
    images: trophiesImages
  },
  {
    id: 'medals',
    title: 'Custom Medals',
    description: 'Personalized medals and lapel pins for corporate recognition. Custom engraved medals for achievements, service awards, and special accomplishments.',
    images: medalsImages
  },
  {
    id: 'bottles',
    title: 'Water Bottles',
    description: 'Eco-friendly branded water bottles and hydration solutions. Custom printed stainless steel and plastic bottles for corporate gifting and employee wellness programs.',
    images: bottleImages
  },
  {
    id: 'flags',
    title: 'Flags',
    description: 'Custom printed flags for corporate events, branding, and promotions. High-quality materials and vibrant colors suitable for indoor and outdoor use.',
    images: flagsImages
  },
  {
    id: 'pens',
    title: 'Pens',
    description: 'Premium branded pens for corporate gifting and office use. Custom logo printing available across a range of finishes and materials.',
    images: pensImages
  }
];
