import React from "react";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Contexts/ThemeContext";
import { Link } from "react-router";
import EventBlock from "./Components/EventBlock";
import ClubBlock from "./Components/ClubBlock";

export default function App() {
  const theme = React.useContext(ThemeContext);
  const txtclr = theme.theme === "dark" ? "text-light" : "text-dark";
  const bgclr = theme.theme === "dark" ? "bg-black" : "bg-light";
  const mode = theme.theme;
  return (
    <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
      <div className="row">
        <NavBar/>
        <div className={`row p-3 p-md-5 p-top-0 mt-3 kode-mono ${txtclr}`}>
          <h1>Welcome 👋,</h1>
          <h3 className="rubrik mt-3">Upcoming events,</h3>
          <div id="events" className="row mt-3">
            <EventBlock/>
            <EventBlock/>
            <EventBlock/>
            <div className="row justify-content-center align-items-center text-center mt-3">
              <Link to={"/events"} className={`btn btn-outline-none p-2 w-auto border-2 ${mode === "dark" ? "border-white" : "border-black"} ${txtclr}`}>Show More</Link>
            </div>
          </div>
          <h3 className="rubrik mt-5">Browse Clubs,</h3>
          <div className="mt-3 d-flex flex-row gap-3 flex-wrap" id="clubs">
            <ClubBlock/>
            <ClubBlock/>
            <ClubBlock/>
            <Link to={'/clubs'} className={`text-decoration-none ${txtclr}`}>
              <div className="border border-1 p-2 rounded-3 align-middle d-flex align-items-center justify-content-center fs-4" style={{width: '150px', height: '240px'}}>
                <label className="text-center w-100">View All ...</label>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}