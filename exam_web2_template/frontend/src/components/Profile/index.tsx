const Profile = () => {
    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.reload();
    }

    return (
        <div>
            <p>Welcome, {localStorage.getItem("username")}</p>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default Profile;