import React from "react";
import ImageIntro from '../assets/images/image-intro-desktop.jpg';
import ImageIntroMob from '../assets/images/image-intro-mobile.jpg';
import BgPatternIntroLeft from '../assets/images/bg-pattern-intro-left-desktop.svg';
import BgPatternIntroLeftMob from '../assets/images/bg-pattern-intro-left-mobile.svg';
import BgPatternIntroRight from '../assets/images/bg-pattern-intro-right-desktop.svg';
import BgPatternIntroRightMob from '../assets/images/bg-pattern-intro-right-mobile.svg';

class HeaderHero extends React.Component {
    render () {
        return (
            <div className="hero-container">
                <img src={BgPatternIntroLeftMob} className="pattern-intro-mob-left" alt="pattern intro mobile" />
                <img src={BgPatternIntroLeft} className="pattern-intro-left" alt="pattern intro left" />
                <div className="hero">
                    <img src={ImageIntroMob} className="img-intro-mob" alt="intro mobile" />
                    <div className="intro">
                        <div className="line-hero"></div>
                        <h1>Humanizing your insurance.</h1>
                        <p>Get your life insurance coverage easier and faster.
                            We blend our expertise and technology to help you find the plan that’s right for you.
                            Ensure you and your loved ones are protected.</p>
                        <button className="btn btn-view-plan-hero">VIEW PLANS</button>
                    </div>
                    <img src={ImageIntro} className="img-intro" alt="intro dekstop" />
                </div>
                <img src={BgPatternIntroRightMob} className="pattern-intro-mob-right" alt="pattern intro mobile" />
                <img src={BgPatternIntroRight} className="pattern-intro-right" alt="pattern intro right" />
            </div>
        )
    }
}
export default HeaderHero;