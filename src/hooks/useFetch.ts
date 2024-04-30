import { SearchQueryResult, SearchResult } from "@/types/searchTypes";
import { useEffect, useState } from "react";

type useFetchProps = {
    url: string,
}

export const useFetch = <T> ({url}:useFetchProps) => {

    const [data,setData] = useState<T>();
    useEffect(() => {
        let ignore = false;
        const fetchApi = async() => {

            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
    
                const data: T  =  await response.json();
                
                if(!ignore){
                    console.log("getting data")
                    console.log(data);
                    setData(data);
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