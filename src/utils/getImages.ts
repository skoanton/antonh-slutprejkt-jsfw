import { BookImage } from "@/types/bookType";

export const getImages = (bookCoverId:number) : BookImage => {

    if(bookCoverId){
        return {
            s: `https://covers.openlibrary.org/b/ID/${bookCoverId}-S.jpg`,
            m: `https://covers.openlibrary.org/b/ID/${bookCoverId}-M.jpg`,
            l: `https://covers.openlibrary.org/b/ID/${bookCoverId}-L.jpg`
        }
    }

    else {
        return {
            s: `./src/assets/noImage.png`,
            m: `./src/assets/noImage.png`,
            l: `./src/assets/noImage.png`
        }
    }
   

 }