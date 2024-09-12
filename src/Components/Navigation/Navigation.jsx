import { FaSearch } from "react-icons/fa"
import logo from "/logo-splash-512x512.png"
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className="navigation-bar">
            <div className="row-1">
                <img src={logo} />
            </div>
            <div className="row-2">
                <div className="search-bar">
                    <FaSearch />
                    <p>Search for Accomodation</p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation