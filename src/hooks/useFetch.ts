import { SearchQueryResult, SearchResult } from "@/types/searchTypes";
import { useEffect, useState } from "react";

type useFetchProps = {
    url : string
}

export const useFetch = ({url}:useFetchProps) => {

    const [data,setData] = useState<SearchResult[]>([]);
    useEffect(() => {
        let ignore = false;
        const fetchApi = async() => {
            const BASE_URL = "https://openlibrary.org/search.json?q="
            const fetchUrl =  `${BASE_URL}${url}`;
            try {
                const response = await fetch(fetchUrl);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
    
                const data: SearchQueryResult  =  await response.json();
                
                if(!ignore){
                    console.log("getting data")
                    console.log(data.docs);
                    setData(data.docs);
                }
    
            } catch (error) {
                console.error("Wrong with api fetch",error)
            }
        }
        
        fetchApi();

        return () => {
            ignore = true;
        }

    },[url])

    return data;
}