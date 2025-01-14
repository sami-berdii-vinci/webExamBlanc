import { Outlet } from "react-router-dom";
import { Link } from "../../types";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    links: Link[];
    student: string;
}

const Layout = ({links, student}: LayoutProps) => {
    return (
        <div>
            <Header links={links}/>
            <Outlet/>
            <Footer student={student}/>
        </div>
    )
}

export default Layout;