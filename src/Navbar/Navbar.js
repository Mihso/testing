import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Butto from "../button/Butto";

const Navbar = () =>{
    return(
        <nav className="NavStyle">
                <NavLink to="/testing"><div className="NavOuter"> <Butto name="Home"></Butto> </div></NavLink>
                <NavLink to="/testing/about"><div className="NavOuter"> <Butto name="About"></Butto> </div></NavLink>
                {/* <NavLink to="/other"><div className="NavOuter"> <Butto name="Other"></Butto> </div></NavLink> */}
                <NavLink to="/testing/projects"><div className="NavOuter"> <Butto name="Projects"></Butto> </div></NavLink>
                <NavLink to="/testing/weather"><div className="NavOuter"> <Butto name="Weather"></Butto> </div></NavLink>
                <NavLink to="/testing/contact"><div className="NavOuter"> <Butto name="Contact"></Butto> </div></NavLink>
        </nav>
    );
}

export default Navbar;