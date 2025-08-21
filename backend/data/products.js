const products = [
  {
    name: "Logitech G502 HERO Gaming Mouse",
    description:
      "High-performance gaming mouse with HERO 25K sensor, customizable RGB lighting, 11 programmable buttons, and adjustable weights.",
    price: 59.99,
    discountPrice: 49.99,
    countInStock: 35,
    sku: "GM-LOGI-G502",
    category: "Gaming Mouse",
    brand: "Logitech",
    colors: ["Black", "White"],
    collections: "Gaming Essentials",
    rgb: "Yes",
    images: [
      {
        url: "/images/productimages/logitect mouse.webp",
        altText: "Logitech G502 HERO Gaming Mouse Front View",
      },
      {
        url: "/images/productimages/logitect mouse 2.webp",
        altText: "Logitech G502 HERO Gaming Mouse Front View",
      },
      {
        url: "/images/productimages/logitect mouse 3.webp",
        altText: "Logitech G502 HERO Gaming Mouse Front View",
      },
    ],
    rating: 4.8,
    numReviews: 320,
  },
  {
    name: "Razer BlackWidow V3 Mechanical Keyboard",
    description:
      "RGB mechanical keyboard with Razer Green switches, dedicated media keys, and ergonomic wrist rest for long gaming sessions.",
    price: 139.99,
    discountPrice: 119.99,
    countInStock: 28,
    sku: "KB-RAZ-BW-V3",
    category: "Gaming Keyboard",
    brand: "Razer",
    colors: ["Black"],
    collections: "Pro Gaming",
    rgb: "Yes",
    images: [
      {
        url: "/images/productimages/razer keyboard 3.png",
        altText: "Razer BlackWidow V3 Keyboard Front View",
      },
      {
        url: "/images/productimages/razer keyboard 2.jpg",
        altText: "Razer BlackWidow V3 Keyboard Front View",
      },
      {
        url: "/images/productimages/razer keyboard.jpg",
        altText: "Razer BlackWidow V3 Keyboard Front View",
      },
    ],
    rating: 4.7,
    numReviews: 210,
  },
  {
    name: "Xbox Series X Wireless Controller",
    description:
      "Ergonomic wireless controller with textured grip, hybrid D-pad, and Bluetooth connectivity for Xbox Series X|S and PC.",
    price: 59.99,
    discountPrice: 54.99,
    countInStock: 50,
    sku: "CTRL-XBOX-SX",
    category: "Gaming Controller",
    brand: "Microsoft",
    colors: ["Black", "White", "Blue"],
    collections: "Console Accessories",
    rgb: "No",
    images: [
      {
        url: "/images/productimages/controller.png",
        altText: "Xbox Series X Wireless Controller Front View",
      },
      {
        url: "/images/productimages/controller 2.png",
        altText: "Xbox Series X Wireless Controller Front View",
      },
      {
        url: "/images/productimages/controller 3.png",
        altText: "Xbox Series X Wireless Controller Front View",
      },
      {
        url: "/images/productimages/controller 4.png",
        altText: "Xbox Series X Wireless Controller Front View",
      },
    ],
    rating: 4.9,
    numReviews: 500,
  },
  {
    name: "PlayStation 5 Console",
    description:
      "Next-gen PlayStation 5 console with ultra-fast SSD, ray tracing, 4K gaming support, and DualSense wireless controller.",
    price: 499.99,
    discountPrice: 479.99,
    countInStock: 15,
    sku: "CON-PS5-STD",
    category: "Gaming Console",
    brand: "Sony",
    colors: ["White"],
    collections: "Next-Gen Gaming",
    rgb: "No",
    images: [
      {
        url: "/images/productimages/ps5.png",
        altText: "PlayStation 5 Console Front View",
      },
      {
        url: "/images/productimages/ps5 2.jpg",
        altText: "PlayStation 5 Console Front View",
      },
      {
        url: "/images/productimages/ps5 3.jpg",
        altText: "PlayStation 5 Console Front View",
      },
    ],
    rating: 4.9,
    numReviews: 1500,
  },
  {
    name: "RGB LED Light Strip for Gaming Setup",
    description:
      "Flexible RGB LED light strip with remote control, music sync mode, and adhesive backing for desk or wall mounting.",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 100,
    sku: "LED-RGB-STRIP",
    category: "Lighting",
    brand: "GamerGlow",
    colors: ["Multi-color"],
    collections: "Gaming Room Essentials",
    rgb: "Yes",
    images: [
      {
        url: "/images/productimages/led strip.png",
        altText: "RGB LED Light Strip on Gaming Desk",
      },
      {
        url: "/images/productimages/led strip 2.jpg",
        altText: "RGB LED Light Strip on Gaming Desk",
      },
    ],
    rating: 4.6,
    numReviews: 220,
  },
  {
    name: "Secretlab TITAN Evo 2022 Gaming Chair",
    description:
      "Ergonomic gaming chair with adjustable lumbar support, memory foam head pillow, and premium PU leather upholstery.",
    price: 549.99,
    discountPrice: 499.99,
    countInStock: 12,
    sku: "CHAIR-SECRET-TITAN",
    category: "Gaming Chair",
    brand: "Secretlab",
    colors: ["Black", "Red", "Blue"],
    collections: "Pro Gaming",
    rgb: "No",
    images: [
      {
        url: "/images/productimages/gaming chair.png",
        altText: "Secretlab TITAN Evo Gaming Chair",
      },
      {
        url: "/images/productimages/gaming chair 2.jpg",
        altText: "Secretlab TITAN Evo Gaming Chair",
      },
    ],
    rating: 4.9,
    numReviews: 430,
  },
  {
    name: "HyperX Cloud II Gaming Headset",
    description:
      "Comfortable gaming headset with 53mm drivers, virtual 7.1 surround sound, and detachable noise-canceling microphone.",
    price: 99.99,
    discountPrice: 89.99,
    countInStock: 40,
    sku: "HEAD-HYPERX-CLOUD2",
    category: "Gaming Headset",
    brand: "HyperX",
    colors: ["Black", "Red"],
    collections: "Gaming Essentials",
    rgb: "No",
    images: [
      {
        url: "/images/productimages/hyper-x headphone.png",
        altText: "HyperX Cloud II Gaming Headset",
      },
      {
        url: "/images/productimages/hyper-x headphones 2.webp",
        altText: "HyperX Cloud II Gaming Headset",
      },
      {
        url: "/images/productimages/hyper-x headphones 3.webp",
        altText: "HyperX Cloud II Gaming Headset",
      },
    ],
    rating: 4.8,
    numReviews: 780,
  },
  {
    name: "Blue Yeti USB Microphone",
    description:
      "Professional USB microphone with multiple pickup patterns, gain control, and plug-and-play setup for streaming and podcasting.",
    price: 129.99,
    discountPrice: 119.99,
    countInStock: 25,
    sku: "MIC-BLUE-YETI",
    category: "Microphone",
    brand: "Blue",
    colors: ["Black", "Silver"],
    collections: "Streaming Gear",
    rgb: "No",
    images: [
      {
        url: "/images/productimages/yeti mic.png",
        altText: "Blue Yeti USB Microphone",
      },
      {
        url: "/images/productimages/yeti mic 2.jpg",
        altText: "Blue Yeti USB Microphone",
      },
    ],
    rating: 4.7,
    numReviews: 650,
  },
  {
    name: "Elgato Stream Deck MK.2",
    description:
      "Customizable control pad with 15 LCD keys for quick access to streaming functions, macros, and shortcuts.",
    price: 149.99,
    discountPrice: 139.99,
    countInStock: 18,
    sku: "STREAM-ELGATO-MK2",
    category: "Streaming Accessory",
    brand: "Elgato",
    colors: ["Black"],
    collections: "Streaming Gear",
    rgb: "Yes",
    images: [
      {
        url: "/images/productimages/power controller.png",
        altText: "Elgato Stream Deck MK.2",
      },
      {
        url: "/images/productimages/power controller 2.jpg",
        altText: "Elgato Stream Deck MK.2",
      },
    ],
    rating: 4.9,
    numReviews: 500,
  },
  {
    name: "ASUS ROG Swift 27” Gaming Monitor",
    description:
      "27-inch gaming monitor with 165Hz refresh rate, 1ms response time, and G-SYNC compatibility for smooth gameplay.",
    price: 499.99,
    discountPrice: 449.99,
    countInStock: 10,
    sku: "MON-ASUS-ROG27",
    category: "Gaming Monitor",
    brand: "ASUS ROG",
    colors: ["Black"],
    collections: "Pro Gaming",
    rgb: "Yes",
    images: [
      {
        url: "/images/productimages/monitor.png",
        altText: "ASUS ROG Swift 27” Gaming Monitor",
      },
      {
        url: "/images/productimages/monitor.jpg",
        altText: "ASUS ROG Swift 27” Gaming Monitor",
      },
    ],
    rating: 4.8,
    numReviews: 310,
  },
  // {
  //   name: "ASUS ROG Swift 27” Gaming Monitor",
  //   description:
  //     "27-inch gaming monitor with 165Hz refresh rate, 1ms response time, and G-SYNC compatibility for smooth gameplay.",
  //   price: 499.99,
  //   discountPrice: 449.99,
  //   countInStock: 10,
  //   sku: "MON-ASUS-ROG271",
  //   category: "Gaming Monitor",
  //   brand: "ASUS ROG",
  //   colors: ["Black"],
  //   collections: "Pro Gaming",
  //   rgb: "Yes",
  //   images: [
  //     {
  //       url: "/images/productimages/alienware monitor.jpg",
  //       altText: "ASUS ROG Swift 27” Gaming Monitor",
  //     },
  //     {
  //       url: "/images/productimages/alienware monitor.jpg",
  //       altText: "ASUS ROG Swift 27” Gaming Monitor",
  //     },
  //   ],
  //   rating: 4.8,
  //   numReviews: 310,
  // },
];

module.exports = products;
