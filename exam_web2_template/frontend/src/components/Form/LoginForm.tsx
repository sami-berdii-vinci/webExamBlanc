const LoginForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            username: formData.get("username"),
            password: formData.get("password")
        };
        fetch("http://localhost:3000/auths/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", data.username);
                window.location.reload();
            })
            .catch(error => console.error(error));
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" required />
            <button type="submit" style={{ backgroundColor: "rgb(0, 136, 255)", color: "white" }}>Log in</button>
        </form>
    );
}

export default LoginForm;