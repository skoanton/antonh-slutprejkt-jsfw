import { BookImage } from "@/types/bookType";

export const getImages = (bookCoverId:number) : BookImage => {
    return {
        s: `https://covers.openlibrary.org/b/ID/${bookCoverId}-S.jpg`,
        m: `https://covers.openlibrary.org/b/ID/${bookCoverId}-M.jpg`,
        l: `https://covers.openlibrary.org/b/ID/${bookCoverId}-L.jpg`
    }

 }