import Layout from "components/Layout";
import Container from "components/Container";
import { events } from "constant/data";
import ScrollFade from "components/container/ScrollFade";
import {Modal} from "react-bootstrap";
import { useState } from "react";

const EventsPage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})}
  const [modal, showModal] = useState(false);
  const [event, setEvent] = useState(false);
  if (window.location.href.split("#")[1]=='event') {
    setEvent(true);
  }
  const closeModal = () => showModal(false)
  const openModal = (eventName, eventDesc, eventDate) => {
    showModal(true);
    setTimeout(() => {
      document.querySelector(".event-name").innerText = eventName;
      document.querySelector(".event-desc").innerText = eventDesc;
      document.querySelector(".event-date").innerText = eventDate;
    }, 100);
  }
  return (
    <Layout>
      <Container bgColor={'bg-color-maroon'}>
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
      </Modal>
    </Layout>
  )
}

export default EventsPage;