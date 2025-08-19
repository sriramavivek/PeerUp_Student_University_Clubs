import React from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import NavBar from "./Components/NavBar";
import EventBlock from "./Components/EventBlock";
import TeamMemberAvatar from "./Components/TeamMemberAvatar";

export default function Club() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";
    const bgclr = mode === "dark" ? "bg-black" : "bg-light";
    const borderclr = mode === "dark" ? "border-white" : "border-black";

    return(
        <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
            <div className="row">
                <NavBar/>
                <div className={`row p-3 p-md-5 p-top-0 mt-3 kode-mono ${txtclr}`}>
                    <div className="row w-100 m-0 p-0">
                        <div className="col-8">
                            <div className="m-2 d-flex flex-column justify-content-center align-items-center">
                                <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg" alt="clubicon" width={250} height={250} className="rounded-5"/>
                                <h1 className="mt-3 fw-bolder">GDSC</h1>
                                <h5 className="mt-3">Google Developer Student Club</h5>
                                <div className="mt-3 d-flex flex-row gap-3 flex-wrap justify-content-center align-items-center">
                                    <a href="#" target="_blank" className={`fs-5 border p-1 px-2 rounded-3 text-decoration-none ${txtclr} ${borderclr}`}><i className="bi bi-whatsapp"></i></a>
                                    <a href="#" target="_blank" className={`fs-5 border p-1 px-2 rounded-3 text-decoration-none ${txtclr} ${borderclr}`}><i className="bi bi-twitter-x"></i></a>
                                    <a href="#" target="_blank" className={`fs-5 border p-1 px-2 rounded-3 text-decoration-none ${txtclr} ${borderclr}`}><i className="bi bi-linkedin"></i></a>
                                    <a href="#" target="_blank" className={`fs-5 border p-1 px-2 rounded-3 text-decoration-none ${txtclr} ${borderclr}`}><i className="bi bi-instagram"></i></a>
                                    <a href="#" target="_blank" className={`fs-5 border p-1 px-2 rounded-3 text-decoration-none ${txtclr} ${borderclr}`}><i className="bi bi-github"></i></a>
                                    <a href="#" target="_blank" className={`fs-5 border p-1 px-2 rounded-3 text-decoration-none ${txtclr} ${borderclr}`}><i className="bi bi-discord"></i></a>
                                </div>
                            </div>
                            <span className="fs-3 fw-semibold">Description,</span>
                            <p className="mt-3 txt-justify lh-lg">The Google Developer Student Club (GDSC) is a community of student developers who are passionate about learning and sharing knowledge about Google technologies. The club provides a platform for students to connect, collaborate, and work on real-world projects using Google tools and technologies.</p>
                        </div>
                        <div className="col-4 border-0 border-start">
                            <span className="fs-3 fw-semibold">The Team,</span>
                            <div className="mt-3 d-flex flex-row gap-3 flex-wrap">
                                <TeamMemberAvatar/>
                                <TeamMemberAvatar/>
                                <TeamMemberAvatar/>
                                <TeamMemberAvatar/>
                                <TeamMemberAvatar/>
                                <TeamMemberAvatar/>
                                <TeamMemberAvatar/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <h3 className="rubrik">Events,</h3>
                        <EventBlock/>
                        <EventBlock/>
                        <EventBlock/>
                        <div className="row justify-content-center align-items-center text-center mt-3">
                            <button className={`btn btn-outline-none p-2 w-auto border-2 ${mode === "dark" ? "border-white": "border-black"} ${txtclr}`}>Show More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}