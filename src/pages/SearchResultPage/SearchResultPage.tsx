import BookCard from "@/components/ui/BookSearchCard";
import { useFetch } from "@/hooks/useFetch";
import { TitleSearchQueryResult, TitleSearchResult } from "@/types/searchTypes";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type SearchResultPageProps = {};

const SearchResultPage = ({}: SearchResultPageProps) => {
  const params = useParams<{ searchParam: string }>();
  const [searchResults, setSearchResults] = useState<TitleSearchResult[]>([]);
  const newParam = params.searchParam?.split(" ").join("+");
  const url = `/search.json?title=${newParam}`;
  const fetchedData = useFetch<TitleSearchQueryResult>({
    urlQuery: url,
  });

  useEffect(() => {
    if (fetchedData) {
      console.log(fetchedData.docs);
      setSearchResults(fetchedData.docs);
    }
  });

  return (
    <main className="grid grid-cols-1 gap-2 mx-2">
      {searchResults &&
        searchResults.map((result, index) => {
          return <BookCard key={index} bookSearched={result} />;
        })}
    </main>
  );
};

export default SearchResultPage;
