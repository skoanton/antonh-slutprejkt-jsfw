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
import { useContext } from "react";
import { CurrentWatchBookContext } from "@/Context/BookContext/CurrentWatchBookContext";

type BookInformationProps = {};

const BookInformation = ({}: BookInformationProps) => {
  const { currentWatchBookState } = useContext(CurrentWatchBookContext);

  return (
    <>
      {currentWatchBookState && (
        <Card className="flex justify-center items-center flex-col overflow-hidden">
          <CardHeader className="p-2">
            <img src={currentWatchBookState.book.images.m} alt="No picture" />
          </CardHeader>
          <CardContent className="flex items-center ">
            <CardDescription>
              Pages: {currentWatchBookState.book?.number_of_pages}
            </CardDescription>
            <Button className="bg-transparent">
              <Heart className="text-primary w-8  h-8" />
            </Button>
          </CardContent>
          <CardContent className="flex flex-col items-center">
            <CardTitle>{currentWatchBookState.book?.title}</CardTitle>
            <CardDescription>
              <span className="font-bold">Author:</span>{" "}
              {currentWatchBookState.book?.author.name}
            </CardDescription>
          </CardContent>
          <CardContent>
            <p>{currentWatchBookState.book?.description}</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="bg-transparent">
              <Heart className="text-primary w-10 h-10" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default BookInformation;
