"use client";
import Link from "next/link";

function Header() {
  return (
    <div
      className="header main-header bg-img main-banner-area "
      data-overlay-dark="8"
    >
      <div className="container pt-20">
        <div className="row justify-content-start">
          <div className="col-lg-10">
            <div className="text mb-100">
              <h4>Strategic Innovation for Sustainable Digital Growth</h4>

              <div>
                <span>
                  Welcome to NexCraft Digital, where creativity meets
                  innovation. As a premier Website Development Company, we
                  specialize in delivering cutting-edge Web Development Services
                  designed to help businesses thrive in the ever-evolving
                  digital world. Whether you’re a startup or an established
                  enterprise, our solutions ensure your brand stands out online.
                </span>
              </div>

              <Link href="/contact-us/" className="get-started">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="over-shape">
        <img
          loading="lazy"
          src="/nex/assets/imgs/animate/animate1.png"
          alt=""
        />
        <img
          loading="lazy"
          src="/nex/assets/imgs/animate/animate2.png"
          alt=""
        />
        <img
          loading="lazy"
          src="/nex/assets/imgs/animate/animate3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
