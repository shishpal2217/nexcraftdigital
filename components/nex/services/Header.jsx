import Link from "next/link";

function Header() {
  return (
    <div
      className="header main-header bg-img about-us-header-custom"
      data-overlay-dark="8"
    >
      <div className="container pt-20">
        <div className="row justify-content-start">
          <div className="col-lg-10">
            <div className="text mb-100">
              <h4>Innovate, Grow, Succeed</h4>
              <div>
                <span>
                  {" "}
                  Explore our comprehensive range of services meticulously designed to drive business growth, enhance online visibility, and develop innovative solutions tailored to meet your unique needs. Discover how we can transform your ideas into reality and empower your business to thrive in today&apos;s competitive landscape.
                </span>
              </div>

              <Link href="/contact-us" className="get-started">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
