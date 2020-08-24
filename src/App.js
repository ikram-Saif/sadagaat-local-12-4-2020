import React, { useEffect, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Preload from "./components/preload";

const Film = React.lazy(() => import("./components/film"));
const MenuBar = React.lazy(() => import("./components/menu_bar"));
const Footer = React.lazy(() => import("./components/footer"));
const Contact = React.lazy(() => import("./components/contact"));
const About = React.lazy(() => import("./components/about/about.js"));
const Projects_ = React.lazy(() => import("./components/projects/projects"));
const Sub_hubs = React.lazy(() => import("./components/sub_hubs"));
const Home = React.lazy(() => import("./components/home"));
const Calendar = React.lazy(() => import("./components/calendar"));
const News = React.lazy(() => import("./components/news/index"));
const Pictures = React.lazy(() => import("./components/pictures_library"));
const Feeding = React.lazy(() => import("./components/base_hubs/Feeding"));
const Education = React.lazy(() => import("./components/base_hubs/education"));
const Health = React.lazy(() => import("./components/base_hubs/health"));
const Water = React.lazy(() => import("./components/base_hubs/water"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Donate = React.lazy(() => import("./components/Login/Forgot_Password"));
const ForgotPassword = React.lazy(() => import("./components/Donation/donate"));
const Become = React.lazy(() =>
  import("./components/become_a_volunteer/index")
);
const RestPassword = React.lazy(() =>
  import("./components/Login/Reset_password")
);
const Email_verification = React.lazy(() =>
  import("./components/Login/email_verfication")
);
const VolunteerForm = React.lazy(() =>
  import("./components/vlounteers/VolunteerForm")
);
const DonateToProject = React.lazy(() =>
  import("./components/Donation/DonateToProject")
);
const DonateToSubhub = React.lazy(() =>
  import("./components/Donation/DonateToSubhub")
);
const DonateToHub = React.lazy(() =>
  import("./components/Donation/donateToHub")
);
const SuccessDonate = React.lazy(() =>
  import("./components/Donation/successfullDonation")
);
const FaildDonate = React.lazy(() =>
  import("./components/Donation/faildDonation")
);
const SingleProject = React.lazy(() =>
  import("./components/projects/single-project")
);
const SingleProject2 = React.lazy(() =>
  import("./components/projects/single-withSlider")
);
const PrivateRoute = React.lazy(() =>
  import("./components/menu_bar/privateRoute")
);
const PubliceRoute = React.lazy(() =>
  import("./components/menu_bar/PublicRoute")
);
const SingleSubhub = React.lazy(() =>
  import("./components/sub_hubs/single-subhub")
);
const SingleEvent = React.lazy(() =>
  import("./components/events/single-event")
);
const PlannedProjects = React.lazy(() =>
  import("./components/projects/plannedProjects")
);
const FinishedProjects = React.lazy(() =>
  import("./components/projects/finished-project")
);
const SinglNews = React.lazy(() => import("./components/news/single-news"));
const Volunteers = React.lazy(() =>
  import("./components/vlounteers/volunteersPage")
);
const Registration = React.lazy(() =>
  import("./components/Login/Registration")
);
const TopBar = React.lazy(() => import("./components/top_bar"));

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
  }, [i18n.language]);

  return (
    <>
      <Switch>
        <div className="main-content">
          <TopBar />
          <MenuBar />
          <Suspense fallback={Preload}>
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
            <Route exact path="/news/:news_id" component={SinglNews} />

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
            <Route
              exact
              path="/sub_hubs/:subhub_id"
              component={DonateToSubhub}
            />
            <Route exact path="/hub/:hubId" component={DonateToHub} />
            <Route exact path="/success-donate" component={SuccessDonate} />
            <Route exact path="/failed-donate" component={FaildDonate} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <PubliceRoute exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/forgot_password" component={ForgotPassword} />

            <Route
              exact
              path="/reset-password/:token"
              component={RestPassword}
            />

            <Route exact path="/volunteers" component={Volunteers} />

            <PrivateRoute
              exact
              path="/volunteerForm"
              component={VolunteerForm}
            />
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

            <Route
              exact
              path="/complete-projects"
              component={FinishedProjects}
            />
          </Suspense>
          <Become />
          <Footer />
        </div>
      </Switch>
    </>
  );
}

export default App;
