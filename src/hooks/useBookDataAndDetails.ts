

import {  useEffect, useState } from "react";
import { useFetch } from "./useFetch";

import { WorkFetch } from "@/types/workTypes";
import { TitleSearchResult } from "@/types/searchTypes";
import { Book } from "@/types/bookType";
import { getId } from "@/utils/getId";
import { getImages } from "@/utils/getImages";

export const useBookDataAndDetails = (bookToAdd: TitleSearchResult) : Book | undefined => {
  const [newBook, setNewBook] = useState<Book>();
  const work = useFetch<WorkFetch>({
    urlQuery: `${bookToAdd.key}.json`,
  });

  useEffect(() => {

    if(work){
      const currentBook: Book = {
        id: getId(bookToAdd.key, "/works/"),
        title: bookToAdd.title,
        publish_date: bookToAdd.first_publish_year ? 
        bookToAdd.first_publish_year.toString() :
          "No publish date available",
        number_of_pages: 0,
        author: {
          id: bookToAdd.author_key ?  getId(bookToAdd.author_key[0], "/author/") : "",
          name: bookToAdd.author_name ? bookToAdd.author_name[0] : "No author available",
          image: "noImage.png",
        },
        images: getImages(bookToAdd.cover_i),
        description: work.description ? (typeof work?.description === "string" ? work.description : work.description.value): "No description available",
        subject: work.subjects ? work.subjects.map((subject) => subject): ["no subjects available"],
      };
      setNewBook(currentBook);
      console.log(currentBook);
    }
    
  }, [work]);
 
  return newBook;

};
