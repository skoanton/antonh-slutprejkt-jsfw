import FavoritedCard from "@/components/ui/FavoritedCard";

type ShelfFavoritesPageProps = {};

const ShelfFavoritesPage = ({}: ShelfFavoritesPageProps) => {
  return (
    <>
      <FavoritedCard favoritesPage={true} />
    </>
  );
};

export default ShelfFavoritesPage;
