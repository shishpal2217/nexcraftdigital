function Header() {
  return (
    <div
      className="header page-header bg-img section-padding"
      data-overlay-dark="9"
      style={{ backgroundImage: "url(/nex/assets/imgs/header/bg1.jpg)" }}
    >
      <div className="container pt-100">
        <div className="text-center">
          <h4>Insights & Expertise</h4>
          <div className="mt-15">
            <span>Explore our collection of articles covering industry trends, tips, and best practices. <br />Our insights aim to empower your business and keep you informed on the latest in digital solutions.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
