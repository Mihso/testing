import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavStyle = {
padding: '10px',
text_align: 'center',
border: '1px solid black',
background: 'grey',
color: 'white',

}

const NavLi = {
    margin_left: '10px',
}

const NavL={
    display: "block",
    padding: "8px",
    background_color: "black",
}

const Navbar = () =>{
    return(
        <nav className="NavStyle">
                <NavLink className="NavLi" to="/">Home</NavLink>
                <NavLink className="NavLi" to="/other">Other</NavLink>
        </nav>
    );
}

export default Navbar;