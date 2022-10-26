import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";


const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navBar" >
        <div className="navContainer">
          <Link to="/" style={{color:"white",textDecoration:"none"}}>
            <span className="logo">PappuBooking</span>
          </Link>
           {user ? user.username: <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>}
        </div>
    </div>
  )
}

export default NavBar