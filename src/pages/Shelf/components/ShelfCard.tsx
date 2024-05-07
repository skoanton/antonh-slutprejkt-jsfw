import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      {favoritesPage && (
        <>
          {shelfState.favorites && (
            <>
              <h1 className="text-center text-3xl text-primary-foreground p-2">
                {" "}
                Books: {shelfState.favorites.length}
              </h1>
              {shelfState.favorites.map((book) => (
                <Card className="flex items-center" key={book.id}>
                  <Link to={`/book/${book.id}`} onClick={handleOnClick}>
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
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default FavoritedCard;
