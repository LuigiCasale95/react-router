/* Import parte di componenti di navigazione per  ROUTING*/
import { Link, NavLink } from "react-router-dom"

const  Navbar = () => {
    
    
    return (
    <>
    <div className="navBarMod p-1">
        <ul className="d-flex justify-content-center gap-4 p-1">
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/Products" className="nav-link" >Prodotti</NavLink></li>
            <li><NavLink to="/ChiSiamo" className="nav-link" >Chi Siamo</NavLink></li>
        </ul>
    </div>
    </>
    )
}

export default Navbar