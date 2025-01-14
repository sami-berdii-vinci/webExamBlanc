interface FooterProps {
    student: string;
}

const Footer = ({ student }: FooterProps) => {
    return <footer style={{ position: "fixed", bottom: 0, width: "100%", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(50, 50, 50)", color: "rgb(200, 200, 200)", fontSize: "1.2rem" }}>Examen de {student}</footer>;
}

export default Footer;