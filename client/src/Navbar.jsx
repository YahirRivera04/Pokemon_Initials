import { Link, useMatch, useResolvedPath} from "react-router-dom"
import "./Navbar.css";

export default function Navbar(){
    return <nav className="navBar">
        <Link to="/" className="title-page"><img src={require('./images/pokeball.png')} alt="" /></Link>
        <ul>
            <ActiveComponent to="/Kanto">Kanto</ActiveComponent>
            <ActiveComponent to="/Johto">Johto</ActiveComponent>
            <ActiveComponent to="/Hoenn">Hoenn</ActiveComponent>
            <ActiveComponent to="/Sinnoh">Sinnoh</ActiveComponent>
            <ActiveComponent to="/Teselia">Teselia</ActiveComponent>
            <ActiveComponent to="/Kalos">Kalos</ActiveComponent>
            <ActiveComponent to="/Alola">Alola</ActiveComponent>
            <ActiveComponent to="/Galar ">Galar</ActiveComponent>
            <ActiveComponent to="/Paldea ">Paldea</ActiveComponent>
            <ActiveComponent to="/CreatePKMN">Creador-PKMN</ActiveComponent>
        </ul>
        <p className="Texto"> TM</p>
    </nav>
}

function ActiveComponent({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}