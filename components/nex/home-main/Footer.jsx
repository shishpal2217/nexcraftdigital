"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import Link from "next/link";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <footer
      className="clean-footer crev bg-img"
      data-background="/nex/assets/imgs/header/bg1.jpg"
      data-overlay-dark="10"
    >
      <div className="container pb-40 section-padding ontop">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo icon-img-100">
              <Link href="/">
                <img src="/nex/assets/imgs/logo-light.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column">
              <div className="mb-40">
                <h6 className="sub-title mb-30">Address</h6>
                <h5 className="opacity-8">
                  5919 Trussville <br /> Crossings Pkwy, Birmingham
                </h5>
              </div>

              <a href="#0" className="underline">
                <span className="fz-22 main-color">+2 456 (343) 24 45</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <div className="column">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="mb-15">
                  <Link href="/services">Services</Link>
                </li>
                <li className="mb-15">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="mb-15">
                  <Link href="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30">Support</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li className="mb-15">
                  <Link href="/FAQS">FAQS</Link>
                </li>
                <li className="mb-15">
                  <Link href="/terms&condition">Term & Conditions</Link>
                </li>
                <li className="mb-15">
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
          <div>
            <ul className="rest d-flex align-items-center">
              <li className="hover-this cursor-pointer">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <p className="fz-14">
              © 2024 InFolio is Proudly Powered by{" "}
              <span className="underline main-color">
                <a href="https://themeforest.net/user/UiCamp" target="_blank">
                  UiCamp
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
