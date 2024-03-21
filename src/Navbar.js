import { NavLink } from "react-router-dom";

const NavStyle = {
padding: '10px',
text_align: 'center',
border: '1px solid black',
background: 'grey',

}

const Navbar = () =>{
    return(
        <nav style={NavStyle}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/other">Other</NavLink>
        </nav>
    );
}

export default Navbar;