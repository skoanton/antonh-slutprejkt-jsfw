import { Heart } from "lucide-react";
import { Link, useLinkClickHandler } from "react-router-dom";
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
import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";

type FavoritedCardProps = {
  favoritesPage: boolean;
};

const FavoritedCard = ({ favoritesPage }: FavoritedCardProps) => {
  const { shelfState } = useContext(ShelfContext);

  const handleOnClick = () => {
    console.log("clicked");
  };

  const handleOnFavoritesClick = () => {
    console.log("clicked");
  };

  return (
    <>
      {favoritesPage &&
        shelfState.favorites &&
        shelfState.favorites.map((book) => {
          return (
            <Card className="flex items-center">
              <Link
                to={`/book/${book.id}`}
                key={book.id}
                onClick={handleOnClick}
              >
                <CardHeader className="p-2">
                  <img
                    className="w-32 h-32 object-contain"
                    src={book.images.s}
                    alt="Book Cover"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-2">
                  <CardTitle>{book.title}</CardTitle>
                  <CardDescription>{book.author.name}</CardDescription>
                </CardContent>
              </Link>
              <CardFooter className="p-0">
                <Button
                  onClick={handleOnFavoritesClick}
                  className="bg-transparent"
                >
                  <Heart className="text-primary w-10 h-10" />
                </Button>
              </CardFooter>
            </Card>
          );
        })}
    </>
  );
};

export default FavoritedCard;
