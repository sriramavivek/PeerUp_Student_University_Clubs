import React from "react";
import { Link } from "react-router";
import { ThemeContext } from "../Contexts/ThemeContext";


export default function EventBlock() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    return (
        <div className="row border-0 border-bottom-2 border-white">
            <Link to={'/event'} className={`col-12 d-flex flex-row border border-2 border-top-0 border-start-0 border-end-0 p-2 gap-3 text-decoration-none ${mode === "dark" ? "border-white text-light" : "border-black text-dark"}`}>
            <div>
                <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg" alt="Event" className="rounded-3" width={200} height={200}/>
            </div>
            <div className="flex-grow-1">
                <h5>Gen AI Meetup</h5>
                <p className="text-secondary txt-clamp-2">Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field. Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field. Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field. Join us for a meetup on Generative AI and learn about the latest trends and technologies in the field.</p>
                <div className="d-flex flex-column align-items-start">
                <span><i className="bi bi-calendar-event"></i>: 25th March 2024</span>
                <span><i className="bi bi-clock"></i>: 10:00 AM - 12:00 PM</span>
                <span><i className="bi bi-geo-alt"></i>: Jain University</span>
                </div>
            </div>
            </Link>
        </div>
    );
}