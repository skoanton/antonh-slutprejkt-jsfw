

export const fetchApi  = async (url:string) => {
    const BASE_URL = "https://openlibrary.org/search.json?q=hejsan"
    const fetchUrl =  `${BASE_URL}${url}`;
    try {

        const response = await fetch(fetchUrl);

        if(!response.ok){
            throw new Error("Failed to fetch API");§
            
        }
        const data = await response.json();
       
        return data;

    } catch (error) {
        console.error("Something went wrong", error);
    }
    return null;
}