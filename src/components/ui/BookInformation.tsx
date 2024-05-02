import { Work } from "@/types/workTypes";
import { Heart } from "lucide-react";
import { Button } from "./button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./card";

type BookInformationProps = {
  currentBook: Work;
};

const BookInformation = ({ currentBook }: BookInformationProps) => {
  const imageUrl = `https://covers.openlibrary.org/b/ID/${
    currentBook.key.split("/works/")[1]
  }-S.jpg`;

  return (
    <>
      <Card className="flex items-center">
        <CardHeader className="p-2">
          <img
            className="w-32 h-32 object-contain"
            src={imageUrl}
            alt="No picture"
          />
        </CardHeader>
        <CardContent className="flex-grow p-2">
          <CardTitle>{currentBook.title}</CardTitle>
          <CardDescription>{currentBook.authors}</CardDescription>
        </CardContent>
        <CardFooter className="p-0">
          <Button className="bg-transparent">
            <Heart className="text-primary w-10 h-10" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookInformation;
