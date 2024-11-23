function Slider() {
  return (
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-20">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <span>Online Marketing , </span>
                <span className="ml-10"> Digital Strategies</span>
              </div>
              <h1 className="fz-55 mt-30">
                Free advertising for your online business.
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="date">
                    <span className="opacity-7">Published</span>
                    <h6 className="fz-16">August 6, 2021</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        style={{ backgroundImage: "url(/nex/assets/imgs/blog/b/1.jpg)" }}
      ></div>
    </div>
  );
}

export default Slider;
