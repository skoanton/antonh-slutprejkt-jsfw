import BookCard from "@/components/ui/BookCard";
import { useParams } from "react-router-dom";

type BookPageProps = {};

const BookPage = ({}: BookPageProps) => {
  const params = useParams<{ bookId: string }>();
  console.log(params.bookId);

  return (
    <>
      <BookCard />
    </>
  );
};

export default BookPage;
