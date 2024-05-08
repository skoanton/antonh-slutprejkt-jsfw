import { useContext, useEffect, useState } from "react";
import { CurrentWatchBookContext } from "@/Context/BookContext/CurrentWatchBookContext";
import FavoriteButton from "../FavoriteButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import ReadButton from "../ReadButton";
import ReviewForm from "@/pages/Shelf/components/ReviewForm";
import { Book } from "@/types/bookType";
import { useLocation, useParams } from "react-router-dom";
import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";

type BookInformationProps = {};

const BookInformation = ({}: BookInformationProps) => {
  const { currentWatchBookState } = useContext(CurrentWatchBookContext);
  const { shelfState } = useContext(ShelfContext);
  const [currentBook, setCurrentBook] = useState<Book>();
  const params = useParams<{ bookId: string }>();
  const location = useLocation();
  const { from } = location.state;
  console.log("Current book review", shelfState.review);
  useEffect(() => {
    if (from === "favorites") {
      setCurrentBook(
        shelfState.favorites.find((favorite) => favorite.id === params.bookId)
      );
    } else if (from === "readBooks") {
      setCurrentBook(
        shelfState.readBooks.find((favorite) => favorite.id === params.bookId)
      );
    } else if (from === "") {
      setCurrentBook(currentWatchBookState.book);
    }
  }, [from]);

  return (
    <main className="h-[calc(100vh-10rem)] overflow-scroll">
      {currentBook && (
        <Card>
          <CardHeader className="flex flex-col items-center">
            <img
              className="w-32 h-52"
              src={currentBook.images.l}
              alt="No picture"
            />
            <div className="flex gap-1 items-center justify-center">
              <FavoriteButton currentBook={currentBook} />
              <ReadButton currentBook={currentBook} />
            </div>
            <CardTitle>{currentBook.title}</CardTitle>
            <CardDescription>
              <span className="font-bold">Author:</span>{" "}
              {currentBook.author.name}
            </CardDescription>
            <CardDescription>
              Pages: {currentBook.number_of_pages}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-1"></CardContent>
          <CardContent>
            <p className="overflow-scroll">{currentBook.description}</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <ReviewForm />
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default BookInformation;
