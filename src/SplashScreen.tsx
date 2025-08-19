import React from "react";
import { areTokensValid } from "./Functionalities/AuthManager";
export default function SplashScreen() {
    React.useEffect(() => {
        const isValid = areTokensValid();
        if (isValid) {
            window.location.href = '/home';
        } else {
            window.location.href = '/login';
        }
    }, []);
    return(
        <div className="container-fluid min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="dancing-script fw-bolder">Peerup</h1>
            <div className="spinner-border m-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}