import { Product } from '../App';

// Helper to generate range of numbers
const range = (start: number, end: number) => 
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

// Desktop Essentials Images
// 1-8 are .jpeg, 9 is .jpg, 10-35 are .jpg
const desktopImages = [
  ...range(1, 8).map(i => `assets/products/desktop/${i}.jpeg`),
  `assets/products/desktop/9.jpg`,
  ...range(10, 35).map(i => `assets/products/desktop/${i}.jpg`)
];

// Employee Joining Kit Images
// 1-133 are .jpg
const joiningKitImages = range(1, 133).map(i => `assets/products/Employee joining kit/${i}.jpg`);

// Custom T-Shirts Images
// 1 is 01.jpg, 2 is 2.png, 3 is 3.png, 4-28 are .webp
const tshirtImages = [
  `assets/products/tshirts/01.jpg`,
  `assets/products/tshirts/2.png`,
  `assets/products/tshirts/3.png`,
  ...range(4, 28).map(i => `assets/products/tshirts/${i}.webp`)
];

// Trophies Images
// 2-263 are .jpg (exclude 1.jpg per requirement)
const trophiesImages = range(2, 263).map(i => `assets/products/Trophies/${i}.jpg`);

// Medals Images
// 1-9 are 0x.webp, 10-27 are x.webp, 28-35 are .jpg
const medalsImages = [
  ...range(1, 9).map(i => `assets/products/Medals/0${i}.webp`),
  ...range(10, 27).map(i => `assets/products/Medals/${i}.webp`),
  ...range(28, 35).map(i => `assets/products/Medals/${i}.jpg`)
];

// Water Bottles Images
// Actual files present:
// - 1-6 are .jpeg
// - 7-14 are .jpg
// - 21-26 are .jpg (newly added)
const bottleImages = [
  ...range(1, 6).map(i => `assets/products/Water Bottles/${i}.jpeg`),
  ...range(7, 14).map(i => `assets/products/Water Bottles/${i}.jpg`),
  ...range(21, 26).map(i => `assets/products/Water Bottles/${i}.jpg`),
];

export const products: Product[] = [
  {
    id: 'desktop',
    title: 'Desktop Essentials',
    description: 'Premium quality desk accessories to elevate your workspace',
    images: desktopImages
  },
  {
    id: 'joining-kit',
    title: 'Employee Joining Kit',
    description: 'Make a lasting first impression with custom welcome kits',
    images: joiningKitImages
  },
  {
    id: 'tshirts',
    title: 'Custom T-Shirts',
    description: 'High-quality branded apparel for teams and events',
    images: tshirtImages
  },
  {
    id: 'trophies',
    title: 'Trophies & Awards',
    description: 'Recognize excellence with stunning custom trophies',
    images: trophiesImages
  },
  {
    id: 'medals',
    title: 'Custom Medals',
    description: 'Celebrate achievements with personalized medals',
    images: medalsImages
  },
  {
    id: 'bottles',
    title: 'Water Bottles',
    description: 'Eco-friendly branded bottles for your team',
    images: bottleImages
  }
];
