const config = {
  publicRoutes: ["/signup", "/login"],
  pagesWithoutToolbar: ["/study"],
  pagesWithoutContentContainer: ["/study"],

  // TODO fetchnout ze serveru a uložit do globálního contextu
  categories: [
    {
      id: "0",
      name: "levels.0",
    },
    {
      id: "1",
      name: "levels.1",
    },
    {
      id: "2",
      name: "levels.2",
    },
    {
      id: "3",
      name: "levels.3",
    },
    {
      id: "4",
      name: "levels.4",
    },
    {
      id: "5",
      name: "levels.5",
    },
  ],

  // TODO fetchnout ze serveru a uložit do globálního contextu?
  shopCategories: [
    {
      id: "0",
      name: "shop.categories.0",
    },
    {
      id: "1",
      name: "shop.categories.1",
    },
    {
      id: "2",
      name: "shop.categories.2",
    },
  ],
};

module.exports = config;
