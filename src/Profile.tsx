import React from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import NavBar from "./Components/NavBar";
import maleavatar from "./assets/undraw_male-avatar_zkzx.svg";
import femaleavatar from "./assets/undraw_female-avatar_7t6k.svg";
import Following from "./Components/Following";
import UpcomingEvents from "./Components/UpcomingEvents";
import AttendedEvents from "./Components/AttendedEvents";
import { Link } from "react-router";

export default function Profile(){
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";
    const bgclr = mode === "dark" ? "bg-black" : "bg-light";
    const [active, setActive] = React.useState(0);
    return(
        <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
            <div className="row">
                <NavBar/>
                <div className={`row p-3 p-md-5 p-top-0 mt-3 kode-mono ${txtclr}`}>
                    <div>
                        <div className="position-relative" style={{width: '250px', height: '250px'}}>
                            <img src={maleavatar} alt="profilepic" width={250} height={250} className="rounded-circle"/>
                            <Link to={"/profile/edit"} className={`fs-1 position-absolute bottom-0 end-0 text-decoration-none ${bgclr} ${txtclr}`}><i className="bi bi-pencil-square"></i></Link>
                        </div>
                        <h1 className="mt-3 fw-semibold">John Doe</h1>
                        <span className="text-secondary">Student @ XYZ University</span>
                    </div>
                    <p className="mt-3 lh-lg">I am a student at XYZ University, pursuing a degree in Computer Science. I am passionate about technology and love to learn new things. I am also a member of the Google Developer Student Club.</p>
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button className={`nav-link ${txtclr}`+(active === 0 ? " active border-bottom-0 "+bgclr:"")} onClick={()=>setActive(0)}>Following</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${txtclr}`+(active === 1 ? " active border-bottom-0 "+bgclr:"")} onClick={()=>setActive(1)}>Registered Events</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${txtclr}`+(active === 2 ? " active border-bottom-0 "+bgclr:"")} onClick={()=>setActive(2)}>Attended Events</button>
                            </li>
                        </ul>
                        {active === 0 ? <Following/> : active === 1 ? <UpcomingEvents/> : <AttendedEvents/>}
                    </div>
                </div>
            </div>
        </div>
    );
}