import { Link } from "react-router-dom";
import Layout from "components/Layout";
import CarouselElement from "components/carousel/Carousel";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import { carouselList, mainEvents, execOpenings, support } from "constant/data";
import ScrollFade from "components/container/ScrollFade";
import { ScrollSlideLeft, ScrollSlideRight } from "components/container/ScrollSlide";

const HomePage = () => {
  return (
    <Layout>
      <Container bgColor="bg-color-maroon">
        <ScrollFade>
          <CarouselElement list={carouselList} />
        </ScrollFade>
      </Container>
      {/* <Container bgColor="bg-color-maroon text-white font-righteous">
        <ScrollFade>
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
      </ScrollFade>
      </Container> */}
      <ScrollFade>
        <div class="wf-section">
          <div data-w-id="41cc8478-8cea-ae1b-5117-5cebe8ef1cdf" className="container-12 w-container">
            <h1 class="heading-9">Join one of the largest student communities in the world</h1>
            <p class="paragraph-13">Yes you heard it right</p>
          </div>
        </div>
      </ScrollFade>
      
      <div class="section-11 wf-section">
        <div data-w-id="7fe52c97-846b-1f97-10a3-8d58b27f3a91" class="container-12 w-container">
          <ScrollFade>
            <div class="div-block-17 mb-3">
              <h1 class="heading-8">Meet the 12 Houses</h1>
              <a data-w-id="7c874e39-a7f0-bc20-ad59-2465e7db51ea" href="/governance" class="button-3 w-button">Governance &gt;</a>
            </div>
            <p class="paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <a href="/governance" class="button-4 w-button">Governance &gt;</a>
          </ScrollFade>
        </div>
      </div>
      <div class="wf-section">
        <div class="container-14 pt-3 w-container">
          <div data-w-id="92fef6b1-6986-df38-9df1-01688724ae70" class="div-block-18">
            <ScrollSlideRight>
              <h1 class="heading-9">Societies</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <a href="/societies" class="link">Learn More &gt;</a>
            </ScrollSlideRight> 
          </div>
          <div data-w-id="26b4f08b-f24e-69fe-a7a3-ce8419486b0e" class="div-block-19">
            <ScrollSlideLeft>
              <h1 class="heading-9">Events</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <a href="/events" class="link">Learn More &gt;</a>
            </ScrollSlideLeft>
          </div>
        </div>
      </div>
      <div class="section-16 wf-section">
        <div data-w-id="88fa0de0-49e2-0176-d353-3aae68990b1c" class="container-12 w-container">
          <ScrollFade>
            <h1 class="heading-9">Oncampus Gatherings</h1>
            <p class="paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. <br />
            </p>
            <p class="paragraph-light">explain about paradox in about 5-6 lines <br />
            </p>
          </ScrollFade>
        </div>
      </div>
      {/* <ScrollFade>
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
      </ScrollFade> */}

      {/* <Container bgColor="bg-color-maroon text-white font-righteous">
        <ScrollFade>
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
      </ScrollFade>
        </Container> */}
    </Layout>
  );
};

export default HomePage;