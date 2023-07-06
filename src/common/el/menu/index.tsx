import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as MainSvg } from "../../../assets/main.svg";
import { ReactComponent as MainGSvg } from "../../../assets/main-gradient.svg";
import { ReactComponent as CalendarSvg } from "../../../assets/calendar.svg"
import { ReactComponent as CalendarGSvg } from "../../../assets/calendar-gradient.svg"
import { ReactComponent as NoteSvg } from "../../../assets/note.svg"
import { ReactComponent as NoteGSvg } from "../../../assets/note-gradient.svg"
import { ReactComponent as UserSvg } from "../../../assets/user.svg"
import { ReactComponent as UserGSvg } from "../../../assets/user-gradient.svg"

import "./index.css";


const Menu = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const location = useLocation();

    function handleSetIsActive() {
        setIsActive(!isActive);
    }

    return (
        <div className="menu-container">
            <div className="menu-opened-container" style={{ width: isActive ? "300px" : "64px" }}>
                {
                    isActive ?
                        <button
                            className="menu-close-button active"
                            onClick={handleSetIsActive}
                        >
                            <div className="burger-button"></div>
                        </button>
                        :
                        <button
                            className="menu-close-button"
                            onClick={handleSetIsActive}
                        >
                            <div className="burger-button"></div>
                        </button>
                }



                <ul className="menu-items">
                    <li className="item">
                        <NavLink to="/">
                            {
                                location.pathname === "/" ?
                                    <MainGSvg />
                                    :
                                    <MainSvg className="icon-svg" />
                            }

                            <span className="menu-link-name" style={{ display: isActive ? "block" : "none"}}>Главная</span>
                        </NavLink>
                    </li>

                    <li className="item">
                        <NavLink to="/calendar">
                            {
                                location.pathname === "/calendar" ?
                                    <CalendarGSvg />
                                    :
                                    <CalendarSvg className="icon-svg" />
                            }

                            <span className="menu-link-name" style={{ display: isActive ? "block" : "none" }}>Календарь</span>
                        </NavLink>
                    </li>

                    <li className="item">
                        <NavLink to="/tasks">
                            {
                                location.pathname === "/tasks" ?
                                    <NoteGSvg />
                                    :
                                    <NoteSvg className="icon-svg" />
                            }

                            <span className="menu-link-name" style={{ display: isActive ? "block" : "none" }}>Список дел</span>
                        </NavLink>
                    </li>

                    <li className="item last-item">
                        <NavLink to="/profile">
                            {
                                location.pathname === "/profile" ?
                                    <UserGSvg />
                                    :
                                    <UserSvg className="icon-svg" />
                            }

                            <span className="menu-link-name" style={{ display: isActive ? "block" : "none" }}>Профиль</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;