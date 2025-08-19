import React from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import NavBar from "./Components/NavBar";

export default function Event() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";
    const bgclr = mode === "dark" ? "bg-black" : "bg-light";
    return (
        <div className={"container container-fluid min-vh-100 min-vw-100 "+bgclr}>
            <div className="row mb-3">
                <NavBar/>
                <div className={"row p-3 p-md-5 p-top-0 mt-3 kode-mono "+txtclr}>
                    <div className="text-center justify-content-center align-items-center">
                        <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg" alt="eventicon" width={450} height={450} className="rounded-5"/>
                        <h1 className="mt-3 fw-bolder">Gen AI Meetup</h1>
                        <a href="#" className="text-secondary fs-5 text-decoration-none">By GDSC</a>
                    </div>
                    <div className="mt-3 d-flex flex-row gap-3 flex-wrap justify-content-center align-items-center">
                        <span><i className="bi bi-calendar-event"></i>: 25th March 2024</span>
                        <span><i className="bi bi-clock"></i>: 10:00 AM - 12:00 PM</span>
                        <span><i className="bi bi-geo-alt"></i>: Jain University</span>
                        <span>Venue: 002</span>
                    </div>
                    <div className="mt-5">
                        <span className="fs-3 fw-semibold">Description</span>
                        <p className="mt-3 txt-justify lh-lg">Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field. Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field. Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field. Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field.</p>
                    </div>
                </div>
            </div>
            <footer className={"footer mt-auto py-3 fixed-bottom kode-mono "+(mode === "dark" ? "bg-light" : "bg-black")}>
                <div className={"container-fluid d-flex flex-row justify-content-center align-items-center gap-3 "+(mode === "dark" ? "text-dark" : "text-light")}>
                    <div className="flex-grow-1 d-flex flex-row gap-1 fs-6">
                        <span>Gen AI Meetup</span>
                        <span className="border border-2 px-2 border-end-0 border-top-0 border-bottom-0"><i className="bi bi-calendar-event"></i>: 25th March 2024</span>
                        <span className="border border-2 px-2 border-end-0 border-top-0 border-bottom-0"><i className="bi bi-clock"></i>: 10:00 AM - 12:00 PM</span>
                        <span className="border border-2 px-2 border-end-0 border-top-0 border-bottom-0"><i className="bi bi-geo-alt"></i>: Jain University</span>
                        <span className="border border-2 px-2 border-end-0 border-top-0 border-bottom-0">Venue: 003 (Seminal Hall)</span>
                    </div>
                    <div className="justify-content-center align-items-center">
                        <button className={"btn rounded-3 px-5 py-2 fw-bold "+(mode === "dark" ? "btn-outline-dark" : "btn-outline-light")}>RSVP</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}