import { ShelfContext } from "@/Context/ShelfContext/ShelfContext"
import { useContext } from "react"

export const useIsBookInFavorites = (currentBookId: string):boolean => {

    const {shelfState} = useContext(ShelfContext);

    return shelfState.favorites.every((book) => book.id !== currentBookId)


}