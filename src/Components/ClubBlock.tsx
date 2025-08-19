import React from "react";
import { Link } from "react-router";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function ClubBlock() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    return(
        <Link to={'/club'} className={`text-decoration-none ${mode === "dark" ? "text-light" : "text-dark"}`}>
            <div className="border border-1 border-dark p-2 rounded-3" style={{width: 150, height: 240}}>
                <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg" alt="Event" className="rounded-3 w-100"/>
                <label className="mt-3 fs-5 text-center w-100">GDSC</label>
                <button className={`btn mt-2 w-100 ${mode === "dark" ? "text-dark bg-light" : "text-light bg-dark"}`}>Follow</button>
            </div>
        </Link>
    );
}