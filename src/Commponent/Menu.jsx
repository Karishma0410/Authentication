import { Link } from "react-router-dom";
function Menu() {
    return <div className="container nav navbar-inverse">
        <ul className="nav nav-tabs">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>


        </ul>
    </div>
}
export default Menu;