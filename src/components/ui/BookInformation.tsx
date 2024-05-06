import { WorkFetch } from "@/types/workTypes";
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
import { BookContext } from "@/Context/BookContext/BookContext";
import { useFetch } from "@/hooks/useFetch";

type BookInformationProps = {};

const BookInformation = ({}: BookInformationProps) => {
  const { bookState } = useContext(BookContext);
  const work = useFetch<WorkFetch>({
    urlQuery: `/works/${bookState.book?.id}`,
  });

  return (
    <main className="">
      {bookState && (
        <Card className="flex justify-center items-center flex-col">
          <CardHeader className="p-2">
            <img
              className="w-32 h-32 object-contain"
              src={bookState.book?.image}
              alt="No picture"
            />
          </CardHeader>
          <CardContent className="flex-grow p-2">
            <CardTitle>{bookState.book?.title}</CardTitle>
            <CardDescription>{bookState.book?.author.name}</CardDescription>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="bg-transparent">
              <Heart className="text-primary w-10 h-10" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default BookInformation;
