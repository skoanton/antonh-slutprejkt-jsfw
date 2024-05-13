import { useEffect, useState } from "react";

type useFetchProps = {
    urlQuery: string,
}

export const useFetch = <T> ({urlQuery}:useFetchProps) => {
    const BASE_URL = "https://openlibrary.org"
    const fetchUrl = `${BASE_URL}${urlQuery}`
    const [isLoading, setIsLoading] = useState(true);
    const [data,setData] = useState<T>();
    useEffect(() => {
        let ignore = false;
        const fetchApi = async() => {
            setIsLoading(true);
            try {
                const response = await fetch(fetchUrl);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
    
                const data: T  =  await response.json();
                
                if(!ignore){
            
                    setIsLoading(false);
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

    },[urlQuery])

    return {data,isLoading};
}