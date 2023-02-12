import { NavLink } from "react-router-dom";

import logo from "assets/images/logo.webp";

import "./Default.css";

const NavigationDefault = () => {
  return (
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="f-navigation w-nav">
      <div class="f-navigation-container">
        <div class="f-navbrand">
          <a href="#" class="f-navigation-logo-link w-inline-block">
            <img src={logo} loading="lazy" alt="logo" class="f-logo" />
          </a>
        </div>
        <div class="f-navigation-content">
          <nav role="navigation" class="f-navigation-menu w-nav-menu">
            <div class="div-block-7">
            
              <NavLink to="/" id="" activeClassName=" w--current" className="f-navigation-link w-nav-link">Home</NavLink>
              <NavLink to="/students" id="students" activeClassName=" w--current" className="f-navigation-link w-nav-link">Students</NavLink>
              <NavLink to="/governance" id="governance" activeClassName=" w--current" className="f-navigation-link w-nav-link">Governance</NavLink>
              <NavLink to="/societies" id="societies" activeClassName=" w--current" className="f-navigation-link w-nav-link">Societies</NavLink>
              <NavLink to="/events" id="events" activeClassName=" w--current" className="f-navigation-link w-nav-link">Events</NavLink>
            </div>
          </nav>
          <div class="f-navigation-menu-button w-nav-button">
            <div class="icon-3 w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <h1 class="centered-heading margin-bottom-32px">IIT Madras BS Students</h1>
    </div>
  );
};

export default NavigationDefault;