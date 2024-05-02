export type FullBook = {
    id: string,
    title: string;
    author: Author;
    description?: string,
    imageS: string,
    imageM: string,
    imageL: string,
    pages: number,
    rating: number;
    releaseDate: string,
}

export type Author = {
    id: string,
    imagesS: string[],
    imagesM: string[],
    imagesL: string[],
    name: string,
    description?: string,
}