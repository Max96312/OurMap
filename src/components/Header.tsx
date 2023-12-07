import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
    return (
        <>
            <div className="flex">
                <Link to="/" className="fixed top-0 z-10 bg-slate-50 w-full p-8">
                    Header
                </Link>

                <Login />
            </div>
        </>
    );
}

export default Header;
