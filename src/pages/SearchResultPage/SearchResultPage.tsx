import Spinner from "@/components/Spinner";
import BookSearchCard from "@/components/ui/BookSearchCard";
import { useFetch } from "@/hooks/useFetch";
import { TitleSearchQueryResult, TitleSearchResult } from "@/types/searchTypes";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoSearchResult from "./components/NoSearchResult";
type SearchResultPageProps = {};

const SearchResultPage = ({}: SearchResultPageProps) => {
  const params = useParams<{ searchParam: string }>();
  const [searchResults, setSearchResults] = useState<TitleSearchResult[]>([]);
  const newParam = params.searchParam?.split(" ").join("+");
  const url = `/search.json?title=${newParam}`;
  const { data, isLoading } = useFetch<TitleSearchQueryResult>({
    urlQuery: url,
  });

  useEffect(() => {
    if (data) {
      setSearchResults(data.docs);
    }
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="h-[calc(100vh-10rem)] overflow-scroll">
      <ul className="grid grid-cols-1 mx-2 h-full">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((result, index) => {
            return (
              <li key={index}>
                <BookSearchCard bookSearched={result} />;
              </li>
            );
          })
        ) : (
          <NoSearchResult />
        )}
      </ul>
    </main>
  );
};

export default SearchResultPage;
