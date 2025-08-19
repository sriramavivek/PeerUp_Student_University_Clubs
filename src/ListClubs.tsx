import React from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import NavBar from "./Components/NavBar";
import ClubBlock from "./Components/ClubBlock";

export default function ListClubs() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";
    const bgclr = mode === "dark" ? "bg-black" : "bg-light";
    return (
        <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
            <div className="row">
                <NavBar/>
                <div className={`row p-3 p-md-5 p-top-0 mt-3 kode-mono ${txtclr}`}>
                    <h1>Browse Clubs,</h1>
                    <div className="mt-3 d-flex flex-row gap-5 flex-wrap" id="clubs">
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                        <ClubBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
}