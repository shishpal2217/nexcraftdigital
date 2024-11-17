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
              <h4>Building Digital Solutions for the Future</h4>

              <div>
                <span>
                  At NexCraft Digital , we specialize in crafting innovative, custom
                  digital solutions that drive growth and elevate brands. <br /> Since
                  our founding in 2024, we’ve been committed to helping
                  businesses succeed in the ever-evolving digital landscape,
                  offering services ranging from website development to digital
                  marketing and CRM solutions.
                </span>
              </div>

              <Link href="/contact-us" className="get-started">
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
