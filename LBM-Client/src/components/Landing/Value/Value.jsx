import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Value.scss";
// import mobile from "./assets/mobile.svg";
import personimage from "./assets/personhouse.svg"

export default function Value() {
  return (
    <main className="value_items">
      <section className="value_section">
        <Slide direction={"left"} triggerOnce={"true"}>
          <div className="value_image">
            <img src={personimage} />
          </div>
        </Slide>
        <Slide direction={"right"} triggerOnce={"true"}>
          <div className="value_text">
            {/* <div className="value-text_item">
              <h2>Real Estate & Technology</h2>
              <p>
                Libertum Project allows for everyone to take part in the global US$ 369 Trillion real estate market. <br></br><br></br> 
                Join us as we disrupt the real estate market and revolutionize the future of property investment and ownership. <br></br><br></br>
                We break down the barriers to make it simple, affordable and accessible for everyone to be able to realize the 
                benefits of investing in real estate. <br></br><br></br>
                Libertum Project creates a fundamental shift in the future of real estate investment and ownership, we empower 
                individuals to start building a property portfolio that earns a passive income. <br></br><br></br>
                Powered by the $LBM Token, our blockchain based platform enables fractional ownership of properties which can be 
                easily bought, sold or traded; reducing entry barriers and equally providing liquidity. <br></br><br></br>
                We empower our community with the knowledge, tools and DeFi solutions to 
                benefit from real estate investment opportunities that have previously only been available to institutional and 
                high net worth investors
              </p>
            </div> */}
            <div className="value-text_item">
              <h2>Our True Value</h2>
                <p>
                  Is that we are the gateway to real estate opportunities for everyone, everywhere, and at any time.Our mission of <span> Transforming an Exclusive Market into an Inclusive Opportunity </span> will be achieved by lowering barriers of entry and by increasing liquidity for property owners and investors.
                </p>
                <p>               
                  By <span> simplifying the process </span>of real estate investment, we  open up opportunities that were previously unattainable to most.
                </p>
            </div>
          </div>
        </Slide>
      </section>
    </main>
  );
}
