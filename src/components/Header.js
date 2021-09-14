import React, { useState } from "react";
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as IconHumberger } from '../assets/images/icon-hamburger.svg';
import { ReactComponent as IconClose } from '../assets/images/icon-close.svg';
import { ReactComponent as BgPatternMobNav } from '../assets/images/bg-pattern-mobile-nav.svg';
import HeaderHero from "./HeaderHero";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

        return (
            <header>
                <div className="navbar-container">
                    <nav className="navbar">
                        <Logo className="logo" />
                        <div className="mobile-menu" onClick={handleClick}>
                            { click ? (
                                <IconClose className="icon-menu" />
                            ) : (
                                <IconHumberger className="icon-menu" />
                            )
                            }
                        </div>
                        <ul className={click ? "nav-list active" : "nav-list"}>
                            <li className="nav-item"><a href="/#" title="how we work">HOW WE WORK</a></li>
                            <li className="nav-item"><a href="/#" title="blog">BLOG</a></li>
                            <li className="nav-item"><a href="/#" title="account">ACCOUNT</a></li>
                            <li className="nav-item">
                                <button className="btn btn-view-plan">VIEW PLANS</button>
                            </li>
                            <li className="nav-item"><BgPatternMobNav className="bg-pattern-mob-nav"/></li>
                        </ul>
                    </nav>
                </div>
                <HeaderHero />
            </header>
        )
}

export default Header;