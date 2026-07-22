export const servicePrice = {
  "House Construction": 299,
  "House Design": 199,
  "Interior Design": 599,
  "Exterior Design": 399,
  "Architecture Planning": 799,
  "Structural Drawing": 499,
  "Vastu Consultation": 299,
  "3D Elevation": 699,
};

export const locationCharge = {
  Patna: 0,
  Lucknow: 100,
  Noida: 200,
  Delhi: 300,
  Kanpur: 50,
  Varanasi: 0,
};

const packages = [
  {
    name: "Premium",
    price: "₹1,950",
    recommended: false,
    features: {
      consultation: "Free",
      drawings: "2D Floor Plan & 3D Elevation",
      steel: "JSW Steel",
      cement: "UltraTech",
      bricks: "Red Bricks",
      flooring: "Vitrified Tiles",
      painting: "Asian Paints",
      warranty: "10 Years",
    },
  },
  {
    name: "Platinum",
    price: "₹2,850",
    recommended: true,
    features: {
      consultation: "Free",
      drawings: "2D Floor Plan & 3D Elevation",
      steel: "TATA Steel",
      cement: "UltraTech",
      bricks: "Wire Cut Bricks",
      flooring: "Premium Tiles",
      painting: "Royale",
      warranty: "15 Years",
    },
  },
  {
    name: "Royal",
    price: "₹4,100",
    recommended: false,
    features: {
      consultation: "Free",
      drawings: "2D Floor Plan & 3D Elevation",
      steel: "TATA Steel",
      cement: "UltraTech Premium",
      bricks: "AAC Blocks",
      flooring: "Italian Marble",
      painting: "Royale Luxury",
      warranty: "20 Years",
    },
  },
];

export default packages;