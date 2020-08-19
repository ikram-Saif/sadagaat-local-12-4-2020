import React, { Component } from "react";
import Header from "../sub_page_header";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import DonationTable from "./DonationTable";

class DonateToHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hub_id: this.props.match.params.hubId,
      amount: 0,
      message: "",
      iconClass: "",
      styleClass: "",
      loading: false,
      currency: "SDG",
      hub: [],
    };
  }

  async componentDidMount() {
    //let id = this.props.match.params.hubId
    let id = this.state.hub_id;
    await axios
      .get(`${address()}hubs/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      })

      .then((response) => {
        const hub = response.data;
        this.setState({ hub });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  async componentWillReceiveProps() {
    //let id = this.props.match.params.hubId
    let id = this.state.hub_id;

    //this.setState({hub_id:id})

    axios
      .get(`${address()}hubs/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      })

      .then((response) => {
        const hub = response.data;
        this.setState({ hub });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmite = (e) => {
    e.preventDefault();
    let id = this.state.hub_id;
    const data = {
      hid: id,
      amount: this.state.amount,
      currency: this.state.currency,
    };
    console.log(data);

    this.setState({ loading: true });

    axios
      .post(`${address()}donate`, data)
      /** syber bay payment feedback */

      .then((response) => {
        if (response.data.responseCode === 1) {
          window.location = response.data.paymentUrl;

          setTimeout(() => {
            this.setState({ loading: false });
          }, 2000);
        } else if (response.data.responseCode === 2) {
          this.setState({
            message: "Please Enter Valid Amount",
            iconClass: "fa fa-times-circle",
            styleClass: "error-msg",
            donateTo: "Sadagaat",
          });
        } else {
          this.setState({
            message: "something went wrong try again later",
            iconClass: "fa fa-times-circle",
            styleClass: "error-msg",
            donateTo: "Sadagaat",
          });
        }
      })
      .catch((err) => {
        this.setState({ loading: true });

        let message;
        if (err.message === "Network Error") message = "Network Error";
        else message = "something went wrong try again later";

        setTimeout(() => {
          this.setState({
            loading: false,
            message: message,
            iconClass: "fa fa-times-circle",
            styleClass: "error-msg",
          });
        }, 2000);
      });
  };

  render() {
    const { t } = this.props;
    const loading = this.state.loading;

    return (
      <div>
        <Header name={t("Donate")} />

        <section>
          <div class="container">
            <div class="section-content">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-5">
                  <h3 class="mt-0 line-bottom">
                    {t("Donate Through SyberPay")}
                    <span class="font-weight-300"></span>
                  </h3>
                  <p className={this.state.styleClass}>
                    <i
                      className={this.state.iconClass}
                      style={{ margin: "5px" }}
                    ></i>
                    {t(this.state.message)}
                  </p>
                  <form
                    // data-toggle="validator"
                    role="form"
                    id="popup_paypal_donate_form_onetime_recurring"
                    onSubmit={this.handleSubmite}
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <input
                            name="name"
                            className="form-control"
                            type="readOnly"
                            value={this.state.hub.name}
                            style={{ fontSize: "16px" }}
                            readonly
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-9">
                        <div className="form-group mb-20">
                          <label>
                            <strong>
                              {t("How much do you want to donate?")}
                            </strong>
                          </label>

                          <input
                            name="amount"
                            className="form-control"
                            type="number"
                            min="1"
                            onChange={this.handleChange}
                            onInvalid={function (e) {
                              e.target.setCustomValidity(
                                t("Enter a valid amount")
                              );
                            }}
                            onInput={function (e) {
                              e.target.setCustomValidity(t(""));
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="form-group mb-20">
                          <label>
                            <strong>
                              {" "}
                              <br />{" "}
                            </strong>
                          </label>

                          <select
                            name="currency"
                            className="form-control"
                            onChange={this.handleChange}
                          >
                            <option name="currency">SDG</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-flat btn-dark btn-theme-colored mt-10 pl-30 pr-30"
                          data-loading-text="Please wait..."
                        >
                          {loading && (
                            <i
                              className="fa fa-spinner fa-spin"
                              style={{ margin: "5px" }}
                            />
                          )}
                          {t("Donate")} {t("Now!")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <DonationTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslation()(DonateToHub);
