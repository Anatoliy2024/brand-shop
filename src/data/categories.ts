export const categories = [
  {
    text: "Plant pots",
    link: "/catalog?category=plant-pots",
    id: "plant-pots",
  },
  { text: "Ceramics", link: "/catalog?category=ceramics", id: "ceramics" },
  { text: "Tables", link: "/catalog?category=table", id: "table" },
  { text: "Chairs", link: "/catalog?category=chair", id: "chair" },
  { text: "Tableware", link: "/catalog?category=tableware", id: "tableware" },
  { text: "Art", link: "/catalog?category=art", id: "art" },
  { text: "Cutlery", link: "/catalog?category=cutlery", id: "cutlery" },
  { text: "Lamp", link: "/catalog?category=lamp", id: "lamp" },
]

export const priceOption = [
  { text: "0 - 100", id: "one-hundred", min: 0, max: 100 },
  { text: "101 - 250", id: "two-hundred-fifty", min: 101, max: 250 },
  { text: "251 +", id: "over-two-hundred-fifty", min: 251, max: null },
]
export const brandOption = [
  { text: "Robert Smith", id: "Robert-Smith" },
  { text: "Liam Gallagher", id: "Liam-Gallagher" },
  { text: "Biggie Smalls", id: "Biggie-Smalls" },
  { text: "Thom Yorke", id: "Thom-Yorke" },
]

export const discoverOption = [
  {
    text: "New arrivals",
    link: "/catalog?discover=new-arrivals",
    id: "new-arrivals",
  },
  {
    text: "Best sellers",
    link: "/catalog?discover=best-sellers",
    id: "best-sellers",
  },
  {
    text: "Recently viewed",
    link: "/catalog?discover=recently-viewed",
    id: "recently-viewed",
  },
  {
    text: "Popular this week",
    link: "/catalog?discover=popular-this-week",
    id: "popular-this-week",
  },
  { text: "All products", link: "/catalog", id: "all" },
]
