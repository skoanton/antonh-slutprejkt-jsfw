import ShelfCard from "./components/ShelfCard";

type ShelfReadPageProps = {};

const ShelfReadPage = ({}: ShelfReadPageProps) => {
  return (
    <>
      <ShelfCard favoritesPage={false} />
    </>
  );
};

export default ShelfReadPage;
