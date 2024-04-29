export const fetchApi  = async () => {
    const testUrl = "https://openlibrary.org/search.json?q=&limit=2";
    try {

        const response = await fetch(testUrl);

        if(!response.ok){
            throw new Error("Failed to fetch API");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Something went wrong", error);
    }
    return null;
}