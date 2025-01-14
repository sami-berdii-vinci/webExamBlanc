import { useEffect, useState } from "react";
import { Book } from "../types";
import { useParams } from "react-router-dom";
import cover from "../assets/cover.jpg";

const bookPage = () => {
    const [book, setBook] = useState<Book | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/library/getBookById/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setBook(data);
            })
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{book?.title}</h1>
            <h2>{book?.author}</h2>
            <h3>{book?.year}</h3>
            <img src={cover} alt="Book cover" />
        </div>
    );
}

export default bookPage;