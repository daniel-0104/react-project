import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar(){
    return(
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-link">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourite" className="nav-link">Favourite</Link>
            </div>
        </div>
    );
}
export default NavBar;