// prettier-ignore
"use client"

import FavoritesOverview from "components/layouts/FavoritesOverview/FavoritesOverview";

export interface IFavoritesPage {
}

const FavoritesPage: React.FC<IFavoritesPage> = () => {
  return <FavoritesOverview/>;
};

export default FavoritesPage;
