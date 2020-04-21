import React ,{ useState, useEffect, Component }  from 'react';
import Header from '../sub_page_header'
import address from './../utils/address';
import axios from 'axios';
import { render } from '@testing-library/react';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'
import { donateTo } from '../../repository';


class Health extends Component {

  constructor() {
    super();
    state = {
      hubs:[]
                }
}

  componentDidMount =()=> {

    axios.get(`${address()}hubs/33`, {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          const hubs = response.data
          this.setState({hubs})
          })

      
        .catch(error => {
          console.log(error);
        })
  }

   
   render(){
     const{t}= this.props

    return (

    <div>
      <Header name={t('Donate')}/>

      <section>
        <div class="container">
          <div class="section-content">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-5">
               
                <h3 class="mt-0 line-bottom">{t('Make a Donation')}<span class="font-weight-300"> {t('Now!')}</span></h3>
                   <p className="error-message">{t(this.state.message)}</p>
                  <form
                       data-toggle="validator"
                        role="form"
                       id="popup_paypal_donate_form_onetime_recurring"
                       onSubmit = {this.handleSubmite}
                    >

                      <div className="row">
                       <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <label><strong>{t('I Want to Donate for')}</strong></label>

                          <select    
                              name="id"
                              className="form-control"
                              onChange ={this.handleChange} 
                              required>

                              {this.state.hubs.map(hub =>
                              <option key={hub.id} value = {hub.id} >

                                {hub.name}
                                </option>
                              )}
                          </select>
                        </div>
                      </div>
                      </div>

                      <div className="row">
                   
                      <div className="col-sm-9">
                       <div className="form-group mb-20">
                          <label><strong>{t('How much do you want to donate?')}</strong></label>

                           <input
                                name="amount" 
                                className="form-control"
                                type="number" 
                                onChange ={this.handleChange}
                                required
                               />
                               
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                     
                        <div className="col-sm-3">
                         <div className="form-group mb-20">
                              <label><strong> <br/> </strong></label>

                           <select
                                name="currency" 
                                className="form-control"
                                onChange ={this.handleChange}
                               >
                                 <option name ="currency">SDG</option>
                            </select>
                          </div>
                        </div>
                        </div>
                      

                      <div className="col-sm-12">
                        <div className="form-group">

                          <button type="submit" 
                            className="btn btn-flat btn-dark btn-theme-colored mt-10 pl-30 pr-30"
                            data-loading-text="Please wait...">{t('Donate')} {t('Now!')}
                          </button>
                        </div>
                      </div>
                  </form>     
                </div>

              <div class="col-xs-12 col-sm-12 col-md-7">
                  <h3 class="mt-0 line-bottom">{t('Bank Accounts')}</h3>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>{t('Bank')}</th>
                          <th>{t('Branch')}</th>
                          <th>{t('Account No')}</th>
                          <th>{t('Account Name')}</th>
                        </tr>
                      </thead>
                          <tbody>
                            <tr>
                              <th scope="row">{t('Khartoum')}</th>
                              <td>{t('Riadh')}</td>
                              <td>1228765</td>
                              <td>{t('Sadagaat')}</td>
                            </tr>
                            <tr>
                              <th scope="row">Khartoum</th>
                              <td>Riadh</td>
                              <td>1228765</td>
                              <td>Sadagaat</td>
                            </tr>
                            <tr>
                              <th scope="row">Khartoum</th>
                              <td>Riadh</td>
                              <td>1228765</td>
                              <td>Sadagaat</td>
                            </tr>
                            <tr>
                              <th scope="row">Khartoum</th>
                              <td>Riadh</td>
                              <td>1228765</td>
                              <td>Sadagaat</td>
                            </tr>
                          </tbody>
                    </table>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

             </div>
    )
}
}

export default withTranslation()(Donate);