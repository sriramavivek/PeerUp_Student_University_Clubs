import React from "react";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Contexts/ThemeContext";
import EventImg from "./assets/undraw_events_0w4f.svg";

export default function EditEvent(){
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
                    <h1 className="mt-3 fw-bolder">Update Event</h1>
                    <form action="">
                        <div className="d-flex flex-row mt-3 gap-3">
                            <div className="position-relative" style={{width: '250px', height: '250px'}}>
                                <img src={EventImg} alt="eventpic" width={250} height={250} className="rounded-5" style={{objectFit:'cover'}}/>
                                <input type="file" id="eventpic" name="eventpic" accept=".jpg,.jpeg,.png" className="position-absolute start-0 w-100 h-100 bg-transparent opacity-0 cursor-pointer"/>
                            </div>
                            <div className="flex-grow-1">
                                <label htmlFor="eventname">Event Name:</label>
                                <input type="text" id="eventname" name="eventname" className={`form-control border border-2 form-control-lg col-auto w-auto ${bgclr} ${txtclr}`} required/>
                                <div className="d-flex flex-row flex-wrap gap-3 mt-3">
                                    <div className="input-group w-auto">
                                        <span className="input-group-text" id="startdateico"><i className="bi bi-calendar-event">Start</i></span>
                                        <input type="datetime-local" className={`form-control ${bgclr} ${txtclr}`} aria-label="startdate" name="startdate" aria-describedby="startdateico" required/>
                                    </div>
                                    <div className="input-group w-auto">
                                        <span className="input-group-text" id="enddateico"><i className="bi bi-calendar-event"> End</i></span>
                                        <input type="datetime-local" className={`form-control ${bgclr} ${txtclr}`} aria-label="enddate" name="enddate" aria-describedby="endadateico" required/>
                                    </div>
                                    <div className="input-group w-auto">
                                        <span className="input-group-text" id="venueico"><i>Venue</i></span>
                                        <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="venue" name="venue" aria-describedby="venueico" required/>
                                    </div>
                                    <div>
                                        <div className="input-group w-auto">
                                            <span className="input-group-text" id="rsvpico"><i>RSVP Limit</i></span>
                                            <input type="number" className={`form-control ${bgclr} ${txtclr}`} aria-label="rsvplimit" name="rsvplimit" aria-describedby="rsvpico" required/>
                                        </div>
                                        <div className={`form-text ${txtclr}`}>Enter 0 to allow unlimited RSVPs</div>
                                    </div>
                                </div>
                                <label htmlFor="description" className="mt-3">Description:</label>
                                <textarea name="description" id="description" cols={30} rows={5} maxLength={400} className={`form-control border border-2 form-control-lg mt-3 col-auto ${bgclr} ${txtclr}`} required></textarea>
                            </div>
                        </div>
                        <div className="align-self-center text-center mt-3">
                            <button type="submit" className={`btn btn-outline-none ${txtclr} ${borderclr}`}>Update Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}