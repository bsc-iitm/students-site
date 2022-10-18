import ScrollFade from "components/container/ScrollFade";
import ContainerHeader from "components/ContainerHeader";
import Layout from "components/Layout";
import Container from "components/Container";

const WellnessCenterPage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})};

  // 

  return (
    <Layout>
      
      <Container bgColor={'bg-color-maroon'}>
        <ScrollFade>
          <h1 className="text-center text-color-gold font-righteous text-uppercase">Wellness Center</h1>
        </ScrollFade>
      </Container>

      <ScrollFade>
        <Container>
          <div className="font-roboto my-2">
            <p>Wellness Centre, IITM, is the body of licensed mental health professionals. Students can walk into the Wellness Centre or can schedule an appointment through email. Each session lasts between 45 minutes and one and a half hours. The Wellness Centre encourages students to come forward and experience wellness.</p>
            <p>The Wellness Centre works for nourishment of positive mental health in the campus. The team provides counseling and psychotherapy to the students. They also provide training and coordinate among different stakeholders when the situation demands. </p>
            <p>All session information are kept CONFIDENTIAL, unless it holds a threat to the student, or others, or to the society.</p>
          </div>
        </Container>
      </ScrollFade>

      <ScrollFade>
        <Container id="mitr" bgColor={'bg-color-maroon'}>
          <ContainerHeader>
            <h2>
              MITR
            </h2>
          </ContainerHeader>
          <div className="font-roboto my-2">
            <p>MITR is body of faculties and student MITRs. They offer peer counseling and support according to the student's needs. The moto of MITR is MITR is body of faculties and student MITRs. They offer peer counseling and support according to the student's needs. The moto of MITR is ‘No one in the campus should be unattended in their emotional distress’. ‘No one in the campus should be unattended in their emotional distress’. </p>
            <p>MITR provides peer counseling to the students in distress and collaborate among different agencies in IITM community. MITR organizes Barefoot counseling training for the new MITRs in collaboration with the Wellness Centre. They also conduct different surveys and events for the students based on specific needs</p>
          </div>
        </Container>
      </ScrollFade>

      <ScrollFade>
        <Container bgColor={"bg-color-primary"} id="saathi">
          <ContainerHeader>
            <h2>
              Saathi
            </h2>
          </ContainerHeader>
          <div className="font-roboto my-2">
            <p>SAATHI is a proactive platform for self-growth and well-being of the students.  The SAATHI team focuses on proactive measures that raise awareness in the campus about various pertinent issues, and plan several informal gatherings, lectures, and sessions, open to all.</p>
            <p>SAATHI organizes four self development programs every year. Based on the specific needs, SAATHI organizes multiple events from time to time.</p>
            <p>Each year, SAATHI organizes multiple mental health related events for student benefit. Distinguished speakers and trainers are invited for talks and skill development workshops. </p>
            
          </div>
        </Container>
      </ScrollFade>

    </Layout>
  )
}

export default WellnessCenterPage;