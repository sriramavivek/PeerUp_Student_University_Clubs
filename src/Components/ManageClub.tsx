import React from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import NavBar from "./NavBar";
import maleavatar from "../assets/undraw_male-avatar_zkzx.svg"
import EventBlock from "./EventBlock";
import { Link } from "react-router";

export default function ManageClub() {
    const theme = React.useContext(ThemeContext);
    const txtclr = theme.theme === "dark" ? "text-light" : "text-black";
    const bgclr = theme.theme === "dark" ? "bg-black" : "bg-white";
    const borderclr = theme.theme === "dark" ? "border-white" : "border-black";

    return(
        <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
            <div className={`row ${txtclr}`}>
                <NavBar/>
                <div className={`row p-3 p-md-5 p-top-0 mt-3 kode-mono justify-content-center align-items-center text-center ${txtclr}`}>
                    <h1>Manage your club</h1>
                    <div className="row w-100 m-5 p-0">
                        <div className="col-8">
                            <form className="m-2 d-flex flex-column justify-content-center align-items-center">
                                <div className="position-relative" style={{width: 250}}>
                                    <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg" alt="clubicon" width={250} height={250} className="rounded-circle" style={{objectFit:'cover'}}/>
                                    <input type="file" id="profilepic" name="profilepic" accept=".jpg,.jpeg,.png" className="position-absolute opacity-1 start-0 w-100 h-100 bg-transparent opacity-0 cursor-pointer"/>
                                </div>
                                <h1 className="mt-3 fw-bolder">GDSC</h1>
                                <h5 className="mt-3">Google Developer Student Club</h5>
                                <div id="links" className="mt-3 align-self-start text-start">
                                    <h3 className="rubrik">Links,</h3>
                                    <div className="d-flex flex-row gap-3 mt-3 flex-wrap">
                                        <div className="input-group">
                                            <span className="input-group-text" id="whatsappico"><i className="bi bi-whatsapp"></i></span>
                                            <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="whatsapplink" aria-describedby="whatsappico"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text" id="twitterico"><i className="bi bi-twitter-x"></i></span>
                                            <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="twitterlink" aria-describedby="twitterico"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text" id="linkedinico"><i className="bi bi-linkedin"></i></span>
                                            <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="linkedinlink" aria-describedby="linkedinico"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text" id="instagramico"><i className="bi bi-instagram"></i></span>
                                            <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="instagramlink" aria-describedby="instagramico"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text" id="githubico"><i className="bi bi-github"></i></span>
                                            <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="githublink" aria-describedby="githubico"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text" id="discordico"><i className="bi bi-discord"></i></span>
                                            <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="discordlink" aria-describedby="discordico"/>
                                        </div>
                                    </div>
                                </div>
                                <div id="description" className="mt-3 align-self-start text-start">
                                    <h3 className="rubrik">Description,</h3>
                                    <textarea name="description" id="description" cols={30} rows={5} maxLength={500} className={`form-control border border-2 form-control-lg mt-3 col-auto ${bgclr} ${txtclr}`} required></textarea>
                                </div>
                                <div className="justify-content-center align-items-center text-center mt-3">
                                    <button type="submit" className={`btn btn-outline-none p-2 w-auto border-2 mt-3 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Save Changes</button>
                                </div>
                            </form>
                        </div>
                        <div className={`col-4 border-0 border-start ${borderclr}`}>
                            <div className="align-self-start text-start">
                                <h3 className="rubrik">The Team,</h3>
                                <form className="m-2 gap-3 d-flex flex-column justify-content-center align-items-center">
                                    <div className="input-group">
                                        <span className="input-group-text" id="emailico"><i className="bi bi-envelope-fill"></i></span>
                                        <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="email" placeholder="Email" aria-describedby="emailico" required/>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text" id="designationico"><i className="bi bi-person-badge"></i></span>
                                        <input type="text" className={`form-control ${bgclr} ${txtclr}`} aria-label="designation" placeholder="Designation" aria-describedby="designationico" required/>
                                    </div>
                                    <button type="submit" className={`btn btn-outline-none p-2 w-auto border-2 mt-3 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Add Member</button>
                                </form>
                                <div className="overflow-auto mt-5" style={{maxHeight: 500}}>
                                    <div className="d-flex flex-column gap-3 m-2">
                                        <div className={`d-flex flex-row gap-3 justify-content-between align-items-center p-2 rounded ${bgclr} ${txtclr}`}>
                                            <div className="d-flex flex-row gap-3 align-items-center">
                                                <img src={maleavatar} alt="membericon" width={50} height={50} className="rounded-circle" style={{objectFit:'cover'}}/>
                                                <div>
                                                    <h5 className="fw-bolder">John Doe</h5>
                                                    <span className="text-secondary">Designation</span>
                                                </div>
                                            </div>
                                            <button type="button" className={`btn btn-outline-none p-2 w-auto border-2 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Remove</button>
                                        </div>
                                        <div className={`d-flex flex-row gap-3 justify-content-between align-items-center p-2 rounded ${bgclr} ${txtclr}`}>
                                            <div className="d-flex flex-row gap-3 align-items-center">
                                                <img src={maleavatar} alt="membericon" width={50} height={50} className="rounded-circle" style={{objectFit:'cover'}}/>
                                                <div>
                                                    <h5 className="fw-bolder">John Doe</h5>
                                                    <span className="text-secondary">Designation</span>
                                                </div>
                                            </div>
                                            <button type="button" className={`btn btn-outline-none p-2 w-auto border-2 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Remove</button>
                                        </div>
                                        <div className={`d-flex flex-row gap-3 justify-content-between align-items-center p-2 rounded ${bgclr} ${txtclr}`}>
                                            <div className="d-flex flex-row gap-3 align-items-center">
                                                <img src={maleavatar} alt="membericon" width={50} height={50} className="rounded-circle" style={{objectFit:'cover'}}/>
                                                <div>
                                                    <h5 className="fw-bolder">John Doe</h5>
                                                    <span className="text-secondary">Designation</span>
                                                </div>
                                            </div>
                                            <button type="button" className={`btn btn-outline-none p-2 w-auto border-2 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Remove</button>
                                        </div>
                                        <div className={`d-flex flex-row gap-3 justify-content-between align-items-center p-2 rounded ${bgclr} ${txtclr}`}>
                                            <div className="d-flex flex-row gap-3 align-items-center">
                                                <img src={maleavatar} alt="membericon" width={50} height={50} className="rounded-circle" style={{objectFit:'cover'}}/>
                                                <div>
                                                    <h5 className="fw-bolder">John Doe</h5>
                                                    <span className="text-secondary">Designation</span>
                                                </div>
                                            </div>
                                            <button type="button" className={`btn btn-outline-none p-2 w-auto border-2 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Remove</button>
                                        </div>
                                        <div className={`d-flex flex-row gap-3 justify-content-between align-items-center p-2 rounded ${bgclr} ${txtclr}`}>
                                            <div className="d-flex flex-row gap-3 align-items-center">
                                                <img src={maleavatar} alt="membericon" width={50} height={50} className="rounded-circle" style={{objectFit:'cover'}}/>
                                                <div>
                                                    <h5 className="fw-bolder">John Doe</h5>
                                                    <span className="text-secondary">Designation</span>
                                                </div>
                                            </div>
                                            <button type="button" className={`btn btn-outline-none p-2 w-auto border-2 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Remove</button>
                                        </div>
                                        <div className={`d-flex flex-row gap-3 justify-content-between align-items-center p-2 rounded ${bgclr} ${txtclr}`}>
                                            <div className="d-flex flex-row gap-3 align-items-center">
                                                <img src={maleavatar} alt="membericon" width={50} height={50} className="rounded-circle" style={{objectFit:'cover'}}/>
                                                <div>
                                                    <h5 className="fw-bolder">John Doe</h5>
                                                    <span className="text-secondary">Designation</span>
                                                </div>
                                            </div>
                                            <button type="button" className={`btn btn-outline-none p-2 w-auto border-2 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 m-5 p-0">
                        <div className="align-self-start text-start">
                            <h3 className="rubrik">Events,</h3>
                            <div className="mt-3 align-self-end text-end">
                                <Link to={"/event/create"} className={`btn btn-outline-none p-2 w-auto border-2 mt-3 fw-bold ${theme.theme === "dark" ? "bg-white border-white text-black": "bg-black border-black text-white"}`}>Create Event</Link>
                            </div>
                            <div className="d-flex flex-column gap-3 m-2">
                                <div className={`d-flex flex-row gap-3 justify-content-between align-items-center ${bgclr} ${txtclr}`}>
                                    <div className="position-relative">
                                        <EventBlock/>
                                        <div className="position-absolute bottom-0 end-0">
                                            <div className="d-flex flex-row gap-2">
                                                <Link to={"/event/info"} className={`btn btn-outline-none ${txtclr}`}><i className="bi bi-info-square-fill"></i></Link>
                                                <Link to={"/event/edit"} className={`btn btn-outline-none ${txtclr}`}><i className="bi bi-pencil-square"></i></Link>
                                                <button className={`btn btn-outline-none ${txtclr}`}><i className="bi bi-trash3-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}