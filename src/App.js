import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/home";
import GovernancePage from "./pages/governance";
import StudentsPage from "./pages/students";
import ActivitiesPage from "./pages/activities";
import ClubsPage from "pages/clubs";
import EventsPage from "pages/events";
import ServicesPage from "./pages/services";
import WellnessCenterPage from "pages/wellness-center";
import GrievancePage from "pages/grievance";
import SupportPage from "pages/support";
import CertVerifyPage from "pages/cvs";
import FaqPage from "pages/faq";
import SocietiesPage from "pages/societies";

import BackToTop from "components/BackToTop";
// import { getSECMembers, getExecOpenings, getFromPres } from "apis/firebase.js";

import "./App.css";
import { useEffect, useState } from "react";
import Loader from "components/Loader";

function App() {
  // const [loading, setLoading] = useState(true);
  // const [secLoading, setSecLoading] = useState(true);
  // const [execOpeningsLoading, setExecOpeningsLoading] = useState(true);
  // const [fromPresLoading, setFromPresLoading] = useState(true);

  // useEffect(() => getSECMembers().then(r => setSecLoading(false)), []);
  // useEffect(() => getExecOpenings().then(r => setExecOpeningsLoading(false)), []);
  // useEffect(() => getFromPres().then(r => setFromPresLoading(false)), []);
  // useEffect(() => {if (secLoading && execOpeningsLoading && fromPresLoading) setLoading(false)}, []);

  return (
    <Loader loading={false}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/governance" component={GovernancePage} />
            <Route exact path="/students" component={StudentsPage} />
            <Route exact path="/societies" component={SocietiesPage} />
            <Route exact path="/clubs" component={ClubsPage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/services/wellness-center" component={WellnessCenterPage} />
            <Route exact path="/services/grievance-redressal" component={GrievancePage} />
            <Route exact path="/services/support" component={SupportPage} />
            <Route exact path="/services/cvs" component={CertVerifyPage} />
            <Route exact path="/services/faq" component={FaqPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
        <BackToTop />
      </div>
    </Loader>
  );
}

export default App;