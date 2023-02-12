import "./boxicons.css";
import logo from 'assets/images/logo.webp'

const Footer = () => {
  return (
    <section class="footer-dark wf-section">
      <div class="container-15">
        <div class="footer-wrapper">
          <div id="w-node-_942a523e-a6e5-7bc9-628d-711e7b95878c-7b958789" class="footer-block">
            <div class="title-small">quick links</div>
            <a href="#" class="footer-link">Student Portal</a>
            <a href="#" class="footer-link">study.iitm.ac.in</a>
            <a href="#" class="footer-link">iitm.ac.in</a>
            <div class="footer-social-block">
              <a href="#" class="footer-social-link w-inline-block">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg" loading="lazy" alt="Twitter" />
              </a>
              <a href="#" class="footer-social-link w-inline-block">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg" loading="lazy" alt="Linkedin" />
              </a>
              <a href="#" class="footer-social-link w-inline-block">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg" loading="lazy" alt="Facebook" />
              </a>
            </div>
          </div>
          <div class="div-block-20">
            <img src={logo} loading="lazy" alt="logo" class="image-9" />
          </div>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-copyright-center">All rights reserved © 2023 IIT Madras BS Students Community</div>
    </section>
  );
};

export default Footer;