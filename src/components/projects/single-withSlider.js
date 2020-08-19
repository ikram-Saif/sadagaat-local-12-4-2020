import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { withTranslation } from "react-i18next";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
import { getNumberWithComma, Precision } from "../events/getMonthName";
import parse from "html-react-parser";

class SinglProject2 extends Component {
  constructor() {
    super();
    this.state = {
      project: [],
      render: false,
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.project_id;

    try {
      const { data: project } = await axios.get(`${address()}projects/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ project });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
    setTimeout(
      function () {
        this.setState({ render: true });
      }.bind(this),
      10
    );
  }

  async componentWillReceiveProps() {
    let id = this.props.match.params.project_id;

    try {
      const { data: project } = await axios.get(`${address()}projects/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ project });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
  }

  render() {
    let renderContainer = false;
    if (this.state.render) {
      const { t } = this.props;
      const { project } = this.state;
      const project_images = project.images;
      if (project.imageUrl !== null) {
        project_images.push({
          id: project.id,
          name: project.id,
        });
      }
      //const projectHasImages = project_images.length > 0? true : false
      const projectProgressAlign = i18n.dir() === "rtl" ? "right" : "left";

      renderContainer = (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="section-content">
                <div className="col-xs-12 col-sm-6 col-md-12">
                  <h2></h2>

                  <div className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15">
                    <div className="row">
                      <div className="causes">
                        <div className="row-fluid">
                          <div className="col-md-6">
                            {project_images.length > 1 ? (
                              <Carousel
                                slidesPerScroll={1}
                                autoPlay={6000}
                                rtl
                                arrowLeft={
                                  <i
                                    className="fa fa-chevron-right fa-2x"
                                    style={{ margin: "10px" }}
                                  />
                                }
                                arrowRight={
                                  <i
                                    className="fa fa-chevron-left fa-2x"
                                    style={{ margin: "10px" }}
                                  />
                                }
                                addArrowClickHandler
                                // animationSpeed={1000}
                                infinite
                                clickToChange
                                centered
                                breakpoints={{
                                  1000: {
                                    // these props will be applied when screen width is less than 1000px
                                    slidesPerPage: 2,
                                    clickToChange: false,
                                    centered: false,

                                    infinite: false,
                                  },
                                  500: {
                                    slidesPerPage: 1,
                                    slidesPerScroll: 1,
                                    clickToChange: false,
                                    centered: false,
                                    animationSpeed: 2000,
                                    infinite: false,
                                  },
                                }}
                              >
                                {project_images.map((image) => (
                                  <div
                                    className="post-thumb thumb"
                                    style={{ maxHeight: "400px" }}
                                  >
                                    <img
                                      src={`${address()}projects/${
                                        image.name
                                      }/image`}
                                      alt={project.name}
                                      width="500"
                                      className="img-responsive"
                                      style={{ height: "400px" }}
                                    />
                                  </div>
                                ))}
                              </Carousel>
                            ) : (
                              <div
                                className="post-thumb thumb"
                                style={{ maxHeight: "400px" }}
                              >
                                <img
                                  src={`${address()}projects/${
                                    project.id
                                  }/image`}
                                  alt={project.name}
                                  width="500"
                                  className="img-responsive"
                                  style={{ height: "500px" }}
                                />
                              </div>
                            )}
                          </div>
                          <div class="causes-details col-md-6">
                            <h2 class="line-bottom mt-0">{project.name}</h2>
                            <h5 class="font-weight-600 text-gray-dimgray">
                              <i className="fa fa-map-marker m-5"></i>

                              <span className="">{project.locationName}</span>
                            </h5>
                            <div className="mb-5">
                              {parse(project.description)}
                            </div>

                            <div className="progress-item mt-0">
                              <p
                                className="text-theme-colored font-weight-700"
                                style={{ textAlign: projectProgressAlign }}
                              >
                                {t("Project Progress")}
                              </p>
                              <div className="progress">
                                <div
                                  data-percent={Precision(
                                    project.projectProgress
                                  )}
                                  className="progress-bar"
                                >
                                  <span className="percent">
                                    {Precision(project.projectProgress)}%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-item mt-2">
                              <div className="progress mb-0">
                                <div
                                  data-percent={Precision(
                                    project.donationProgress
                                  )}
                                  className="progress-bar"
                                >
                                  <span className="percent">
                                    {Precision(project.donationProgress)}%
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div class="mt-10 mb-20">
                              <ul class="list-inline clearfix mt-10">
                                <li class="pull-left flip pr-0">
                                  {" "}
                                  {t("Raised")}{" "}
                                  <span class="font-weight-700 font-">
                                    {getNumberWithComma(project.raised)}
                                  </span>
                                </li>
                                <li class="text-theme-colored pull-right flip pr-0">
                                  {t("Goals")}
                                  <span class="font-weight-700">
                                    {getNumberWithComma(project.goal)}
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <Link
                              to={"/projects/" + project.id}
                              class="btn btn-theme-colored btn-sm"
                              style={{
                                display: `
                                ${
                                  project.donationProgress >= 100 ? "none" : ""
                                }`,
                              }}
                            >
                              {t("Donate Now")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return renderContainer;
  }
}
export default withTranslation()(SinglProject2);
