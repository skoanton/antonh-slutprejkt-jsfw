import { ShelfContext } from "@/Context/ShelfContext/ShelfContext";
import { SHELF_ACTION } from "@/Context/ShelfContext/ShelfReducer";
import { Book } from "@/types/bookType";
import { useContext } from "react";
import { Button } from "./ui/button";
import { Book as BookIcon } from "lucide-react";

type ReadButtonProps = {
  currentBook: Book;
};

const ReadButton = ({ currentBook }: ReadButtonProps) => {
  const { shelfState, shelfDispatch } = useContext(ShelfContext);

  const handleOnClick = () => {
    if (shelfState.readBooks.every((book) => book.id !== currentBook.id)) {
      console.log("Book not in read");
      if (currentBook) {
        shelfDispatch({
          type: SHELF_ACTION.ADD_TO_READ,
          payload: currentBook,
        });
      } else {
        console.log("Book to add to read is undefined");
      }
    } else {
      shelfDispatch({
        type: SHELF_ACTION.REMOVE_FROM_READ,
        payload: currentBook,
      });
      console.log("book is already read");
    }
  };
  return (
    <>
      <Button
        onClick={handleOnClick}
        className="bg-transparent focus:bg-transparent"
      >
        <BookIcon className=" text-primary w-10 h-10" />
      </Button>
    </>
  );
};

export default ReadButton;
