import LoginForm from "../components/Form/LoginForm";
import Profile from "../components/Profile";

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection:"column", alignItems: "center" }}>
            <h1 style={{ fontSize: "3rem" }}>Home Page</h1>

            {localStorage.getItem("token") ? <Profile /> : <LoginForm />}
        </div>
    )
}

export default HomePage;