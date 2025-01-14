import { Book } from "../../types"

interface BookCard {
    book: Book
}

const BookCard = ({ book }: BookCard) => {
    const handleClick = () => {
        window.location.href = `/book/${book.book_id}`;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black', borderRadius:"5px",  margin: '10px', paddingBottom: '20px' }}>
            <p>{book.title}</p>
            <button onClick={handleClick} style={{backgroundColor: "rgb(0, 136, 255)", color:"white"}}>Voir plus de détails</button>
        </div>
    )
}

export default BookCard;