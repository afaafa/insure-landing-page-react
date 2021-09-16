import React from "react";
import ImgSnappyProcess from "../assets/images/icon-snappy-process.svg";
import ImgAffordablePrices from "../assets/images/icon-affordable-prices.svg";
import ImgPeopleFirst from "../assets/images/icon-people-first.svg";

class Main extends React.Component {
    render () {
        return (
            <main>
                <section className="section-1-container">
                    <div className="section-1">
                        <div className="line"></div>
                        <h1>We’re different</h1>
                    </div>
                </section>
                <section className="section-2-container">
                    <div className="section-2">
                        <article>
                            <figure>
                                <img src={ImgSnappyProcess} alt="snappy process"/>
                                <h2>Snappy Process</h2>
                                <p>Our application process can be completed in minutes, not hours.
                                    Don’t get stuck filling in tedious forms.</p>
                            </figure>
                        </article>
                        <article>
                            <figure>
                                <img src={ImgAffordablePrices} alt="affordable prices" />
                                <h2>Affordable Prices</h2>
                                <p>We don’t want you worrying about high monthly costs.
                                    Our prices may be low, but we still offer the best coverage possible.</p>
                            </figure>
                        </article>
                        <article>
                            <figure>
                                <img src={ImgPeopleFirst} alt="people first"/>
                                <h2>People First</h2>
                                <p>Our plans aren’t full of conditions and clauses to prevent payouts.
                                    We make sure you’re covered when you need it.</p>
                            </figure>
                        </article>
                    </div>
                </section>
                <section className="section-3-container">
                    <div className="section-3">
                        <div className="how-we-work">
                            <h1>Find out more about how we work</h1>
                        </div>
                        <div className="btn-how-we-work">
                            <button className="btn">HOW WE WORK</button>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
export default Main;