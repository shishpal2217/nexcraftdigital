"use client";
import React from "react";

function FAQS() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <section className="faqs section-padding pt-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h3>Frequently asked questions</h3>
              </div>
              <div className="list-serv">
                <div className="accordion bord">
                  <div
                    className="item active mb-15 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>What technologies do you use for web development?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We utilize a variety of technologies, including HTML,
                        CSS, JavaScript, PHP, and popular frameworks like React
                        and WordPress, tailored to your project needs.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>How long does it take to develop a website?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        The timeline varies based on project complexity.
                        Typically, it takes 4-12 weeks from consultation to
                        launch.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>
                        Do you provide ongoing support after the website is
                        launched?
                      </h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Yes, we offer various maintenance and support packages
                        to ensure your website runs smoothly.
                      </p>
                    </div>
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

export default FAQS;
