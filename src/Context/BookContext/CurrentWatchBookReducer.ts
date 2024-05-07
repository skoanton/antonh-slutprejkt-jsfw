import { Book } from "@/types/bookType";
import { CurrentWatchBookActions } from "./CurrentWatchBookContext";


export enum CURRENT_WATCH_BOOK_ACTION  {
    ADD =  "ADD",
    REMOVE  =  "REMOVE",
    ADD_DESCRIPTION = "ADD_DESCRIPTION",
    ADD_SUBJECTS = "ADD_SUBJECTS"

}

export type currentWatchBookState = {
    book: Book
}

export const initialCurrentWatchBookState: currentWatchBookState = {
    book: {
        id: "",
        title: "No Title available",
        publish_date: "No publish date available",
        number_of_pages: "No pages numbers available",
        author: {
          id: "",
          name: "No author available",
          image: "noImage.png",
        },
        images: {
            s: "noImage.png",
            m: "noImage.png",
            l: "noImage.png"
        },
        description: "No description available",
        subject: ["no subjects available"]

    },
}

export const currentWatchBookReducer = (currentWatchbookState: currentWatchBookState,action: CurrentWatchBookActions, ) :currentWatchBookState => {

    switch (action.type) {
        case CURRENT_WATCH_BOOK_ACTION.ADD:
            
        return {...currentWatchbookState, book: action.payload};
        
        case CURRENT_WATCH_BOOK_ACTION.REMOVE:
            return {...currentWatchbookState, book: initialCurrentWatchBookState.book};
        case CURRENT_WATCH_BOOK_ACTION.ADD_DESCRIPTION:
            if(currentWatchbookState.book){
                const updatedBook = {
                    ...currentWatchbookState.book,
                        description: action.payload,
                }
                return {...currentWatchbookState, book: updatedBook};
            }
            return currentWatchbookState;
        case CURRENT_WATCH_BOOK_ACTION.ADD_SUBJECTS:
            if(currentWatchbookState.book){
                const updatedBook = {
                    ...currentWatchbookState.book,
                        subjects: action.payload,
                }
                return {...currentWatchbookState, book: updatedBook};
            }
            return currentWatchbookState;
        default:
            return currentWatchbookState;
            
    }
}
