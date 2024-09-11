import { FaSearch } from "react-icons/fa"
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className="navigation-bar">
            <div className="row-1">
                <div className="search-bar">
                    <FaSearch />
                </div>
            </div>
            <div className="row-2">carousel</div>
        </nav>
    )
}

export default Navigation