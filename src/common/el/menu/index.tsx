import { NavLink } from "react-router-dom";

import { ReactComponent as CrossSvg } from "../../../assets/cross.svg";
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
    return (
        <div className="menu-container">
            <div className="menu-opened-container">
                <button className="menu-close-button">
                    <CrossSvg />
                </button>

                <ul className="menu-items">
                    <li className="item">
                        <NavLink to="/">
                            <MainSvg className="icon-svg" />

                            <span className="menu-link-name">Главная</span>
                        </NavLink>
                    </li>

                    <li className="item">
                        <NavLink to="/calendar">
                            <CalendarSvg className="icon-svg" />

                            <span className="menu-link-name">Календарь</span>
                        </NavLink>
                    </li>

                    <li className="item">
                        <NavLink to="/tasks">
                            <NoteSvg className="icon-svg" />

                            <span className="menu-link-name">Список дел</span>
                        </NavLink>
                    </li>

                    <li className="item last-item">
                        <NavLink to="/profile">
                            <UserSvg className="icon-svg" />

                            <span className="menu-link-name">Профиль</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;