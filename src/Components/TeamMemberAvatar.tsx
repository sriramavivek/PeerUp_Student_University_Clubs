import React from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import maleavatar from '../assets/undraw_male-avatar_zkzx.svg';
import femaleavatar from '../assets/undraw_female-avatar_7t6k.svg';

export default function TeamMemberAvatar() {
    const theme = React.useContext(ThemeContext);
    const mode = theme.theme;
    const txtclr = mode === "dark" ? "text-light" : "text-dark";

    return(
        <div className={`justify-content-center align-items-center text-center d-inline-block text-decoration-none ${txtclr}`} style={{width: '100px'}}>
            <img src={maleavatar} alt="profilepic" width={50} height={50} className="rounded-circle"/>
            <span className="mt-2 txt-clamp-1">John Doe</span>
            <p className="text-secondary">President</p>
        </div>
    );
}