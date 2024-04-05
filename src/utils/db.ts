import { p1, p2, p3 } from "../assets/images/products";

type heroType = {
  text: string;
  span: string;
};

const heroData: heroType[] = [
  {
    text: "Experience the Apex Advantage in",
    span: "Every Mile.",
  },
  {
    text: "Heat Defying, Performance",
    span: "Unleashed.",
  },
  {
    text: "All Terrain Conquered, Every Season",
    span: "Mastered.",
  },
  {
    text: "Whisper Quiet Ride. Unleash Your",
    span: "Driving Spirit.",
  },
];

type productType = {
  prodNumber: string;
  prodImage: string;
  prodTitle: string;
  prodDesc: string;
};

const productsData: productType[] = [
  {
    prodNumber: "01",
    prodImage: p1,
    prodTitle: "All-Terrain",
    prodDesc:
      "Conquer any path with this all-season, all-terrain champion. Engineered for durability, traction, and exploration, the Odyssey handles everything from desert sands to snowy mountain roads.",
  },
  {
    prodNumber: "02",
    prodImage: p2,
    prodTitle: "Inferno X",
    prodDesc:
      "This high-performance tire dominates scorching temperatures with unparalleled heat resistance and exceptional grip. Ideal for performance vehicles and drivers who push their limits.",
  },
  {
    prodNumber: "03",
    prodImage: p3,
    prodTitle: "Whisper Eco",
    prodDesc:
      "Experience the ultimate in comfort and fuel efficiency with the Whisper Eco. This low-noise, eco-friendly design prioritizes a smooth, quiet ride and reduces environmental impact.",
  },
];

export { heroData, productsData };
