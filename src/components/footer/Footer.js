import "./boxicons.css";

const Footer = () => {
  return (
    // <ScrollFade>
      <footer className="bg-color-gold px-lg-5 py-4 font-roboto">
        <div className="mx-lg-5 px-lg-5">
          <div className="d-flex justify-content-center">
            <a href="https://twitter.com/iitm_bsc" target={"_blank"} className="social fs-5" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com/iitmadrasbscdegree/" target={"_blank"} className="social fs-5" rel="noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://instagram.com/iitmadras_bsc?utm_medium=copy_link" target={"_blank"} className="fs-5 social" rel="noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/iit-madras-online-degree-programme" target={"_blank"} className="fs-5 social" rel="noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
            {/* <a href="https://wa.me/message/IVROM2UN7XIJL1" target={"_blank"} className="fs-5 social bx-border-circle" rel="noreferrer">
              <i className="bx bxl-messenger"></i>
            </a> */}
          </div>
          <div className="font-righteous px-2 mt-3 text-white w-100 row">
            <span className="text-start col-6">All rights reserved<br />IITM BSc Students</span>
            <span className="text-end col-6">Crafted with care<br /><a href="mailto:webops@student.onlinedegree.iitm.ac.in" className="text-white" target={"_blank"} rel="noreferrer">WebOps</a></span>
          </div>
        </div>
      </footer>
    // </ScrollFade>
  );
};

export default Footer;