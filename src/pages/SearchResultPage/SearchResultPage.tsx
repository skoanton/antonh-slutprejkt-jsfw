import BookCard from "@/components/ui/BookCard";
import { useFetch } from "@/hooks/useFetch";
import { SearchQueryResult, SearchResult } from "@/types/searchTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SearchResultPageProps = {};

const SearchResultPage = ({}: SearchResultPageProps) => {
  const params = useParams<{ searchParam: string }>();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const url = `https://openlibrary.org/search.json?q=${params.searchParam!}`;
  const fetchedData = useFetch<SearchQueryResult>({ url: url });

  useEffect(() => {
    if (fetchedData) {
      setSearchResults(fetchedData.docs);
    }
  });

  console.log("This was the search:", params.searchParam);
  console.log(searchResults);

  return (
    <main className="grid grid-cols-1">
      {searchResults.map((result) => {
        return <BookCard key={result.key} searchresult={result} />;
      })}
    </main>
  );
};

export default SearchResultPage;
