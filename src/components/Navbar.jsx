import "./Navbar.css"
import img1 from "../img/my img.png"
import img2 from "../img/logo.png"
const NavBar = () => {
   
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img className="im1" src={img1} alt="Logo" />
                    <img className="im2" src={img2} alt="Logo" />
                </div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
