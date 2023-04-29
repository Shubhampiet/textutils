
import { Link } from "react-router-dom";

export default function Navbar() {

  
    return (
        <nav className="background">
            <navbar>
                <ul>
                    <Link to={'/'}>  <li>Home</li></Link>
                    <Link to={'/About'}> <li>About</li></Link>
                    <Link to={'/Contact'}> <li>Contact</li></Link>
                </ul>
            </navbar>
        </nav>
    )
}