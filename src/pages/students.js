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
      {/* <Container bgColor={"bg-color-maroon"}>
        <ScrollFade>
          <h1 className="text-center font-righteous text-color-gold text-uppercase m-0">Our Students</h1>
        </ScrollFade>
      </Container> */}
      
    <div class="section-14 wf-section">
      <div class="container-12 w-container">
        <h1 class="heading">The Student Community</h1>
        <p class="paragraph-7">
          <span class="text-span">O</span>ne of the largest student community consisting of students from around the world speaking various languages. This is a diverse and inclusive group that brings together individuals from different cultural backgrounds and linguistic backgrounds. This is where students can connect and communicate with one another regardless of their location. The community is focused on providing a space for students to share knowledge, resources, and support, while also promoting cultural exchange and understanding.
        </p>
        <p class="paragraph-7">A tight-knit group of individuals who come together to share knowledge, resources, and support for one another. The community is focused on promoting personal and professional growth, and providing a support system for students as they navigate their educational journey. The students at IITM are known for their high academic standards and rigorous curriculum, and the community fosters an environment of academic excellence and achievement.</p>
      </div>
    </div>

    <div class="wf-section">
      <div class="container-12 w-container">
        <ScrollFade>
          <h1 class="sub-heading">Cohort ready for internships and job offers</h1>
          <p class="paragraph-11">We have a cohort of over 1400 talented students who have completed double diplomas in Programming and Data Sciences and will be taking up 3-6 months long internships starting September 2022. About 300 students from the cohort are working professionals and most students have dual degrees and therefore bring strong domain knowledge in various fields.</p>
          <p class="paragraph-11">Lorem ipsum dolor sit amet dolor sit adipes</p>
        </ScrollFade>
      </div>
    </div>

    
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
    
    <div class="wf-section">
      <div class="container-12 w-container">
        <h1 class="sub-heading center-text">The 12 houses</h1>
        <div class="collection-list-wrapper w-dyn-list">
          <div role="list" class="collection-list-3 w-dyn-items w-row">
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/bandipur-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93d2762ef821c73f90f_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/corbett-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93db2f8c914b9113114_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/gir-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93de72c80388743fd38_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/kanha-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93d7bbe6b1f8fa270ce_uc.webp" loading="lazy" alt="" sizes="(max-width: 767px) 32vw, (max-width: 991px) 130.890625px, 168px" srcset="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93d7bbe6b1f8fa270ce_uc-p-500.webp 500w, https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93d7bbe6b1f8fa270ce_uc-p-800.webp 800w, https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93d7bbe6b1f8fa270ce_uc-p-1080.webp 1080w, https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93d7bbe6b1f8fa270ce_uc.webp 1280w" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/kaziranga-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3b34d50ce5d62df1505b6_kaziranga.png" loading="lazy" alt="" sizes="(max-width: 767px) 32vw, (max-width: 991px) 130.890625px, 168px" srcset="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3b34d50ce5d62df1505b6_kaziranga-p-500.png 500w, https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3b34d50ce5d62df1505b6_kaziranga-p-800.png 800w, https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3b34d50ce5d62df1505b6_kaziranga-p-1080.png 1080w, https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3b34d50ce5d62df1505b6_kaziranga.png 1157w" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/nallamala-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93db8c7b3b709d45453_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/namdapha-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93f7bbe6bc366a270d7_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/nilgiri-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93fa1dabc4638f81f88_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/pichavaram-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93f93749b2ea2d7cd8c_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/saranda-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93fe68d877188c8a597_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/sundarbans-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93f8fe16b76f42d111d_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
            <div data-w-id="bf2b646e-dc91-06d7-2bb1-9547567b8633" role="listitem" class="collection-item-4 w-dyn-item w-col w-col-3">
              <ScrollFade>
                <a href="/houses/wayanad-house" class="link-block-3 w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/63a483aa90ad16ea8c9fd495/63d3a93f01679945ee8c4ee8_uc.webp" loading="lazy" alt="" class="image-7" />
                </a>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* <ScrollFade>
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
      </ScrollFade> */}
      {/* <Container>
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
      </Container> */}
    </Layout>
  )
}

export default StudentsPage;