import React from "react";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Contexts/ThemeContext";
import EventBlock from "./Components/EventBlock";

export default function Events() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";
    const bgclr = mode === "dark" ? "bg-black" : "bg-light";
    return(
        <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
            <div className="row">
                <NavBar/>
                <div className={`row p-3 p-md-5 p-top-0 mt-3 kode-mono ${txtclr}`}>
                    <h1>Events,</h1>
                    <div className="row mt-3" id="events">
                        <EventBlock/>
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