export type Book = {
    id: string;
    title: string;
    publish_date: string;
    number_of_pages: number | string;
    author: Author
    images: BookImage,
    description: string,
    subject: string[],
    review?: Review
}

export type Author = {
    id: string,
    name: string,
    image: string,
}

export type BookImage = {
    s: string,
    m: string,
    l: string,
}

export type Review = {
    id: string,
    text: string,
    pages: number,
    rating: number;
}