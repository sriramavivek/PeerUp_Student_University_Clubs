import React from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import NavBar from "./Components/NavBar";
import maleavatar from "./assets/undraw_male-avatar_zkzx.svg";
import femaleavatar from "./assets/undraw_female-avatar_7t6k.svg";

export default function EditProfile() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";
    const bgclr = mode === "dark" ? "bg-black" : "bg-light";

    return(
        <div className={`container container-fluid min-vh-100 min-vw-100 ${bgclr}`}>
            <div className="row">
                <NavBar/>
                <div className={`row p-3 p-md-5 p-top-0 mt-3 rubrik ${txtclr}`}>
                    <div id="editeprofile">
                        <h1>Edit Profile</h1>
                        <form action="">
                            <div className="d-flex flex-row mt-3 gap-3">
                                <div className="d-flex flex-column gap-2 text-center justify-content-center align-items-center" style={{width: 350, height: 'auto'}}>
                                    <div className="position-relative" style={{width: '250px', height: '250px'}}>
                                        <img src={maleavatar} alt="profilepic" width={250} height={250} className="rounded-circle" style={{objectFit:'cover'}}/>
                                        <input type="file" id="profilepic" name="profilepic" accept=".jpg,.jpeg,.png" className="position-absolute opacity-1 start-0 w-100 h-100 bg-transparent opacity-0 cursor-pointer"/>
                                    </div>
                                    <span className="text-secondary">User of @ XYZ University</span>
                                    <span className="text-secondary">USN</span>
                                </div>
                                <div className="flex-grow-1">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" className={`form-control border border-2 form-control-lg col-auto w-auto ${bgclr} ${txtclr}`} required/>
                                    <label htmlFor="bio" className="mt-3">Bio:</label>
                                    <textarea name="bio" id="bio" cols={30} rows={5} maxLength={400} className={`form-control border border-2 form-control-lg mt-3 col-auto ${bgclr} ${txtclr}`} required></textarea>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center text-center mt-3">
                                <button type="submit" className={`btn btn-outline-none p-2 w-auto border-2 mt-3 ${txtclr} ${mode === "dark" ? "border-white": "border-black"}`}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-5" id="resetpassword">
                        <h1>Reset Password</h1>
                        <form action="" className="mt-3">
                            <div className="d-flex flex-row flex-wrap gap-5">
                                <div>
                                    <label htmlFor="oldpassword">Old Password:</label>
                                    <input type="password" id="oldpassword" maxLength={8} name="oldpassword" className={`form-control border border-2 form-control-lg col-auto w-auto ${bgclr} ${txtclr}`} required/>
                                </div>
                                <div>
                                    <label htmlFor="newpassword">New Password:</label>
                                    <input type="password" id="newpassword" maxLength={8} name="newpassword" className={`form-control border border-2 form-control-lg ${bgclr} ${txtclr}`} required/>
                                </div>
                                <div>
                                    <label htmlFor="confirmpassword">Confirm Password:</label>
                                    <input type="password" id="confirmpassword" maxLength={8} name="confirmpassword" className={`form-control border border-2 form-control-lg ${bgclr} ${txtclr}`} required/>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center text-center mt-3">
                                <button type="submit" className={`btn btn-outline-none p-2 w-auto border-2 mt-3 ${txtclr} ${mode === "dark" ? "border-white" : "border-black"}`}>Reset Password</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-5" id="deleteaccount">
                        <h1>Delete Account</h1>
                        <form action="" className="mt-3 d-flex flex-column gap-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" maxLength={8} name="password" className={`"form-control border border-2 form-control-lg col-auto w-auto ${bgclr} ${txtclr}`} required/>
                            <button type="submit" className={"btn btn-outline-none p-2 w-auto border-2 mt-3 btn-danger"}>Delete Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}