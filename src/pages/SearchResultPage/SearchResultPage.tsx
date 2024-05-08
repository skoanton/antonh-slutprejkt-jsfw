import BookSearchCard from "@/components/ui/BookSearchCard";
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
    <main className="h-[calc(100vh-20rem)] overflow-hidden">
      <ul className="grid grid-cols-1 mx-2 h-full">
        {searchResults &&
          searchResults.map((result, index) => {
            return (
              <li key={index}>
                <BookSearchCard bookSearched={result} />;
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default SearchResultPage;
