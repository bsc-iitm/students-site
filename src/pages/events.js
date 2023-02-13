import Layout from "components/Layout";
// import Container from "components/Container";
// import { events } from "constant/data";
// import ScrollFade from "components/container/ScrollFade";
// import {Modal} from "react-bootstrap";
// import { useState } from "react";
import { ScrollSlideLeft, ScrollSlideRight } from "components/container/ScrollSlide";

const EventsPage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})}
  // const [modal, showModal] = useState(false);
  // const [event, setEvent] = useState(false);
  // if (window.location.href.split("#")[1]==='event') {
  //   setEvent(true);
  // }
  // const closeModal = () => showModal(false)
  // const openModal = (eventName, eventDesc, eventDate) => {
  //   showModal(true);
  //   setTimeout(() => {
  //     document.querySelector(".event-name").innerText = eventName;
  //     document.querySelector(".event-desc").innerText = eventDesc;
  //     document.querySelector(".event-date").innerText = eventDate;
  //   }, 100);
  // }
  return (
    <Layout>
      
      <div className="section-13 wf-section">
        <div className="hero-wrapper-two">
          <h1 className="heading">Events</h1>
        </div>
      </div>
      <div className="track wf-section">
        <div data-w-id="99921bf1-cf11-7097-7706-8582b7ed6e30" className="div-block-23">
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49a099689f7060f0921f1_WhatsApp%20Image%202023-02-01%20at%2021.25.52.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 600px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49a099689f7060f0921f1_WhatsApp%20Image%202023-02-01%20at%2021.25.52-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49a099689f7060f0921f1_WhatsApp%20Image%202023-02-01%20at%2021.25.52.jpg 720w" alt="diplomacia" className="image-11" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 282.5px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57.jpg 904w" alt="republica" className="image-12" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 400px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed.jpg 1080w" alt="paint the pixels" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 282.75px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002.jpg 1587w" alt="how to go about heritage" className="image-13" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a297f470fc542f755989_unnamed.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 400px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a297f470fc542f755989_unnamed-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a297f470fc542f755989_unnamed-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a297f470fc542f755989_unnamed-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a297f470fc542f755989_unnamed.jpg 1280w" alt="post modern computation" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49a099689f7060f0921f1_WhatsApp%20Image%202023-02-01%20at%2021.25.52.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 600px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49a099689f7060f0921f1_WhatsApp%20Image%202023-02-01%20at%2021.25.52-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49a099689f7060f0921f1_WhatsApp%20Image%202023-02-01%20at%2021.25.52.jpg 720w" alt="diplomacia" className="image-11" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 282.5px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49add8b5a9c2dc449fcc9_WhatsApp%20Image%202023-01-23%20at%2020.05.57.jpg 904w" alt="republica" className="image-12" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 400px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e4a2c6cc75570ec2373882_unnamed.jpg 1080w" alt="paint the pixels" />
          <img src="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, 282.75px" srcSet="https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002-p-500.jpg 500w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002-p-800.jpg 800w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e49cf4cde96a3244926924_3_20230208_152307_0002.jpg 1587w" alt="how to go about heritage" className="image-13" />
        </div>
      </div>
      <div className="section-13 wf-section">
        <div className="container-22 w-container">
          <div className="wf-section">
            <h1 className="sub-heading">Oncampus Gatherings</h1>
          </div>
          <div className="hero-wrapper-5 wrapper-reverse">
            <div data-w-id="353b6c83-3d32-9f8a-ee5f-2d75418e9b35" className="hero-split-5">
              <ScrollSlideRight>
                <h1 className="sub-heading">Paradox</h1>
                <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.</p>
                <a href="/" className="f-button-secondary w-button">Learn More</a>
              </ScrollSlideRight>
            </div>
            <div className="hero-split-5">
              <ScrollSlideLeft>
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a2a3312aae1_placeholder%203.svg" loading="lazy" data-w-id="353b6c83-3d32-9f8a-ee5f-2d75418e9b3d" alt="" className="shadow-two-5" />
              </ScrollSlideLeft>
            </div>
          </div>
          <div className="hero-wrapper-5">
            <div className="hero-split-5">
              <ScrollSlideRight>
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg" loading="lazy" data-w-id="ea2f6e45-1bf7-225a-4b77-aa86c5300bc4" alt="" className="shadow-two-5" />
                </ScrollSlideRight>
            </div>
            <div data-w-id="53f24398-73d1-76e4-abbc-d8e1470b2f14" className="hero-split-5">
              <ScrollSlideLeft>
                <h1 className="sub-heading">Margazhi in Paradox</h1>
                <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.</p>
                <a href="/" className="f-button-secondary w-button">Learn More</a>
              </ScrollSlideLeft>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* <Container bgColor={'bg-color-maroon'}>
        <ScrollFade>
          <h1 className="font-righteous text-center text-color-gold text-uppercase">Events</h1>
        </ScrollFade>
      </Container>
      <Container>
        <ScrollFade>
          <div className="row justify-content-center">
            {events.map((event) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 p-0" id={event.name.replace(" ", "-").toLowerCase()} key={"event"+events.indexOf(event)}>
                  <div className="card m-2 bg-color-maroon border-0" onClick={()=>openModal(event.name, event.desc, event.date)} style={{cursor:'pointer'}}>
                    <img src={event.imgURL} alt={event.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title font-righteous text-color-gold">{event.name}</h5>
                      <p className="card-text m-0 space-around-wrap">{event.date}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollFade>
      </Container>
      <Modal show={modal} onHide={closeModal} centered>
        <Modal.Header className="bg-color-maroon text-color-gold" closeButton>
          <Modal.Title>
            <h4 className="event-name"></h4>
            <h6 className="event-date"></h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="event-desc"></Modal.Body>
      </Modal> */}
    </Layout>
  )
}

export default EventsPage;