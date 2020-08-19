import React, { useState, useEffect } from "react";

import address from "./../utils/address";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

const Hub_Subhubs = (props) => {
  const [subhub, setSubhubs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const hubId = props.hubId;
  const { t } = useTranslation();

  useEffect(() => {
    SubHubs();
  }, [props]);

  async function SubHubs() {
    const fetcher = await window.fetch(`${address()}subHubs`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    const filteredSubhubs = response.filter((subhub) => subhub.hubId === hubId);
    setSubhubs(filteredSubhubs);
    console.log(filteredSubhubs);
  }

  // Get current posts
  const currentPosts = subhub.slice(offset, offset + postsPerPage);

  // Change page
  const paginate = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected * postsPerPage);
  };

  return (
    <div>
      <div className="row multi-row-clearfix">
        <div className="blog-posts">
          <h3 class="mt-10 line-bottom">{props.name}</h3>
          <br />

          {currentPosts.map((sub_hub) => (
            <div className="col-md-4" key={sub_hub.id}>
              <div class="causes bg-white mb-30" style={{ height: "400px" }}>
                <Link to={"/single-subhub/" + sub_hub.id}>
                  <div class="thumb">
                    <img
                      src={`${address()}subHubs/${sub_hub.id}/image`}
                      alt="subhubs"
                      className="img-fullwidth"
                      height="250px"
                    />
                  </div>
                  <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                    <h4 class="text-uppercase">{sub_hub.name}</h4>

                    <Link
                      to={"/sub_hubs/" + sub_hub.id}
                      className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                    >
                      {t("Donate")}
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {subhub.length > postsPerPage && (
          <div style={{ position: "absolute", bottom: "0%" }}>
            <ReactPaginate
              previousLabel={t("prev")}
              nextLabel={t("next")}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(subhub.length / postsPerPage)}
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
  );
};
export default Hub_Subhubs;
