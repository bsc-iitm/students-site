import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

import Layout from "components/Layout";
import CarouselElement from "components/carousel/Carousel";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import { carouselList, mainEvents, execOpenings, support } from "constant/data";
import ScrollFade from "components/container/ScrollFade";
// import { getSECMembers } from "apis/firebase";

const HomePage = () => {
  // window.onload = () => {if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})}}
  // const [sec, setSec] = useState([]);

  // useEffect(() => {
  //   /*eslint no-undef: "off"*/
  //   getSECMembers().then((r=[]) => {
  //     console.log(r)
  //     setSec(r);
  //     console.log(sec)
  //   })
  // }, []);

  // const execOpenings.slice(0, 3) = execOpenings.slice(0, 3)
  var i=0;
  return (
    <Layout>
      <Container bgColor="bg-color-maroon">
        <ScrollFade>
          <CarouselElement list={carouselList} />
        </ScrollFade>
      </Container>

      {/* <ScrollFade>
        <Container bgColor="bg-color-primary font-righteous">
          <ContainerHeader btnText="GOVERNANCE" to="/governance" btnClass="text-color-gold bg-color-maroon">
            <h5 className="m-0">2021-2022</h5>
            <h2 className="m-0">The Executive Council</h2>
          </ContainerHeader>
          <div className="my-3 overflow-auto d-md-none">
            <div className="d-inline-flex">
              {sec.map((member) => {
                return (
                  <div key={member.name} className="card m-2 bg-color-maroon border-0" >
                    <img src={member.img} alt={member.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title text-color-gold">{member.name}</h5>
                      <p className="card-text">{member.role}</p>
                    </div>
                  </div>
                )
              })}
              <Link to={"/governance"} className="my-auto border-0 d-block">
                <div className="bg-color-maroon p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                  <i className="bi bi-chevron-compact-right fs-1" />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-3 d-none d-md-block">
            <div className="row">
              {sec.map((member) => {
                return (
                  <div key={member.name} className="p-2 col-3" >
                    <div className="card border-0 bg-color-maroon">
                      <img src={member.img} alt={member.name} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title text-color-gold">{member.name}</h5>
                        <p className="card-text">{member.role}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </ScrollFade> */}

      <ScrollFade>
        <Container bgColor="bg-color-maroon text-white font-righteous">
          <ContainerHeader btnText="EXPLORE" to="/activities" btnClass="text-white bg-color-gold">
            <h5 className="m-0">GET UPTO DATE ON</h5>
            <h2 className="m-0 text-color-gold">UPCOMING EVENTS</h2>
          </ContainerHeader>
          <div className="overflow-auto my-3 d-md-none">
            <div className="d-inline-flex">
              {mainEvents.map((event) => {
                return (
                  <div key={event.name} className="card m-2 bg-color-maroon w-auto border-0">
                    <img src={event.imgURL} alt={event.name} className="card-img-top" />
                    <div className="card-body">
                      <p className="card-text m-0">{event.date}</p>
                      <h5 className="card-title">{event.name}</h5>
                    </div>
                  </div>
                )
              })}
              <Link to={"/activities"} className="my-auto border-0 d-block d-md-none">
                <div className="bg-color-primary p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                  <i className="bi bi-chevron-compact-right fs-1" />
                </div>
              </Link>
            </div>
          </div>
          <div className="d-none d-md-block my-3">
            <div className="row">
              {mainEvents.map((event) => {
                return (
                  <div key={event.name} className="card p-2 bg-color-maroon col-4 border-0">
                    <img src={event.imgURL} alt={event.name} className="card-img-top" />
                    <div className="card-body">
                      <p className="card-text m-0">{event.date}</p>
                      <h5 className="card-title">{event.name}</h5>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </ScrollFade>

      <ScrollFade>
        <Container bgColor="bg-color-primary font-righteous">
          <ContainerHeader btnText="VIEW MORE" to="/governance#exec-openings" btnClass="text-color-gold bg-color-maroon">
            <h5 className="m-0">DISCOVER NEW</h5>
            <h2 className="m-0">OPPORTUNITIES</h2>
          </ContainerHeader>
          <div className="overflow-auto my-3 d-md-none">
            <div className="d-inline-flex">
              {execOpenings.slice(0, 3).map((opportunity) => {
                i+=1;
                return (
                  <div key={'opp'+i} className="card m-2 w-auto border-0">
                    <img src={"https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"} alt={opportunity.name} className="card-img-top" />
                    <div className="card-body py-1">
                      <p className="card-title m-0 text-center">{opportunity.title}</p>
                    </div>
                  </div>
                )
              })}
              <Link to={"/governance#exec-openings"} className="my-auto border-0 d-block">
                <div className="bg-color-maroon p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                  <i className="bi bi-chevron-compact-right fs-1" />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-3 d-none d-md-block">
            <div className="row">
              {execOpenings.slice(0, 3).map((opportunity) => {
                i+=1;
                return (
                  <div key={'oppp'+i} className="card p-2 border-0 col-4">
                    <img src={"https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"} alt={opportunity.name} className="card-img-top" />
                    <div className="card-body py-1">
                      <p className="card-title m-0 text-center">{opportunity.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </ScrollFade>

      <ScrollFade>
        <Container bgColor="bg-color-maroon text-white font-righteous">
          <ContainerHeader btnText="SUPPORT" to="/services" btnClass="text-white bg-color-gold">
            <h5 className="m-0">WE ARE HERE TO</h5>
            <h2 className="m-0 text-color-gold">SUPPORT YOU</h2>
          </ContainerHeader>
          <div className="overflow-auto my-3 d-md-none">
            <div className="d-inline-flex justify-content-center">
              {support.map((supp) => {
                return (
                  <Link to={supp.to} key={supp.name} className="card m-2 bg-color-maroon w-auto border-0 text-decoration-none">
                    <img src={supp.imgURL} alt={supp.name} className="card-img-top" />
                    <div className="card-body py-1">
                      <p className="card-title m-0 text-center">{supp.name}</p>
                    </div>
                  </Link>
                )
              })}
              <Link to={"/services"} className="my-auto border-0 d-block">
                <div className="bg-color-primary p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                  <i className="bi bi-chevron-compact-right fs-1" />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-3 d-none d-md-block">
            <div className="row">
              {support.map((supp) => {
                return (
                  <Link to={supp.to} key={supp.name} className="card p-2 bg-color-maroon border-0 col-4 text-decoration-none text-white">
                    <img src={supp.imgURL} alt={supp.name} className="card-img-top" />
                    <div className="card-body py-1">
                      <p className="card-title m-0 text-center">{supp.name}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Container>
      </ScrollFade>
    </Layout>
  );
};

export default HomePage;