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
import FavoriteButton from "@/components/FavoriteButton";
import ReadButton from "@/components/ReadButton";

type FavoritedCardProps = {
  favoritesPage: boolean;
};

const FavoritedCard = ({ favoritesPage }: FavoritedCardProps) => {
  const { shelfState } = useContext(ShelfContext);

  return (
    <>
      {favoritesPage ? (
        <>
          {shelfState.favorites.length > 0 ? (
            <>
              <h1 className="text-center text-3xl text-primary-foreground p-2">
                Books: {shelfState.favorites.length}
              </h1>
              {shelfState.favorites.map((book) => (
                <Card className="flex" key={book.id}>
                  <Link to={`/book/${book.id}`}>
                    <CardHeader className="p-2 flex-row items-center gap-2">
                      <img
                        className="w-32 h-32 object-contain"
                        src={book.images.s}
                        alt="Book Cover"
                      />
                      <div>
                        <CardTitle>{book.title}</CardTitle>
                        <CardDescription>{book.author.name}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-2" />
                  </Link>
                  <CardFooter className="p-0 ml-auto">
                    <FavoriteButton currentBook={book} />
                  </CardFooter>
                </Card>
              ))}
            </>
          ) : (
            <div className="text-center">No favorites</div>
          )}
        </>
      ) : (
        <>
          {shelfState.readBooks.length > 0 ? (
            <>
              <h1 className="text-center text-3xl text-primary-foreground p-2">
                Pages: {1000}
              </h1>
              {shelfState.readBooks.map((book) => (
                <Card className="flex" key={book.id}>
                  <Link to={`/book/${book.id}`}>
                    <CardHeader className="p-2 flex-row items-center gap-2">
                      <img
                        className="w-32 h-32 object-contain"
                        src={book.images.s}
                        alt="Book Cover"
                      />
                      <div>
                        <CardTitle>{book.title}</CardTitle>
                        <CardDescription>{book.author.name}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-2" />
                  </Link>
                  <CardFooter className="p-0 ml-auto">
                    <ReadButton currentBook={book} />
                  </CardFooter>
                </Card>
              ))}
            </>
          ) : (
            <div className="text-center">No books read yet</div>
          )}
        </>
      )}
    </>
  );
};

export default FavoritedCard;
