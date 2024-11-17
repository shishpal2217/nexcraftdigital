"use client";
import React from "react";

function Faq() {
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
    <section className="faqs section-padding pt-40">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12 valign">
            <div className="full-width">
              <div className="list-serv">
                <div className="accordion bord">
                  <div
                    className="item active mb-15 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>What services does NexCraft Digital offer?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We offer a range of digital solutions, including website
                        development, app development, SEO, digital marketing,
                        and CRM services, all tailored to help your business
                        succeed.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>How does the consultation process work?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Our process starts with a detailed discussion to
                        understand your goals and requirements. From there, we
                        create a custom strategy aligned with your needs.
                      </p>
                    </div>
                  </div>

                  <div className="item wow mb-15 fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>What is the typical project timeline?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Project timelines vary based on scope and complexity.
                        After our initial consultation, we’ll provide an
                        estimated timeline for your specific project.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".7s">
                    <div onClick={openAccordion} className="title">
                      <h6>
                        Do you offer ongoing support after project completion?
                      </h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Yes, we offer various maintenance and support packages
                        to keep your website or application running smoothly.{" "}
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

export default Faq;
