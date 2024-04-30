import BookCard from "@/components/ui/BookCard";
import { useFetch } from "@/hooks/useFetch";
import { TitleSearchQueryResult, TitleSearchResult } from "@/types/searchTypes";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SearchResultPageProps = {};

const SearchResultPage = ({}: SearchResultPageProps) => {
  const params = useParams<{ searchParam: string }>();
  const [searchResults, setSearchResults] = useState<TitleSearchResult[]>([]);
  const newParam = params.searchParam?.split(" ").join("+");
  const url = `https://openlibrary.org/search.json?title=${newParam}`;
  const fetchedData = useFetch<TitleSearchQueryResult>({
    url: url,
  });

  useEffect(() => {
    if (fetchedData) {
      setSearchResults(fetchedData.docs);
    }
  });

  console.log("This was the search:", newParam);
  console.log(searchResults);

  return (
    <main className="grid grid-cols-1">
      {searchResults &&
        searchResults.map((result) => {
          return <BookCard key={result.key} searchresult={result} />;
        })}
    </main>
  );
};

export default SearchResultPage;
