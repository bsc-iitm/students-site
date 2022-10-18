import { Link } from "react-router-dom";
import Container from "components/Container";
import Layout from "components/Layout";
import {Modal} from "react-bootstrap";
import { clubs, events } from "constant/data";
import ScrollFade from "components/container/ScrollFade";

import EventsImage from 'assets/images/activities/events.webp';
import ClubsImage from 'assets/images/activities/clubs.webp'

const ActivitiesPage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})}
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <ScrollFade>
          <h1 className="font-righteous text-center text-color-gold text-uppercase">Student Activities</h1>
        </ScrollFade>
      </Container>

      <Container>
        <ScrollFade>
          <div className="row">
            <Link to="/activities/events" className="col-12 col-md-6 text-decoration-none">
              <div className="card border-0 bg-color-maroon">
                <img src={EventsImage} alt="events" className="card-img-top" />
                <div className="card-body">
                  <h2 className="text-center">Events</h2>
                </div>
              </div>
            </Link>
            <Link to="/activities/clubs" className="col-12 col-md-6 text-decoration-none">
              <div className="card border-0 bg-color-maroon">
                <img src={ClubsImage} alt="events" className="card-img-top" />
                <div className="card-body">
                  <h2 className="text-center">Clubs</h2>
                </div>
              </div>
            </Link>
          </div>
        </ScrollFade>
      </Container>

      {/* <ScrollFade>
        <Container>
          <div className="row">
            {reqEvents.map((event) => {
              return (
                <div key={event.name} id={event.name} className="col-3">
                  <div className="card border-0 bg-color-maroon">
                    <img src={event.imgURL} alt={event.name} className="card-img-top" />
                    <div className="card-body">
                      <p className="card-text m-0">{event.date}</p>
                      <h5 className="card-title">{event.name}</h5>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </ScrollFade> */}

    </Layout>
  );
}

export default ActivitiesPage;