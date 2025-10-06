/* Import parte di componenti di navigazione per  ROUTING*/
import { Link, NavLink } from "react-router-dom"

const  Navbar = () => {
    
    
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Products" className="nav-link" >Prodotti</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ChiSiamo" className="nav-link" >Chi Siamo</NavLink>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar