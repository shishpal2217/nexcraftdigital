import Link from "next/link";
import React from "react";

function Process() {
  return (
    <section className="process section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">
            Your Journey to Success, Step by Step
          </h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Our Seamless <span className="fw-200">Process</span>
            </h2>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-3 col-md-6 item md-mb50">
            <div className="icon-img-60 mb-30">
              <img src="/nex/assets/imgs/serv-icons/3.png" alt="" />
            </div>
            <h5 className="mb-15">Discovery</h5>
            <p>
              We assess your unique needs and goals to craft a personalized
              strategy for success.
            </p>
            <div className="o-hidden">
              <Link href="/about-us" className="rmore to-in mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/nex/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item md-mb50">
            <div className="icon-img-60 mb-30">
              <img src="/nex/assets/imgs/serv-icons/4.png" alt="" />
            </div>
            <h5 className="mb-15">Planning</h5>
            <p>
              We develop a comprehensive plan that outlines the project scope,
              timeline, and critical milestones for clarity and focus.
            </p>
            <div className="o-hidden">
              <Link href="/about-us" className="rmore to-in mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/nex/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item sm-mb50">
            <div className="icon-img-60 mb-30">
              <img src="/nex/assets/imgs/serv-icons/5.png" alt="" />
            </div>
            <h5 className="mb-15">Development</h5>
            <p>
              Our team builds effective solutions using cutting-edge
              technologies and industry standards.
            </p>
            <div className="o-hidden">
              <Link href="/about-us" className="rmore to-in mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/nex/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item">
            <div className="icon-img-60 mb-30">
              <img src="/nex/assets/imgs/serv-icons/6.png" alt="" />
            </div>
            <h5 className="mb-15">Launch & Support</h5>
            <p>
              We launch your project and provide ongoing support for continued
              growth and client success.
            </p>
            <div className="o-hidden">
              <Link href="/about-us" className="rmore to-in mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/nex/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
