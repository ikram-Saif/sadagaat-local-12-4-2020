import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import Preload from "./components/preload";
import TopBar from "./components/top_bar";
import MenuBar from "./components/menu_bar";
import Footer from "./components/footer";
import Become from "./components/become_a_volunteer/index";
import Contact from "./components/contact";
import About from "./components/about/about.js";
import Projects_ from "./components/projects/projects";
import Sub_hubs from "./components/sub_hubs";
import Home from "./components/home";
import Calendar from "./components/calendar";
import Film from "./components/film";
import Pictures from "./components/pictures_library";
import Feeding from "./components/base_hubs/Feeding";
import Education from "./components/base_hubs/education";
import Health from "./components/base_hubs/health";
import Water from "./components/base_hubs/water";
import News from "./components/news/index";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/Forgot_Password";
import RestPassword from "./components/Login/Reset_password";
import Email_verification from "./components/Login/email_verfication";
import VolunteerForm from "./components/vlounteers/VolunteerForm";
import Donate from "./components/Donation/donate";
import DonateToProject from "./components/Donation/DonateToProject";
import DonateToSubhub from "./components/Donation/DonateToSubhub";
import DonateToHub from "./components/Donation/donateToHub";
import SuccessDonate from "./components/Donation/successfullDonation";
import FaildDonate from "./components/Donation/faildDonation";
import SingleProject from "./components/projects/single-project";
import SingleProject2 from "./components/projects/single-withSlider";
import PrivateRoute from "./components/menu_bar/privateRoute";
import PubliceRoute from "./components/menu_bar/PublicRoute";
import SingleSubhub from "./components/sub_hubs/single-subhub";
import SingleEvent from "./components/events/single-event";
import { useTranslation } from "react-i18next";
import PlannedProjects from "./components/projects/plannedProjects";
import FinishedProjects from "./components/projects/finished-project";
import SinglNews from "./components/news/single-news";
import singleNews from "./components/news/single-news";
import Volunteers from "./components/vlounteers/volunteersPage";
import Registration from "./components/Login/Registration";

function App() {
  const { i18n } = useTranslation();
  document.getElementById("direction").dir = i18n.dir();

  useEffect(() => {
    if (i18n.dir() === "rtl") {
      document.getElementById("bootstrp-file").href =
        "css/bootstrap-rtl.min.css";

      document.getElementById("main-rtl").href = "css/style-main-rtl.css";

      document.getElementById("main-rtl-extra").href =
        "css/style-main-rtl-extra.css";
    } else if (i18n.dir() === "ltr") {
      document.getElementById("bootstrp-file").href = "";
      document.getElementById("main-rtl").href = "";
      document.getElementById("main-rtl-extra").href = "";
    }
  }, i18n.language);

  return (
    <>
      <Switch>
        <div className="main-content">
          {/* <Preload /> */}
          <TopBar />
          <MenuBar />
          <Route exact path="/film">
            <Film />
          </Route>

          <Route exact path="/pictures">
            <Pictures />
          </Route>

          <Route exact path="/calendar">
            <Calendar />
          </Route>

          <Route exact path="/event/:event_id" component={SingleEvent} />
          <Route exact path="/news/:news_id" component={singleNews} />

          <Route exact path="/water" component={Water} />
          <Route exact path="/feeding" component={Feeding} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/news" component={News} />
          <Route exact path="/sub_hubs" component={Sub_hubs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects_} />
          <Route exact path="/donate/" component={Donate} />
          <Route
            exact
            path="/projects/:project_id"
            component={DonateToProject}
          />
          <Route exact path="/sub_hubs/:subhub_id" component={DonateToSubhub} />
          <Route exact path="/hub/:hubId" component={DonateToHub} />
          <Route exact path="/success-donate" component={SuccessDonate} />
          <Route exact path="/failed-donate" component={FaildDonate} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <PubliceRoute exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/forgot_password" component={ForgotPassword} />

          <Route exact path="/reset-password/:token" component={RestPassword} />

          <Route exact path="/volunteers" component={Volunteers} />

          <PrivateRoute exact path="/volunteerForm" component={VolunteerForm} />
          <Route exact path="/verify" component={Email_verification} />

          <Route
            exact
            path="/single-projects/:project_id"
            component={SingleProject2}
          />
          <Route
            exact
            path="/single-subhub/:subhub_id"
            component={SingleSubhub}
          />
          <Route exact path="/planned-projects" component={PlannedProjects} />

          <Route exact path="/complete-projects" component={FinishedProjects} />
          <Become />
          <Footer />
        </div>
      </Switch>
    </>
  );
}

export default App;
