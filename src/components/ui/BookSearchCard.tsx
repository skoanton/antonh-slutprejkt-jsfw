import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TitleSearchResult } from "@/types/searchTypes";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookImage } from "@/types/bookType";
import { getImages } from "@/utils/getImages";
import { getId } from "@/utils/getId";
import { CurrentWatchBookContext } from "@/Context/BookContext/CurrentWatchBookContext";
import { CURRENT_WATCH_BOOK_ACTION } from "@/Context/BookContext/CurrentWatchBookReducer";
import { useBookDataAndDetails } from "@/hooks/useBookDataAndDetails";
import FavoriteButton from "../FavoriteButton";

type BookSearchCardProps = {
  bookSearched: TitleSearchResult;
};

const BookSearchCard = ({ bookSearched }: BookSearchCardProps) => {
  const images: BookImage = getImages(bookSearched.cover_i);
  const currentBookId = getId(bookSearched.key, "/works/");
  const { currentWatchBookDispatch } = useContext(CurrentWatchBookContext);
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

  return (
    <>
      {bookSearched && (
        <Card className="flex">
          <Link
            to={`/book/${currentBookId}`}
            key={currentBookId}
            onClick={handleOnClick}
            state={{ from: "" }}
          >
            <CardHeader className="flex-row items-center">
              <img
                className="w-32 h-32 object-contain"
                src={images.l}
                alt="Book Cover"
              />
              <div>
                <CardTitle>{bookSearched.title}</CardTitle>
                <CardDescription>{bookSearched.author_name}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-2"></CardContent>
          </Link>
          <CardFooter className="p-0 ml-auto">
            {bookToAdd && <FavoriteButton currentBook={bookToAdd} />}
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default BookSearchCard;
