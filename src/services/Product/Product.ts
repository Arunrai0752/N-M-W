import Product1 from "../../assets/Products1.webp";
// import Product1alternative from "../../assets/Products11.webp";

import Product2 from "../../assets/Products2.webp";
// import Product2alternative from "../../assets/Products22.webp";

import Product3 from "../../assets/Products3.webp";
// import Product3alternative from "../../assets/Products33.webp";

import Product4 from "../../assets/Products4.webp";
// import Product4alternative from "../../assets/Products44.webp";

export const products = [
  {
    id: 1,
    name: "A2 Desi Cow Bilona Ghee 1 Liter",
    image1: Product1,
    image2: Product1, //for Alternative img
    rating: 5,
    reviews: 88,
    originalPrice: 2590,
    discountedPrice: 1990,
    description:
      "Pure A2 Desi Cow Bilona Ghee made from grass-fed cow milk by Natural Milk World. Taste ka swad, health ka boost.",
    category: "Ghee",
    inStock: true,
  },
  {
    id: 2,
    name: "A2 Desi Cow Bilona Ghee 500ml",
    image1: Product2,
    image2: Product2,
    rating: 5,
    reviews: 30,
    originalPrice: 1590,
    discountedPrice: 1180,
    description:
      "Rich, aromatic, and nutrient-dense A2 Desi Cow Bilona Ghee from Natural Milk World — perfect for daily use and festive cooking.",
    category: "Ghee",
    inStock: true,
  },
  {
    id: 3,
    name: "Green Chilli Pickle 500 Gram",
    image1: Product3,
    image2: Product3,
    rating: 5,
    reviews: 1,
    originalPrice: 670,
    discountedPrice: 490,
    description:
      "Spicy, tangy, and made with love — authentic homemade Green Chilli Pickle straight from Natural Milk World farms.",
    category: "Pickle",
    inStock: true,
  },
  {
    id: 4,
    name: "Pickle Combo – 2 Flavors, 1 Delicious Deal",
    image1: Product4,
    image2: Product4,
    rating: 5,
    reviews: 0,
    originalPrice: 1499,
    discountedPrice: 899,
    description:
      "A combo of Carrot, Green Chilli, and Kair Pickles — the perfect blend of tang and spice from Natural Milk World’s kitchen.",
    category: "Pickle",
    inStock: true,
  },
];
