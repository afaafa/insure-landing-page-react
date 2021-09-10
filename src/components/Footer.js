import React from "react";
import { ReactComponent as BgPatternFooterMob } from "../assets/images/bg-pattern-footer-mobile.svg";
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Facebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/images/icon-instagram.svg";

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <section className="section-footer-1">
                    <BgPatternFooterMob />
                    <div className="insure">
                        <Logo className="logo-footer"/>
                        <ul className="social-icon-list">
                            <li><a href="#" target="_blank" title="facebook icon"><Facebook /></a></li>
                            <li><a href="#" target="_blank" title="twitter icon"><Twitter /></a></li>
                            <li><a href="#" target="_blank" title="pinterest icon"><Pinterest /></a></li>
                            <li><a href="#" target="_blank" title="instagram icon"><Instagram /></a></li>
                        </ul>
                    </div>
                    <div className="line"></div>
                </section>
                <section className="section-footer-2">
                    <article>
                        <p>Our company</p>
                        <ul>
                            <li>How we work</li>
                            <li> Why Insure?</li>
                            <li>View plans</li>
                            <li>Reviews</li>
                        </ul>
                    </article>
                    <article>
                        <p>Help me</p>
                        <ul>
                            <li>FAQ</li>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Cookies</li>
                        </ul>
                    </article>
                    <article>
                        <p>Contact</p>
                        <ul>
                            <li>Sales</li>
                            <li>Support</li>
                            <li>Live chat</li>
                        </ul>
                    </article>
                    <article>
                        <p>Others</p>
                        <ul>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Licenses</li>
                        </ul>
                    </article>
                </section>
                <div class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">Fathonah Zuchriyah</a>.
                </div>
            </footer>
        )
    }
}
export default Footer;