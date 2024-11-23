"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

function Intro() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <>
      <section className="page-intro-cerv section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  rest">
              <div className="row justify-content-end rest">
                <div className="col-md-4 rest">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">1.</h2>
                    </div>
                    <h4>Our Mission</h4>
                    <div className="text mt-30">
                      <p>
                        Our journey is defined by a rich tapestry of
                        achievements and values that set us apart.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 rest bord-thin-right ">
                  <div className="img fit-img bord-thin-left">
                    <img src="/nex/assets/imgs/works/3/3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 rest">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">3.</h2>
                    </div>
                    <h4>Why Us?</h4>
                    <div className="text mt-30">
                      <p>
                        Our journey is defined by a rich tapestry of
                        achievements and values that set us apart.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row justify-content-end bord-thin-top rest">
                <div className="col-md-4 rest">
                  <div className="img fit-img">
                    <img src="/nex/assets/imgs/serv-img/1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 rest">
                  <div className="cont bord-thin-left bord-thin-right ">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">2.</h2>
                    </div>
                    <h4>Our Vision</h4>
                    <div className="text mt-30">
                      <p>
                        Our journey is defined by a rich tapestry of
                        achievements and values that set us apart.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 rest">
                  <div className="img fit-img">
                    <img src="/nex/assets/imgs/works/3/2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
