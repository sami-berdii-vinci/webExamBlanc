import Library from "../components/Library";

const LibraryPage = () => {
    return (
        <div>
            {localStorage.getItem("token") ? <Library/> : <p style={{ display:"flex", justifyContent:"center"}}>Can't access library if you are not logged in.</p>}
        </div>
    )
}

export default LibraryPage;