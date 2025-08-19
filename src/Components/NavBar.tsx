import React from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { Link } from "react-router";

export default function NavBar(){
    const theme = React.useContext(ThemeContext);
    const txtclr = theme.theme === "dark" ? "text-light" : "text-black";
    return(
        <div className="row">
            <div className={"navbar navbar-expand-md px-2 px-md-5"}>
                <div className="container-fluid  rubrik">
                    <Link to="/" className={`navbar-brand fs-3 dancing-script fw-bolder ${txtclr}`}>PeerUp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target={theme.theme === "light" ? "#offcanvasNavbar" : "#offcanvasDarkNavbar"} aria-controls={theme.theme === "light" ? "offcanvasNavbar" : "offcanvasDarkNavbar"} aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={`offcanvas offcanvas-end ${theme.theme === "light" ? "bg-white" : "bg-black"}`} tabIndex={-1} id={theme.theme === "light" ? "offcanvasNavbar":"offcanvasDarkNavbar"} aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <h5 className={"offcanvas-title dancing-script fw-bolder "+txtclr} id="offcanvasNavbarLabel">PeerUp</h5>
                        <button type="button" className={`btn-close ${theme.theme === "light" ? "" : "btn-close-white"}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="position-relative offcanvas-body text-center d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                            <form className="d-flex w-50 w-sm-100 me-3" role="search">
                                <input className="form-control border-2 border-black p-2 rounded-2 rounded-end-0" type="search" placeholder="Search events" aria-label="Search" required/>
                                <button className={`btn btn-outline-none border-2 border-start-0 border-black rounded-2 rounded-start-0 ${theme.theme === "light" ? "bg-black text-light" : "bg-white text-black"}`} type="submit"><i className={"bi bi-search"}></i></button>
                            </form>
                            <div className="position-absolute bottom-0 end-0 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-sm-3 mt-3 mt-md-0">
                                <div className="dropdown">
                                    <button className={`btn btn-outline-none border-0 rounded-3 fs-4 dropdown-toggle ${txtclr}`} type="button" id="profiledropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className={`bi bi-person ${txtclr}`}></i>
                                    </button>
                                    <ul className={`dropdown-menu border border-2 ${theme.theme === "light" ? "bg-white dropdown-menu-light" : "bg-black dropdown-menu-dark"}`} aria-labelledby="profiledropdown">
                                        <li><Link to="/profile" className={`dropdown-item ${txtclr}`}>Profile</Link></li>
                                        <li><Link to={""} className={`dropdown-item ${txtclr}`}>Club</Link></li>
                                        <li><Link to={"/manage/club"} className={`dropdown-item ${txtclr}`}>Manage Club</Link></li>
                                        <li><Link to="/logout" className={`dropdown-item ${txtclr}`}>Logout</Link></li>
                                    </ul>
                                </div>
                                <button className={`btn btn-outline-none border-0 rounded-3 fs-4 ${txtclr}`} onClick={() => theme.setTheme(theme.theme === "dark" ? "light" : "dark")}>
                                    {theme.theme === "dark" ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}