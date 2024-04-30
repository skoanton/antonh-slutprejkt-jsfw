import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchResult } from "@/types/searchTypes";
import { Button } from "./button";
import { Heart } from "lucide-react";

type BookCardProps = {
  searchresult: SearchResult;
};

const BookCard = ({ searchresult }: BookCardProps) => {
  return (
    <Card className="flex items-center">
      <CardHeader className="p-2">
        <img src="src/assets/authur.jpg" alt="" />
      </CardHeader>
      <CardContent className="flex-grow p-2">
        <CardTitle>{searchresult.title}</CardTitle>
        <CardDescription>{searchresult.edition_count}</CardDescription>
        <p>Author: {searchresult.author_name}</p>
      </CardContent>
      <CardFooter className="p-0">
        <Button className="bg-transparent">
          <Heart className="text-primary w-10 h-10" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
