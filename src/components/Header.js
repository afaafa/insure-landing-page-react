import React from "react";
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

class Header extends React.Component {
    render () {
        return (
            <header>
                <nav className="navbar">
                    <img src={logo} alt="logo" />
                    <button className="icon-hamburger">
                        <img src={hamburger} alt="icon hamburger" />
                    </button>
                    <div className="nav-drawer">
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#" title="how we work">HOW WE WORK</a></li>
                            <li className="nav-item"><a href="#" title="blog">BLOG</a></li>
                            <li className="nav-item"><a href="#" title="account">ACCOUNT</a></li>
                        </ul>
                        <button className="btn btn-view-plan">VIEW PLANS</button>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;