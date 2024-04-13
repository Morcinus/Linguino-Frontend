// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import FavoritesOverview from "components/layouts/FavoritesOverview/FavoritesOverview";

export interface IFavoritesPage {}

const FavoritesPage: React.FC<IFavoritesPage> = () => {
  const { user } = useAuth();

  return <>{user && <FavoritesOverview courseId={user.selectedCourse.id} />}</>;
};

export default FavoritesPage;
