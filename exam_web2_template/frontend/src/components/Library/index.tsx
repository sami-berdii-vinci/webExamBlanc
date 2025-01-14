import { useEffect, useState } from "react";
import { Book } from "../../types";
import BookCard from "./BookCard";

const Library = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/library/getAllBooks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setBooks(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <h1>Library</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.book_id} style={{ listStyle: "none" }}><BookCard book={book} /></li>
                ))}
            </ul>
        </div>
    )
}

export default Library;