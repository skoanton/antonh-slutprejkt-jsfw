import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useIsBookInFavorites } from "@/hooks/useIsBookInFavorites";
import { useContext } from "react";
import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";
import { SHELF_ACTION } from "@/Context/ShelfContext/ShelfReducer";
import { Book } from "@/types/bookType";

type FavoriteButtonProps = {
  currentBook: Book;
};

const FavoriteButton = ({ currentBook }: FavoriteButtonProps) => {
  const { shelfState, shelfDispatch } = useContext(ShelfContext);

  const handleOnFavoritesClick = () => {
    if (shelfState.favorites.every((book) => book.id !== currentBook.id)) {
      console.log("Book not in favorites");
      if (currentBook) {
        shelfDispatch({
          type: SHELF_ACTION.ADD_TO_FAVORITES,
          payload: currentBook,
        });
      } else {
        console.log("Book to add to favorites is undefined");
      }
    } else {
      shelfDispatch({
        type: SHELF_ACTION.REMOVE_FROM_FAVORITES,
        payload: currentBook,
      });
      console.log("book is already favorited");
    }
  };
  return (
    <>
      <Button
        onClick={handleOnFavoritesClick}
        className="bg-transparent focus:bg-transparent"
      >
        <Heart
          fill={`${useIsBookInFavorites(currentBook.id) ? "none" : "red"}`}
          className=" text-primary w-10 h-10"
        />
      </Button>
    </>
  );
};

export default FavoriteButton;
