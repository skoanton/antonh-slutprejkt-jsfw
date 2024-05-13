import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";
import { SHELF_ACTION } from "@/Context/ShelfContext/ShelfReducer";
import { Book } from "@/types/bookType";
import { useContext } from "react";
import { Button } from "./ui/button";
import { BookCheck, Book as BookIcon } from "lucide-react";
import { useToast } from "./ui/use-toast";

type ReadButtonProps = {
  currentBook: Book;
};

const ReadButton = ({ currentBook }: ReadButtonProps) => {
  const { shelfState, shelfDispatch } = useContext(ShelfContext);
  const { toast } = useToast();
  const handleOnClick = () => {
    if (shelfState.readBooks.every((book) => book.id !== currentBook.id)) {
      if (currentBook) {
        shelfDispatch({
          type: SHELF_ACTION.ADD_TO_READ,
          payload: currentBook,
        });
        toast({
          title: "Added to Read",
        });
      } else {
        console.error("Book to add to read is undefined");
      }
    }
  };
  return (
    <>
      <Button
        onClick={handleOnClick}
        className="bg-transparent focus:bg-transparent"
      >
        {shelfState.readBooks.every((book) => book.id !== currentBook.id) ? (
          <>
            <BookIcon className=" text-primary w-10 h-10" />
          </>
        ) : (
          <BookCheck className=" text-primary w-10 h-10" />
        )}
      </Button>
    </>
  );
};

export default ReadButton;
