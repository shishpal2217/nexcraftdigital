import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <section className="blog-crev section-padding  radius-30 mt-15">
      <div className="container">
        <div className="sec-head text-center mb-80">
        
          <h2>Look at the articles</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg2 md-mb50">
              <div className="img">
                <img src="/light/assets/imgs/blog/c1.jpg" alt="" />
                <div className="tag sub-bg2">
                  <span>Envato</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#222"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#222"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <Link href="/blog-details">30 august 2021</Link>
                </div>
                <h5>
                  <Link href="/blog-details">
                    Creative advertising in our life became a info noise
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg2 md-mb50">
              <div className="img">
                <img src="/light/assets/imgs/blog/c2.jpg" alt="" />
                <div className="tag sub-bg2">
                  <span>Envato</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#222"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#222"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <Link href="/blog-details">30 august 2021</Link>
                </div>
                <h5>
                  <Link href="/blog-details">
                    Creative advertising in our life became a info noise
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg2">
              <div className="img">
                <img src="/light/assets/imgs/blog/c3.jpg" alt="" />
                <div className="tag sub-bg2">
                  <span>Envato</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#222"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#222"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="/light/blog-list">30 august 2021</a>
                </div>
                <h5>
                  <a href="/light/blog-list">
                    We create some things for your success in growth
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
