const categoryConfig = [
  { name: "Indian" },
  { name: "Chinese" },
  { name: "American" },
];

const subCategoryConfig = [
  { name: "South Indian", country: "Indian" },
  { name: "North Indian", country: "Indian" },
  { name: "Swzhewan Noodles", country: "Chinese" },
  { name: "Chop Stick Soup", country: "Chinese" },
  { name: "Pizza", country: "American" },
  { name: "Burger", country: "American" },
];

const units = [{ name: "Kgs" }, { name: "Ltrs" }, { name: "Wght" }];

const taxTypes = [
  { name: "Inclusive" },
  { name: "Exclusive" },
  { name: "Not applicable" },
];

const gstPercentage = [{ name: 5 }, { name: 12 }, { name: 18 }, { name: 28 }];

const Configs = {
  categoryConfig,
  subCategoryConfig,
  units,
  taxTypes,
  gstPercentage,
};

export default Configs;
