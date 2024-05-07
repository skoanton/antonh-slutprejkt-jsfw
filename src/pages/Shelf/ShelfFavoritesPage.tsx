import FavoritedCard from "./components/ShelfCard";

type ShelfFavoritesPageProps = {};

const ShelfFavoritesPage = ({}: ShelfFavoritesPageProps) => {
  return (
    <>
      <FavoritedCard favoritesPage={true} />
    </>
  );
};

export default ShelfFavoritesPage;
