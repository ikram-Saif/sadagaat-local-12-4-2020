import React from "react";
import Header from "../sub_page_header";
import Parteners from "../parteners";
import AboutSection from "../about/";

/*** translation backage */
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Header name={t("About Sadagaat")} coverImage={"about-bg-img"} />
      <AboutSection />
      <div>
        <section className="about-bg-img divider parallax layer-overlay overlay-theme-colored-8">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <h2 className="text-white">{t("Our Vision")}</h2>
                <p className="text-white">{t("vision_message_1")}</p>
              </div>
              <div className="col-md-4">
                <h2 className="text-white">{t("Our Mission")}</h2>
                <p className="text-white">{t("mission_message_1")}</p>
              </div>
              <div className="col-md-4">
                <h2 className="text-white">{t("Our Values")}</h2>
                <p className="text-white">{t("our_values_description")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Parteners />
    </React.Fragment>
  );
}
export default About;
