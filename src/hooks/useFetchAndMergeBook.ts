import { BookFetch } from "@/types/bookType";
import { FullBook } from "@/types/fullBookType";
import { TitleSearchResult } from "@/types/searchTypes";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Work } from "@/types/workTypes";
import { AuthorFetch } from "@/types/fetchTypes";

export const useFetchAndMergeBooks = (bookResult: TitleSearchResult) => {
  const [book, setBook] = useState<FullBook>();
  const fetchedBook = useFetch<BookFetch>({
    urlQuery: `${bookResult.seed[0]}.json`,
  });

  const fetchedWork = useFetch<Work>({
    urlQuery: `${bookResult.key}.json`,
  });
  const authorUrl = bookResult.author_key ? `/authors/${bookResult.author_key[0]}.json` : null;
    const fetchedAuthor = useFetch<AuthorFetch>({
        urlQuery: authorUrl,
  });
 
  useEffect(() => {
    if (fetchedBook && fetchedWork && fetchedAuthor) {
      const fullBookInformation: FullBook = {
        id: fetchedBook.key,
        description: fetchedWork.description
          ? fetchedWork.description
          : "No Description avaialable",
        author: {
          id: fetchedAuthor.key,
          imagesS: fetchedAuthor.photos
            ? fetchedAuthor.photos.map(
                (photo) => `https://covers.openlibrary.org/a/ID/${photo}-S.jpg`
              )
            : [],
          imagesM: fetchedAuthor.photos
            ? fetchedAuthor.photos.map(
                (photo) => `https://covers.openlibrary.org/a/ID/${photo}-M.jpg`
              )
            : [],
          imagesL: fetchedAuthor.photos
            ? fetchedAuthor.photos.map(
                (photo) => `https://covers.openlibrary.org/a/ID/${photo}-L.jpg`
              )
            : [],
          name: fetchedAuthor.name,
          description: fetchedAuthor.bio ? fetchedAuthor.bio : "",
        },
        title: fetchedBook.title,
        imageS: fetchedBook.lccn
        ? `https://covers.openlibrary.org/b/lccn/${fetchedBook.lccn[0]}-S.jpg`
        : fetchedBook.oscl_numbers
        ? `https://covers.openlibrary.org/b/oscl/${fetchedBook.oscl_numbers[0]}-S.jpg`
        : fetchedBook.isbn_13
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn_13[0]}-S.jpg`
        : fetchedBook.isbn_10
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn_10[0]}-S.jpg`
        : fetchedBook.isbn
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn[0]}-S.jpg`
        : "",
imageM: fetchedBook.lccn
        ? `https://covers.openlibrary.org/b/lccn/${fetchedBook.lccn[0]}-M.jpg`
        : fetchedBook.oscl_numbers
        ? `https://covers.openlibrary.org/b/oscl/${fetchedBook.oscl_numbers[0]}-M.jpg`
        : fetchedBook.isbn_13
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn_13[0]}-M.jpg`
        : fetchedBook.isbn_10
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn_10[0]}-M.jpg`
        : fetchedBook.isbn
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn[0]}-M.jpg`
        : "",
imageL: fetchedBook.lccn
        ? `https://covers.openlibrary.org/b/lccn/${fetchedBook.lccn[0]}-L.jpg`
        : fetchedBook.oscl_numbers
        ? `https://covers.openlibrary.org/b/oscl/${fetchedBook.oscl_numbers[0]}-L.jpg`
        : fetchedBook.isbn_13
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn_13[0]}-L.jpg`
        : fetchedBook.isbn_10
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn_10[0]}-L.jpg`
        : fetchedBook.isbn
        ? `https://covers.openlibrary.org/b/isbn/${fetchedBook.isbn[0]}-L.jpg`
        : "",
        pages: fetchedBook.number_of_pages,
        rating: 0,
        releaseDate: fetchedWork.first_publish_date ? fetchedWork.first_publish_date : "No release date avaliable",
      };
      setBook(fullBookInformation);
      console.log("done fetching");
    } else {
      console.log("Data is missing");
    }
  }, [fetchedBook, fetchedWork, fetchedAuthor]);

  return book;
};
