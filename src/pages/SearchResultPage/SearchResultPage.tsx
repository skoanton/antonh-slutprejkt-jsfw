import { useFetch } from "@/hooks/useFetch";
import { Doc, SearchResult } from "@/types/searchTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SearchResultPageProps = {};

const SearchResultPage = ({}: SearchResultPageProps) => {
  const params = useParams<{ searchParam: string }>();
  const [searchResults, setSearchResults] = useState<Doc[]>([]);
  const fetchedData = useFetch({ url: params.searchParam! });

  useEffect(() => {
    if (params.searchParam) {
      setSearchResults(fetchedData);
    }
  });

  console.log("This was the search:", params.searchParam);
  console.log(searchResults);

  return (
    <>
      <div>Search Result Page</div>
    </>
  );
};

export default SearchResultPage;
