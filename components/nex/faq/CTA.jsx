"use client";
import React from "react";

function CTA() {
  return (
    <section className="img-scale">
      <div className="image" data-overlay-dark="4">
        <div className="img">
          <img
            id="grow"
            src="/nex/assets/imgs/background/10.jpg"
            data-speed="0.2"
            data-lag="0"
            alt=""
          />
        </div>
        <div className="text-u text-center ontop">
          <h4 className="fz-40 fw-600" style={{ textTransform: "none" }}>
            Can’t find your answer? <br /> Contact us—we’re here to help!
          </h4>
          <a className="service-cta" href="#" style={{ textTransform: "none" }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
