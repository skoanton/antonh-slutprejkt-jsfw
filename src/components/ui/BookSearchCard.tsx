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

type BookCardProps = {
  bookSearched: TitleSearchResult;
};

const BookCard = ({ bookSearched }: BookCardProps) => {
  const imageUrl = `https://covers.openlibrary.org/b/ID/${bookSearched.cover_i}-S.jpg`;
  const bookID = bookSearched.key.split("/works/")[1];

  return (
    <>
      {bookSearched && (
        <Link key={bookID} to={`/book/${bookID}`}>
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

export default BookCard;
