import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/" className="header-title">Organizer</Link>
            <hr />
        </div>
    );
}

export default Header;