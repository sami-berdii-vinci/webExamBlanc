import Router from "express";
import fs from "fs";
import path from "path";
const router = Router();

router.get("/getAllBooks", (_req, res) => {
    const dataPath = path.join(__dirname, "../data/library.json");
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading library data");
            return;
        }
        const books = JSON.parse(data);
        res.json(books);
    });
});

router.get("/getBookById/:id", (req, res) => {
    const dataPath = path.join(__dirname, "../data/library.json");
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading library data");
            return;
        }
        const books = JSON.parse(data);
        const book = books.find((book: { book_id: number; }) => book.book_id === parseInt(req.params.id));
        if (!book) {
            res.status(404).send("Book not found");
            return;
        }
        res.json(book);
    });
});

export default router;