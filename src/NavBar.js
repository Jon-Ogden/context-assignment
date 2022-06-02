import {Link, Outlet} from "react-router-dom"

export default function NavBar() {
    return(
        <div className="app-container">
            <div className="navbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/About">About</Link>
                <Link className="link" to="/Users">Users</Link>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="footer">
                <p>@2022 gamerz only, Inc</p>
            </div>
        </div>
    )
}