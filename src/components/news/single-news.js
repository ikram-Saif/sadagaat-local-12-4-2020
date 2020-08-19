import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Header from "../sub_page_header";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReactPlayer from "react-player";

class SinglNews extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      allMedia: [],
      translationNews: {},
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.news_id;

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({
        news,
      });
      this.fillMediaArray();
      this.setTranslationData();
    } catch (error) {
      console.log("can not load news for the home page slider");
    }
    //  console.log(this.state.news)
  }

  async componentWillReceiveProps() {
    let id = this.props.match.params.news_id;

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({
        news,
      });
      this.fillMediaArray();
      this.setTranslationData();
    } catch (error) {
      console.log("can not load news for the home page slider");
    }
  }

  /**this function call after componentDidMount to join two videos and images in one array, and add new attribute type 'image'/'video'   */
  /**
   *
   */
  fillMediaArray = () => {
    const news_images = this.state.news.images;
    const news_videos = this.state.news.video;
    const allMedia = [];

    /**fill array with default Image if its not null */
    if (this.state.news.imageUrl !== null) {
      allMedia.push({
        type: "image",
        id: this.state.news.id,
        name: this.state.news.id,
      });
    }

    if (news_images.length > 0) {
      news_images.map((image) => {
        return allMedia.push({
          type: "image",
          id: image.id,
          name: image.name,
        });
      });
    }

    if (news_videos.length > 0) {
      news_videos.map((video) => {
        return allMedia.push({
          type: "video",
          id: video.id,
          name: video.name,
        });
      });
    }
    this.setState({ allMedia });
  };

  setTranslationData = () => {
    const newsData = this.state.news.newsTranslations;

    for (let i = 0; i < newsData.length; i++) {
      if (i18n.language === newsData[i].locale) {
        this.setState({
          translationNews: {
            name: newsData[i].name,
            description: newsData[i].description,
          },
        });
        console.log("translationsDataname", this.state.translationNews);
      }
    }
  };

  render() {
    const { t } = this.props;
    const { news } = this.state;
    const allMedia = this.state.allMedia;
    const translationNews = this.state.translationNews;
    return (
      <div>
        <Header name={t("News")} coverImage={"news-bg-img"} />

        <section>
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div class="row">
              <div class="col-md-6">
                <div class="blog-posts single-post">
                  <article class="post clearfix mb-0">
                    <div class="entry-header">
                      {/**check if  all media has image other than default image */}
                      {allMedia.length > 1 ? (
                        <Carousel
                          slidesPerScroll={1}
                          //autoPlay={6000}
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
                          {allMedia.map((media) =>
                            media.type === "image" ? (
                              <div
                                class="post-thumb thumb"
                                style={{ mxaHeight: "500px" }}
                              >
                                <img
                                  src={`${address()}news/${media.name}/image`}
                                  className="img-fullwidth img-responsive"
                                  alt=""
                                  style={{ height: "400px" }}
                                />
                              </div>
                            ) : (
                              <div>
                                <ReactPlayer
                                  controls={true}
                                  playIcon
                                  className="img-fullwidth img-responsive"
                                  // height='100%'
                                  // width = '100%'
                                  url={`${address()}news/${media.name}/video`}
                                />
                              </div>
                            )
                          )}
                        </Carousel>
                      ) : (
                        <div
                          class="post-thumb thumb"
                          style={{ mxaHeight: "500px" }}
                        >
                          <img
                            src={`${address()}news/${news.id}/image`}
                            className="img-fullwidth img-responsive"
                            alt=""
                            style={{ height: "400px" }}
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              </div>
              <div class="col-md-6">
                <div class="entry-content">
                  <div class="entry-meta media no-bg no-border mt-15">
                    <div class="media-body pl-15">
                      <div class="event-content pull-left flip">
                        <h2 class="line-bottom mt-0">{translationNews.name}</h2>
                      </div>
                    </div>
                  </div>

                  <p className="m-15 mt-0">{translationNews.description}.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withTranslation()(SinglNews);
