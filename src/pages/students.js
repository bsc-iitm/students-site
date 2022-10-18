import React from "react";
import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import "components/chart/chartLocal.css";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Title, Legend } from 'chart.js';
import ScrollFade from "components/container/ScrollFade";
import { wps, field_data, cgpa, age, expec_term_data } from 'constant/data'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentsPage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})}
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <ScrollFade>
          <h1 className="text-center font-righteous text-color-gold text-uppercase m-0">Our Students</h1>
        </ScrollFade>
      </Container>
      <ScrollFade>
        <Container>
          <div className="container">
            <div className="row">
              <div className="col col-lg-12 pt-lg-0">
                <div style={{padding:'20px 8px 20px 8px'}}>
                  <h3 className="text-color-gold">Cohort ready for Internship and job offers</h3>
                  <hr />
                  <p className="fst-italic">
                    We have a cohort of over 655 talented students who have completed double diplomas in Programming and Data Sciences and will be taking up 3-6 months long internships starting September 2022. About 100 students from the cohort are working professionals and most students have dual degrees and therefore bring strong domain knowledge in various fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </ScrollFade>
      <Container bgColor={"bg-color-maroon"}>
        <div className="stats">
          <div className="row justify-content-center">
            <ScrollFade>
              <div className="inner_stats">
                <div className="numbers text-color-gold">655</div>
                <p>Learners</p>
              </div>
            </ScrollFade>
            <ScrollFade>
              <div className="inner_stats">
                <div className="numbers text-color-gold">2300+</div>
                <p>Hours of video learning</p>
              </div>
            </ScrollFade>
          </div>
          <div className="row justify-content-center">
            <ScrollFade>
              <div className="inner_stats">
                <div className="numbers text-color-gold">101</div>
                <p>Working Professionals</p>
              </div>
            </ScrollFade>
            <ScrollFade>
              <div className="inner_stats">
                <div className="numbers text-color-gold">1700+</div>
                <p>Hours of hands on learning</p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </Container>
      <Container>
        <div className="container">
          <ScrollFade>
            <div className="row justify-content-center pt-4" style={{paddingTop:"80px"}}>
              <div className="col col-lg-4 chart-div m-auto">
                <Pie data={wps} />
              </div>
              <div className="col col-lg-6 chart-expl m-auto">
                <h3>Working Professionals</h3><hr />
                <p>We have a fair share of working professionals enrolled in the program. They not only bring their experience with them but also mentor the students for better position in industry.</p>
              </div>
            </div>
          </ScrollFade>
          <ScrollFade>
            <div className="row justify-content-center pt-4" style={{paddingTop:"80px"}}>
              <div className="col col-lg-4 chart-div m-auto">
                <Pie data={field_data} />
              </div>
              <div className="col col-lg-6 chart-expl m-auto">
                <h3>Fields of study</h3><hr />
                <p>Learners in the cohort come from a wide variety of educational backgrounds. Though a majority of them being from engineering and technlogy background, learners from arts, science, commerce are not short. They offer different perspectives for the same problem posed to them and bring varied skills to the table.</p>
              </div>
            </div>
          </ScrollFade>
          <ScrollFade>
            <div className="row justify-content-center pt-4">
              <div className="col col-lg-4 chart-div m-auto">
                <Bar data={cgpa} />
              </div>
              <div className="col col-lg-6 chart-expl m-auto">
                <h3>CGPA Distribution</h3><hr />
                <p>The rigour of the program is as par with the offline courses of IITM. Weekly assignments, vivas, projects and in-centre exams are testing criteria for learners. CGPAs show the excellence of students in coming over these tests efficiently.</p>
              </div>
            </div>
          </ScrollFade>
          <ScrollFade>
            <div className="row justify-content-center">
              <div className="col col-lg-5 chart-div m-auto">
                <Bar data={age} />
              </div>
              <div className="col col-lg-6 chart-expl m-auto">
                <h3>Age Distribution</h3><hr />
                <p>Learners in our program are not only diversified in educational backgrouond but also in the years they have lived. Presence of learners even in the age group of 40 - 50 is in indication of indulgement of course. </p>
              </div>
            </div>
          </ScrollFade>
          <ScrollFade>
            <div className="row justify-content-center">
              <div className="col col-lg-5 chart-div m-auto">
                <Bar data={expec_term_data} />
              </div>
              <div className="col col-lg-6 chart-expl m-auto">
                <h3>Expected term to complete diplomas</h3><hr />
                <p>Our program provides a very flexible path to complete courses and earn diplomas as well as degree. This ensures that the learners build upon the concepts efficiently during the program.</p>
              </div>			
            </div>
          </ScrollFade>
        </div>
      </Container>
    </Layout>
  )
}

export default StudentsPage;