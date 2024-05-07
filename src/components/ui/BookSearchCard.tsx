import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { Heart } from "lucide-react";
import { TitleSearchResult } from "@/types/searchTypes";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookImage } from "@/types/bookType";
import { getImages } from "@/utils/getImages";
import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";
import { SHELF_ACTION } from "@/Context/ShelfContext/ShelfReducer";
import { getId } from "@/utils/getId";
import { CurrentWatchBookContext } from "@/Context/BookContext/CurrentWatchBookContext";
import { CURRENT_WATCH_BOOK_ACTION } from "@/Context/BookContext/CurrentWatchBookReducer";
import { useBookDataAndDetails } from "@/hooks/useBookDataAndDetails";

type BookSearchCardProps = {
  bookSearched: TitleSearchResult;
};

const BookSearchCard = ({ bookSearched }: BookSearchCardProps) => {
  const images: BookImage = getImages(bookSearched.cover_i);
  const currentBookId = getId(bookSearched.key, "/works/");
  const { currentWatchBookDispatch } = useContext(CurrentWatchBookContext);
  const { shelfState, shelfDispatch } = useContext(ShelfContext);
  const bookToAdd = useBookDataAndDetails(bookSearched);

  const handleOnClick = () => {
    if (bookToAdd) {
      currentWatchBookDispatch({
        type: CURRENT_WATCH_BOOK_ACTION.ADD,
        payload: bookToAdd,
      });
    } else {
      console.log("Book to add is undefined");
    }
  };
  const handleOnFavoritesClick = () => {
    if (shelfState.favorites.every((book) => book.id !== currentBookId)) {
      console.log("Book not in favorites");
      if (bookToAdd) {
        shelfDispatch({
          type: SHELF_ACTION.ADD_TO_FAVORITES,
          payload: bookToAdd,
        });
      } else {
        console.log("Book to add to favorites is undefined");
      }
    } else {
      console.log("book is already favorited");
    }
  };

  return (
    <>
      {bookSearched && (
        <Card className="flex">
          <Link
            to={`/book/${currentBookId}`}
            key={currentBookId}
            onClick={handleOnClick}
          >
            <CardHeader className="p-2 flex-row items-center gap-2">
              <img
                className="w-32 h-32 object-contain"
                src={images.s}
                alt="Book Cover"
              />
              <div>
                <CardTitle>{bookSearched.title}</CardTitle>
                <CardDescription>{bookSearched.author_name}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-2"></CardContent>
          </Link>
          <CardFooter className="p-0">
            <Button onClick={handleOnFavoritesClick} className="bg-transparent">
              <Heart className="text-primary w-10 h-10" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default BookSearchCard;
