import { NavLink } from "react-router-dom";

export default function Menu(){
    const claseActiva = 'active';
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" activeClassName={claseActiva}>React Peliculas</NavLink>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/generos" activeClassName={claseActiva} className="nav-link">Generos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}