// import { useEffect, useState } from "react";
import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import Houses from "components/Houses";
import ScrollFade from "components/container/ScrollFade";
// import { getExecOpenings, getFromPres, getSECMembers } from "apis/firebase";
// import Loader from "components/Loader";
import NameList from "components/NameList";
import { sec, ds, wa, execOpenings } from "constant/data";
const GovernancePage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})};
  // const [sec, setSec] = useState([]);
  // const [execOpenings, setExecOpenings] = useState([]);
  // const [fromPres, setFromPres] = useState([]);

  // useEffect(() => getSECMembers().then((r=[]) => setSec(r)), []);
  // useEffect(() => getExecOpenings().then((r=[]) => setExecOpenings(r)), []);
  // useEffect(() => getFromPres().then((r=[]) => setFromPres(r)), [])

  return (
    <Layout>
      {/* <Container bgColor={"bg-color-maroon"}>
        <ScrollFade>
          <div className="text-center">
            <h1 className="text-color-gold font-righteus text-uppercase fw-bold">The Executive Council</h1>
          </div>
        </ScrollFade>
      </Container>
      <Container bgColor="bg-color-maroon font-righteous">
        <Loader loading={secloading}>
        <ScrollFade>
          <div className="row">
            {sec.map((member) => {
              return (
                <div key={"secmember"+sec.indexOf(member)} className="card col-12 col-md-3 text-center bg-color-maroon border-0" >
                  <img src={member.img} alt={member.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-color-gold">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollFade>
        </Loader>
      </Container>
      <ScrollFade>
        <Container bgColor="bg-color-primary">
          <ContainerHeader>
            <h2 className="m-0">From the President</h2>
          </ContainerHeader>
          <div className="font-roboto my-2">
            {fromPres.map((para) => {
              return <p>{para}</p>
            })}
          </div>
        </Container>
      </ScrollFade> */}
      <ScrollFade>
        <Container bgColor={"bg-color-maroon"}>
          <ContainerHeader>
            <h2 className="my-4">Executive Office Openings</h2>
          </ContainerHeader>
          <div className="overflow-auto" id="exec-openings">
            <div className="d-inline-flex justify-content-center flex-lg-wrap">
              {execOpenings.map((role) => {
                return (
                  <div className="card border-0 shadow-lg rounded m-1 w-25" key={execOpenings.indexOf(role)}>
                    <div className="card-body bg-color-maroon">
                      <h5 className="card-title">{role.title}</h5>
                      <p className="card-text">{role.desc}</p>
                      <div className="btn bg-color-gold"><a href={role.link} style={{textDecoration: "none", color: "white"}}>Apply now</a></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </ScrollFade>
      <Container>
        <ScrollFade>
          <div className="text-center my-3">
            <h2 className="text-black font-righteus text-uppercase fw-bold">12 houses</h2>
          </div>
        </ScrollFade>
        <Houses />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Secreteries</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={sec} role={"secretary"} />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Deputy Secreteries</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={ds} role={"deputy-secretary"} />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Web Admins</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={wa} role={"web-admin"} />
      </Container>
    </Layout>
  )
}

export default GovernancePage;