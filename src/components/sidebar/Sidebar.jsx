import React from "react";
import "./Sidebar.css";
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
    const width = window.innerWidth;

    return (
        <aside className="aside">
            <a href= '#home' className="nav__logo">
                <img src={Logo} alt=' '/>
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <span className="icon-home"></span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                            <span className="icon-user-following"></span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                            <span className="icon-graduation"></span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <span className="icon-layers"></span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                            <span className="icon-note"></span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <span className="icon-bubble"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                &copy; 2024
                </span>
            </div>
        </aside>
    )
}

export default Sidebar