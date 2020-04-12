import React ,{ useState, useEffect, Component }  from 'react';
import Header from '../sub_page_header'
import  {withTranslation}  from 'react-i18next'
import i18n from 'i18next'
import{Link} from 'react-router-dom'

class SuccessDonate extends Component {


   render(){
     const{t}= this.props

    return (

    <div>
      <Header name={t('Donate')}/>

      <section>
        <div className="container">
          <div className="section-content">
           
          <div className="jumbotron text-center ">
            <div><i class="fa fa-check-circle lg"></i></div>
              <h1 className="display-3">{t('Thank You!')}</h1>
              <div className=""><h3>{t('Donation was completed successfully')}</h3></div>
              <hr />
              <p className="lead">
                <Link className="btn btn-primary" to="/" role="button">{t('Continue to homepage')}</Link>
              </p>
            </div>


            </div>
          </div>
        </section>

             </div>
    )
}
}

export default withTranslation()(SuccessDonate);