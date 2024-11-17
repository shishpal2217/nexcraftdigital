"use client";
import React from "react";

function WhyUs() {
  return (
    <section className="services-tab section-padding  our-story">
      <div className="container">
        <div className="row lg-marg" id="tabs">
          <div className="col-lg-4 valign">
            <div className="serv-tab-cont md-mb80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src="/nex/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 valign" style={{ alignItems: "flex-start" }}>
            <div className="serv-tab-link tab-links full-width">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">
                  Your Partner in Growth and Innovation
                </h6>
                <h2>Why Choose Us?</h2>
              </div>
              <div className="row justify-content-start">
                <div className="col-lg-11">
                  <div className="text mb-50">
                    <p>
                      At <strong>NexCraft Digital</strong>, we are dedicated to
                      empowering your business through innovative digital
                      solutions. Our experienced team combines technical
                      expertise with a deep understanding of industry trends to
                      deliver tailored services that drive growth and
                      efficiency. We prioritize collaboration and communication,
                      ensuring your vision is at the forefront of every project.
                      With a commitment to excellence, we leverage the latest
                      technologies and strategies to help you navigate the
                      digital landscape confidently. Choose NexCraft Digital as
                      your trusted partner, and together we will craft the
                      future of your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
