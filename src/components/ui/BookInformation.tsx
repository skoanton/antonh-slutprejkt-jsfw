import { Heart } from "lucide-react";
import { Button } from "./button";

import { useContext } from "react";
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

type BookInformationProps = {};

const BookInformation = ({}: BookInformationProps) => {
  const { currentWatchBookState } = useContext(CurrentWatchBookContext);

  return (
    <main>
      {currentWatchBookState && (
        <Card>
          <CardHeader className="flex flex-col items-center">
            <img
              className="w-32 h-52"
              src={currentWatchBookState.book.images.l}
              alt="No picture"
            />
            <div className="flex gap-1 items-center">
              <CardDescription>
                Pages: {currentWatchBookState.book?.number_of_pages}
              </CardDescription>
              <FavoriteButton currentBook={currentWatchBookState.book} />
            </div>
            <CardTitle>{currentWatchBookState.book?.title}</CardTitle>
            <CardDescription>
              <span className="font-bold">Author:</span>{" "}
              {currentWatchBookState.book?.author.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-1"></CardContent>
          <CardContent>
            <p className="overflow-scroll">
              {currentWatchBookState.book?.description}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Add review</Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default BookInformation;
