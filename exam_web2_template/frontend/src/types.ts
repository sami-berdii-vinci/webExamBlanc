type Book = {
    book_id: number;
    title: string;
    author: string;
    year: number;
    image?: string;
}

type Link = {
    name: string;
    url: string;
}

export type { Book, Link };