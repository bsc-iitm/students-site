import "./boxicons.css";
import logo from 'assets/images/logo.webp'

const Footer = () => {
  return (
    <section className="footer-dark wf-section">
      <div className="container-15">
        <div className="footer-wrapper">
          <div id="w-node-_942a523e-a6e5-7bc9-628d-711e7b95878c-7b958789" className="footer-block">
            <div className="title-small">quick links</div>
            <a href="/" className="footer-link">Student Portal</a>
            <a href="/" className="footer-link">study.iitm.ac.in</a>
            <a href="/" className="footer-link">iitm.ac.in</a>
            <div className="footer-social-block">
              <a href="/" className="footer-social-link w-inline-block">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg" loading="lazy" alt="Twitter" />
              </a>
              <a href="/" className="footer-social-link w-inline-block">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg" loading="lazy" alt="Linkedin" />
              </a>
              <a href="/" className="footer-social-link w-inline-block">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg" loading="lazy" alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="div-block-20">
            <img src={logo} loading="lazy" alt="logo" className="image-9" />
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright-center">All rights reserved © 2023 IIT Madras BS Students Community</div>
    </section>
  );
};

export default Footer;