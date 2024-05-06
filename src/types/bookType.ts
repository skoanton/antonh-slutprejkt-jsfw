export type Book = {
    id: string;
    title: string;
    publish_date: string;
    number_of_pages: number | string;
    author: Author
    image: string
    description: string,
}

export type Author = {
    id: string,
    name: string,
    image: string,
}