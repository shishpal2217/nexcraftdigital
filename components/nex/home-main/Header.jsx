import Link from "next/link";

function Header() {
  return (
    <div className="header main-header bg-img" data-overlay-dark="8">
      <div className="container pt-20">
        <div className="row justify-content-start">
          <div className="col-lg-10">
            <div className="text mb-100">
              <h4>Transforming Your Business with Digital Solutions</h4>

              <div>
                <span>
                  {" "}
                  At NexCraft Digital, we excel in creating tailored, innovative
                  digital solutions that foster growth and enhance brand
                  visibility. Since our establishment in 2024, we have dedicated
                  ourselves to empowering businesses to thrive in the rapidly
                  changing digital landscape. Our comprehensive range of
                  services includes website development, software solutions,
                  digital marketing, and effective CRM strategies designed to
                  meet your unique business needs.
                </span>
              </div>

              <Link href="/contact-us/" className="get-started">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
