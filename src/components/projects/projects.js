import React, { useState, useEffect } from "react";
import Header from "../sub_page_header";
import address from "./../utils/address";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Precision, getNumber } from "../events/getMonthName";
import parse from "html-react-parser";
import ReactPaginate from "react-paginate";
import Preload from "../preload";

function Projects_() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  // const style = { position: "relative", top: "50%", left: "50%"}
  const projectProgressAlign = i18n.dir() === "rtl" ? "right" : "left";

  useEffect(() => {
    async function fetchData() {
      const fetcher = await window.fetch(`${address()}projects`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      const response = await fetcher.json();
      console.log(response);
      const Projects = response.filter(
        (project) =>
          project.projectProgress > 0 && project.projectProgress < 100
      );
      setData(Projects);
      setLoading(false);
    }
    fetchData();
  }, [i18n.language]);

  // Get current posts
  const currentPosts = data.slice(offset, offset + postsPerPage);

  // Change page
  const paginate = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected * postsPerPage);
  };

  return (
    <React.Fragment>
      <section>
        <Header name={t("Ongoing Projects")} coverImage={"projects-bg-img"} />

        <div className="container">
          <div className="row">
            {loading && <Preload loading={loading} />}

            {currentPosts.length > 0
              ? currentPosts.map((project) => (
                  <div className="col-md-4" key={project.id}>
                    <Link to={"/single-projects/" + project.id}>
                      <div
                        className="causes bg-white mb-30 border-bottom"
                        style={{ height: "600px" }}
                      >
                        <div className="thumb">
                          <img
                            src={`${address()}projects/${project.id}/image`}
                            className="img-fullwidth"
                            width="390"
                            height="260"
                            alt={project.name}
                          />
                        </div>

                        <div className="causes-details clearfix p-15 pt-15 pb-15">
                          <ul className="list-inline font-16 font-weight-600 clearfix mb-5">
                            <li className="pull-left font-weight-400 text-black-333 pr-0">
                              {t("Raised")}
                              <span className="text-theme-colored font-weight-700">
                                {getNumber(project.raised)}
                              </span>
                            </li>
                            <li className="pull-right font-weight-400 text-black-333 pr-0">
                              {t("Goal")}
                              <span className="text-theme-colored font-weight-700">
                                {getNumber(project.goal)}
                              </span>
                            </li>
                          </ul>

                          <div className="progress-item mt-0">
                            {/* <span>{t('Donation Progress')}</span> */}
                            <div className="progress">
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
                          <div className="progress-item mt-0">
                            <p
                              className=""
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

                          <h4 className="text-uppercase">{project.name}</h4>

                          <p className="mt-20 project-discription">
                            {parse(project.description)}
                          </p>

                          <Link
                            to={"/projects/" + project.id}
                            className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                            style={{
                              display: `${
                                project.donationProgress >= 100 ? "none" : ""
                              }`,
                            }}
                          >
                            {t("Donate")}
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : ""}
            {data.length > postsPerPage && (
              <div style={{ position: "absolute", bottom: "0%" }}>
                <ReactPaginate
                  previousLabel={t("prev")}
                  nextLabel={t("next")}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(data.length / postsPerPage)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={paginate}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects_;
