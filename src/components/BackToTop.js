import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset>300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    }, [])
  })
  const scrollToTop = () => window.scrollTo({top: 0, behaviour:"smooth"})
  const style = {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    display: 'flex',
    justifyContent: 'center'
  }
  return <>{showTopBtn && (<div className="btn bg-color-maroon text-color-gold fw-bold p-0 fs-4" style={style} onClick={scrollToTop}><i className="bi bi-arrow-up m-auto"></i></div>)}</>
}

export default BackToTop;