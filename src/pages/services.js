import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import ScrollFade from "components/container/ScrollFade";

import { Link } from "react-router-dom";

import WellnessCenterImage from 'assets/images/services/wellness-center.webp';
import MitrImage from 'assets/images/services/mitr.webp';
import SaathiImage from 'assets/images/services/saathi.webp';
import cvsImage from 'assets/images/services/cvs.webp';
// import SupportImage from '';

const ServicesPage = () => {
  window.scrollTo({top: 0});
  return (
    <Layout>

      <Container bgColor={"bg-color-maroon"}>
        <ScrollFade>
          <h1 className="text-center text-color-gold font-righteous text-uppercase">Services Offered</h1>
        </ScrollFade>
      </Container>

      <Container>
        <ScrollFade>
          <div className="row justify-content-center">
            <Link to={"/services/wellness-center"} className="col-12 col-md-4 p-2 text-center text-decoration-none" >
              <div className="card border-0 bg-color-maroon">
                <img src={WellnessCenterImage} alt="wellness-center" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">Wellness Center</h5>
                </div>
              </div>
            </Link>
            <Link to={"/services/wellness-center#mitr"} className="col-12 col-md-4 p-2 text-center text-decoration-none" >
              <div className="card border-0 bg-color-maroon">
                <img src={MitrImage} alt="mitr" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">MiTR</h5>
                </div>
              </div>
            </Link>
            <Link to={"/services/wellness-center#saathi"} className="col-12 col-md-4 p-2 text-center text-decoration-none" >
              <div className="card border-0 bg-color-maroon">
                <img src={SaathiImage} alt="saathi" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">Saathi</h5>
                </div>
              </div>
            </Link>
            <Link to={"/services/cvs"} className="col-12 col-md-4 p-2 text-center text-decoration-none" >
              <div className="card border-0 bg-color-maroon">
                <img src={cvsImage} alt="cvs" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">Certificate Verification System</h5>
                </div>
              </div>
            </Link>
            <Link to={"/services/support"} className="col-12 col-md-4 p-2 text-center text-decoration-none" >
              <div className="card border-0 bg-color-maroon">
                <img src={'https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg'} alt="support" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">Support</h5>
                </div>
              </div>
            </Link>
            <Link to={"/services/grievance-redressal"} className="col-12 col-md-4 p-2 text-center text-decoration-none" >
              <div className="card border-0 bg-color-maroon">
                <img src={'https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg'} alt="grievance" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">Grievance Redressal</h5>
                </div>
              </div>
            </Link>
          </div>
        </ScrollFade>
      </Container>
      
      {/* <ScrollFade>
        <Container>
          <div className="row">
            <div className=""
          </div>
        </Container>
      </ScrollFade> */}

      {/* <Container bgColor={"bg-color-maroon"}>
        <ScrollFade>
          <h1 className="text-center text-color-gold font-righteous text-uppercase">We're here for you</h1>
        </ScrollFade>
      </Container>
      <ScrollFade>
        <Container>
          <ContainerHeader>
            <h2>IITM POD Support</h2>
          </ContainerHeader>
          <p className="font-roboto my-3">
            IITM BSc Degree Office,<br />3rd Floor, ICSR Building,<br />IIT Madras,<br /> Chennai - 600036.
          </p>
          <p className="font-roboto my-3">
            <a href="support@onlinedegree.iitm.ac.in" className="text-black">support@onlinedegree.iitm.ac.in</a>
          </p>
        </Container>
      </ScrollFade>
      <ScrollFade>
        <Container bgColor={"bg-color-maroon"}>
          <ContainerHeader>
            <h2>Grievance Cell</h2>
          </ContainerHeader>
          <p className="font-roboto my-2">
            Reporting Harrasment: IITM BSc Degree Team is committed to ensuring that everyone is equally values and treats one another with respect. All complaints of bullying and harrasment will be taken seriously and will be dealt quickly with respect for all the people involved.
          </p>
          <p className="font-roboto my-2">
            Learners may write to the Student Grievance Cell (<a href="mailto:student-grievance@onlinedegree.iitm.ac.in" className="text-white">student-grievance@student.onlinedegree.iitm.ac.in</a>) to report such matters. 
          </p>
        </Container>
      </ScrollFade>
      <ScrollFade>
        <Container>
          <ContainerHeader>
            <h2>Student Affairs</h2>
          </ContainerHeader>
          <p className="font-roboto my-2">
            Alongside your academic activities, you can have fun and develop your interests through clubs and various activities. It helps you build on your social skills and career goals while enjoying great social life. The activities are organized at various levels of student organizations - Groups, Houses and the program level
          </p>
          <p className="font-roboto my-3">
            Learners may contact Student Activities Officer (<a href="mailto:student-affairs@onlinedegree.iitm.ac.in" className="text-black">student-affairs@onlinedegree.iitm.ac.in</a>) for queries or to submit reports or for resolution of student activity issues.
          </p>
        </Container>
      </ScrollFade>
      <ScrollFade>
        <Container bgColor={"bg-color-maroon"}>
          <ContainerHeader>
            <h2>Executive Council</h2>
          </ContainerHeader>
          <p className="font-roboto my-3">
            The Student Executive Council (SEC) of IITM BSc Degree program is the ultimate head council of the student community elected by the students. They are responsible for the well-being of students both academically and socially. 
          </p>
          <p className="font-roboto my-3">
            Learners may get in touch with the SEC members by writing to <a href="executivecouncil@onlinedegree.iitm.ac.in" className="text-white">executivecouncil@onlinedegree.iitm.ac.in</a>
          </p>
        </Container>
      </ScrollFade> */}
    </Layout>
  )
}

export default ServicesPage;
