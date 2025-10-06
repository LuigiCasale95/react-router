/* Import parte di componenti di navigazione per  ROUTING*/
import { Link, NavLink } from "react-router-dom"

const  Navbar = () => {
    
    
    return (
    <>
    <div className="navBarMod">
        <ul className="d-flex justify-content-center gap-4 p-1">
            <li><a><NavLink to="/" className="nav-link">Home</NavLink></a></li>
            <li><a><NavLink to="/Products" className="nav-link" >Prodotti</NavLink> </a></li>
            <li><a><NavLink to="/ChiSiamo" className="nav-link" >Chi Siamo</NavLink> </a></li>
        </ul>
    </div>
    </>
    )
}

export default Navbar