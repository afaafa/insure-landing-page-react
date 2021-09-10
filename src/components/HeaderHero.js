import React from "react";
import ImageIntroMob from '../assets/images/image-intro-mobile.jpg';
import BgPatternIntroLeftMob from '../assets/images/bg-pattern-intro-left-mobile.svg';
import BgPatternIntroRightMob from '../assets/images/bg-pattern-intro-right-mobile.svg';

class HeaderHero extends React.Component {
    render () {
        return (
            <div className="hero">
                <img src={ImageIntroMob} className="img-intro-mob" alt="image intro mobile" />
                <img src={BgPatternIntroLeftMob} className="pattern-intro-mob-left" alt="pattern intro mobile" />
                <div className="intro">
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster.
                        We blend our expertise and technology to help you find the plan that’s right for you.
                        Ensure you and your loved ones are protected.</p>
                    <button className="btn btn-view-plan-hero">VIEW PLANS</button>
                </div>
                <img src={BgPatternIntroRightMob} className="pattern-intro-mob-right" alt="pattern intro mobile" />
            </div>
        )
    }
}
export default HeaderHero;