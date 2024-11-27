import { Link } from "react-router-dom"
import './navbar.css';

function Navbar() {
    return(
        <nav>
            <Link className="linkDirection" to="/docs">Docs</Link> {/*Link to the champions search page*/}
            <Link className="linkDirection" to="/champions">Champions</Link> {/*Link to the champions search page*/}
            <Link className="linkDirection" to="/">Home</Link> {/*Link to the home page*/}
            
            
        </nav>
    )
}
export default Navbar