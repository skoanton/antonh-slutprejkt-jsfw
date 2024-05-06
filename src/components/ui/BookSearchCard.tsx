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
import { BookContext } from "@/Context/BookContext/BookContext";
import { BOOK_ACTION } from "@/Context/BookContext/BookReducer";
import { Book } from "@/types/bookType";

type BookSearchCardProps = {
  bookSearched: TitleSearchResult;
};

const BookSearchCard = ({ bookSearched }: BookSearchCardProps) => {
  const imageUrl = `https://covers.openlibrary.org/b/ID/${bookSearched.cover_i}-S.jpg`;
  const bookID = bookSearched.key.split("/works/")[1];
  const { bookDispatch } = useContext(BookContext);
  const handleOnClick = () => {
    const currentBook: Book = {
      id: bookID,
      title: bookSearched.title,
      publish_date:
        bookSearched.first_publish_year.toString() ||
        "No publish date available",
      number_of_pages: 0,
      author: {
        id: bookSearched.author_key[0].split("/author/")[1],
        name: bookSearched.author_name[0] || "No author available",
        image: "image link here", // Add empty picture of book
      },
      image: imageUrl,
      description: "no desciprtion available",
    };

    bookDispatch({ type: BOOK_ACTION.ADD, payload: currentBook });
    console.log(bookSearched);
  };

  return (
    <>
      {bookSearched && (
        <Link to={`/book/${bookID}`} key={bookID} onClick={handleOnClick}>
          <Card className="flex items-center">
            <CardHeader className="p-2">
              <img
                className="w-32 h-32 object-contain"
                src={imageUrl}
                alt="No picture"
              />
            </CardHeader>
            <CardContent className="flex-grow p-2">
              <CardTitle>{bookSearched.title}</CardTitle>
              <CardDescription>{bookSearched.author_name}</CardDescription>
            </CardContent>
            <CardFooter className="p-0">
              <Button className="bg-transparent">
                <Heart className="text-primary w-10 h-10" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      )}
    </>
  );
};

export default BookSearchCard;
