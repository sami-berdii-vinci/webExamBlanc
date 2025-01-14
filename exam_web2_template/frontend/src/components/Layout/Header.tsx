import { Link } from "../../types";

interface HeaderProps {
    links: Link[];
}

const Header = ({ links }: HeaderProps) => {
    return (
        <header style={{ width: "100%", height: "50px", display: "flex", alignItems: "center", backgroundColor: "rgb(50, 50, 50)" }}>
            <ul style={{ display: "flex", gap: "20px" }}>
                {links.map((link) => (
                    <li key={link.url} style={{listStyle:"none"}}><a href={link.url} style={{ fontSize: "1.5rem", color: "white", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}>{link.name}</a></li>
                ))}
            </ul>
        </header>
    )
}

export default Header;