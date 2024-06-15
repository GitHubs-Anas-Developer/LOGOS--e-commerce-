import React from "react";
import "./Footer.css"; // Import your custom CSS file

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container-fluid p-4 pb-0">
        <section>
          <form>
            <div className="row justify-content-center">
             
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example26"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <label className="form-label" htmlFor="form5Example26">
                 
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary mb-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          LOGOS.com
        </a>
        <h6>developed by: anasfsdeveloper@gmail.com</h6>
      </div>
    </footer>
  );
}

export default Footer;
