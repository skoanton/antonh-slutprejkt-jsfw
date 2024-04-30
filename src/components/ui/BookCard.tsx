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

type BookCardProps = {
  searchresult: TitleSearchResult;
};

const BookCard = ({ searchresult }: BookCardProps) => {
  const hasEditionKey =
    Array.isArray(searchresult.edition_key) &&
    searchresult.edition_key.length > 0;
  console.log("book: ", hasEditionKey);
  let imageLink = "";
  if (hasEditionKey) {
    imageLink = `https://covers.openlibrary.org/b/olid/${searchresult.edition_key[0]}.jpg`;
  }

  return (
    <Card className="flex items-center">
      <CardHeader className="p-2">
        <img
          className="w-32 h-32 object-contain"
          src={imageLink}
          alt="No picture"
        />
      </CardHeader>
      <CardContent className="flex-grow p-2">
        <CardTitle>{searchresult.title}</CardTitle>
        <CardDescription>{searchresult.author_name}</CardDescription>
        <CardDescription>{searchresult.first_publish_year}</CardDescription>
      </CardContent>
      <CardFooter className="p-0">
        <Button className="bg-transparent">
          <Heart className="text-primary w-10 h-10" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
