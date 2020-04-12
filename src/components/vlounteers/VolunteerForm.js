import React ,{Component}from 'react';
import Axios from 'axios';
import { get_volunteer_profile , submit_volunteer_data} from '../../repository'
import {animateScroll as scroll } from "react-scroll";
import  {withTranslation}  from 'react-i18next'


class VolunteerForm extends Component{ 


    constructor() {
        super();
     
        this.state = { 
            form:{
            name:'',
            gender:'FEMALE', 
            ageGroup:'15-25',
            phoneNumber:'',
            secondPhoneNumber:'',
            email:'',
            bloodGroup:'AB',
            educationLevel:'',
            languages:'',
            studyField:'',
            job:'',
            country:'',
            city:'',
            cityProjects:'',
            volunteeredBefore:'',
            heardAboutSadagaat:'',
            volunteerTime:'',
            vacationTime:'',
            countryProjects:'',
            volunteeredPeriod:'',
            volunteeredProjects:'',
            receiveEmails:'',
            },
            response:{
                message:'',
                styleClass:''
                
            }
          
            /*there is some quistion not found in bakend and mobile app  */
         
         }
        }
         
       
 /**componentDidMount (){

            get_volunteer_profile()
            .then(response =>{
                    this.setState({
                    response

                });
            })
            .catch(err =>alert(err));
        
    }*/

       handleChange = (e)=> {
        this.setState({
            form:{
            [e.target.name]: e.target.value}
            })
        }
        
       
        handleSubmit = (e) => {
        e.preventDefault();

        submit_volunteer_data(this.state.form)
        .then(response => {

            this.setState({
                response:{
                message:'Your Form Submitted  Successfully Thanks for volunteering',
                styleClass:'alert-success'
            }
            })
            //alert(this.state.message)
                scroll.scrollTo(30);
                
           
        })
        .catch(err => {
            this.setState({
                response:{
             message:'Please fill your information',
            styleClass:'error-message'
                }
        })
    }
       
        )}
       
       

    render(){
        const { t}= this.props
     
return(
    <div>
        <div className="main-content">

            <section className="inner-header divider parallax layer-overlay overlay-dark-6"
                data-bg-img = "/images/slide-1.jpg">
                <div className="container pt-60 pb-60">
                  
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="font-28 text-white">{t('Volunteer Registeration')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="tab-content">
                                <div className="tab-pane active p-15" id="register-tab">

                                    <form 
                                            name="reg-form" 
                                            className="register-form" 
                                            role="form"
                                            data-toggle="validator"
                                            onSubmit ={this.handleSubmit}
                                         >           
                                        <div className="icon-box mb-0 p-0">
                                            <h4 className="text-gray pt-10 mt-0 mb-30">
                                                {t('Fill Your Volunteering Form')}
                                            </h4>
                                        </div>
                                        <hr />
                                       
                                        <div className={`${this.state.response.styleClass} bold`} role="alert">
                                                {t(this.state.response.message)}
                                        </div>
                                        
                                        <p className="text-gray"><br/></p>

                                        <div className ="row">
                                            <div className="form-group col-md-12">
                                                <label>{t('name')}</label>

                                                <input 
                                                    name="name" 
                                                    className="form-control" 
                                                    type="text"
                                                    onChange ={this.handleChange}
                                                    value = {this.state.name}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-md-5">

                                                <label for="" className="float-left">{t('Gender')}</label>

                                                <select 
                                                    name="gender"
                                                    className ="form-control float-right" 
                                                    onChange ={this.handleChange}
                                                    value= {this.state.gender}
                                                
                                                >
                                                    <option name ='gender'>{t("FEMALE")}</option>
                                                    <option name ="gender">{t('MALE')}</option>
                                                </select>
                                            </div>
                                            

                                            <div className="form-group col-md-7">
                                                <label>{t('Age Range')}</label>

                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="ageGroup" 
                                                            id="1" 
                                                            value ='15-25'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.ageGroup === '15-25'}
                                                            
                                                        />

                                                        <label className="form-check-label" for="1">
                                                            15-25
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">
                                                        <input
                                                            id='21'
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="ageGroup" 
                                                            value ='25-35'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.ageGroup === '25-35'}
                                                            
                                                            
                                                        />
                                                        <label className="form-check-label" for="">
                                                            25-35
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="ageGroup" 
                                                            id="3" 
                                                            value='35-45'
                                                            onChange = {this.handleChange}
                                                            checked={this.state.ageGroup === '35-45'}
                                                            
                                                            
                                                        />
                                                        <label className="form-check-label" for="3" >
                                                            35-45
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="ageGroup"
                                                            id="4" 
                                                            value ='45-'
                                                            checked={this.state.ageGroup === '45-'}
                                                            onChange ={this.handleChange}
                                                            
                                                        />

                                                        <label className="form-check-label" for="3">
                                                            45-
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                      
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label for="">{t('Phone')}.</label>

                                                <input 
                                                    id="" 
                                                    name="phoneNumber"
                                                    className="form-control"
                                                    type="tel"
                                                    onChange ={this.handleChange}
                                                    value = {this.state.phoneNumber}
                                                    required
                                                 />
                                                 <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>{t('Additional Phone')}</label>

                                                <input
                                                    id="form_re_enter_password" 
                                                    name="secondPhoneNumber"
                                                    className="form-control"
                                                     type="tel"
                                                     value = {this.state.secondPhoneNumber}
                                                     onChange ={this.handleChange}
                                                     required
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="form-group col-md-8">
                                                <label for="">{t('E-Mail')}</label>

                                                <input 
                                                    id="" 
                                                    name="email"
                                                    className="form-control"
                                                    type="email"
                                                    value = {this.state.email}
                                                    onChange ={this.handleChange}
                                                    required
                                                    
                                                />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label>{t('Blood Group')}</label>

                                                <select 
                                                    name="bloodGroup"
                                                    className="form-control float-right" 
                                                    value ={this.state.bloodGroup}
                                                    onChange={this.handleChange}>
                                                    <option >AB</option>
                                                    <option >A</option>
                                                    <option >B</option>
                                                    <option >O</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label>{t('Educational Level')}</label>

                                                <select
                                                    name ='educationLevel'
                                                    className="form-control float-right"  
                                                    value ={this.state.educationLevel}
                                                    onChange ={this.handleChange}

                                                 >
                                                    <option>{t('Secondary School')}</option>
                                                    <option >{t('University Degree')}</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>{t('Languages you Know?')}</label> 

                                                <input 
                                                    name="languages"
                                                    className="form-control" 
                                                    type="text"
                                                    value = {this.state.languages}
                                                    onChange ={this.handleChange}
                                                    
                                                />
                                            </div>
                                            </div>

                                           { /*<div className="form-group col-md-6">
                                                <label>
                                                    {t('Do you currently work')}
                                                </label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">
                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="q1" 
                                                            value ='yes'
                                                            id="1"
                                                            checked={this.state.q1 === 'no'}

                                                            
                                                            />

                                                        <label className="form-check-label" for="1">
                                                            {t('Yes')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input 
                                                                    className="form-check-input" 
                                                                    type="radio"
                                                                    name="q1"
                                                                    id="" 
                                                                    value='no'
                                                                    checked={this.state.q1 === 'no'}
                                                                    
                                                                 />
                                                        <label className="form-check-label" for="">
                                                            {t('No')}
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>*/}
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label>{t('What did you Study(or are studding)?')}</label>

                                                <input 
                                                    name="studyField"
                                                    className="form-control" 
                                                    type="text"
                                                    value = {this.state.studyField}
                                                    onChange ={this.handleChange}
                                                />
                                            </div>
                                            
                                            <div className="form-group col-md-6">
                                                <label>{t('If you currently work , what is your job?')}</label>

                                                <input 
                                                    name="job" 
                                                    className="form-control"
                                                    type="text"
                                                    value = {this.state.job}
                                                    onChange ={this.handleChange}
                                                    
                                                />
                                            </div>
                                          {/**   <div className="form-group col-md-6">
                                                <label>
                                                    {t('Do you live in Sudan?')}
                                                </label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="q2"
                                                            id="1"
                                                            value='yes'
                                                            checked={this.state.q2 === 'yes'}
                                                        />
                                                        <label className="form-check-label" for="1">
                                                        {t('Yes')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="q2" 
                                                            id=""
                                                            value='no'
                                                            checked={this.state.q2 === 'no'}
                                                            
                                                        />
                                                        <label className="form-check-label" for="">
                                                            {t('No')}
                                                        </label>
                                                    </div>

                                                </div>
</div>*/}
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label for="">
                                                    {t('In which State do you live ?')}
                                                </label>
                                                <input 
                                                    id="" 
                                                    name="country"
                                                    className="form-control"
                                                    type="text"
                                                    value = {this.state.country}
                                                    onChange ={this.handleChange}
                                                    
                                                    
                                                 />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>{t('In which city?')}</label>

                                                <input 
                                                    id="form_re_enter_password" 
                                                    name="city"
                                                    className="form-control"
                                                    type="text"
                                                    value = {this.state.city}
                                                    onChange ={this.handleChange}
                                                    
                                                    
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="">{t('Address')}</label>

                                                <input 
                                                    id="" 
                                                    name="address"
                                                    className="form-control"
                                                    type="text"
                                                   // onChange ={this.handleChange}
                                                    
                                                 />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>
                                                    {t('Did Sadagaat executed any projects in your State?')}
                                                </label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="cityProjects" id="1" 
                                                            value="yes"
                                                            onChange ={this.handleChange}
                                                            checked={this.state.cityProjects === 'yes'}
                                                            
                                                        />
                                                        <label className="form-check-label" for="1">
                                                             {t('Yes')}  
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="cityProjects" 
                                                            id=""
                                                            value='no'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.cityProjects === 'no'}
                                                            
                                                        />
                                                        <label className="form-check-label" for="">
                                                              {t('No')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="cityProjects"
                                                            value='dont'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.cityProjects === 'dont'}
                                                            
                                                        />
                                                        <label className="form-check-label" for="">
                                                            {t('I Dont Know')}
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            
                                         <div className="form-group col-md-6">
                                                <label>
                                                    {t('Did you volunteer in Sadagaat before?')}
                                                </label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="volunteeredBefore" 
                                                            id="1" 
                                                            value='yes'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.volunteeredBefore === 'yes'}
                                                            
                                                        />
                                                        <label className="form-check-label" for="1">
                                                            {t('Yes')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="volunteeredBefore" 
                                                            value='no'
                                                            
                                                            checked={this.state.volunteeredBefore === 'no'}
                                                            onChange = {this.handleChange}
                                                            
                                                        />
                                                        <label className="form-check-label" for="">
                                                           {t('No')}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="">{t('If yes , Since when?')}</label>
                                                <input 
                                                    name="volunteerTime"
                                                    className="form-control"
                                                     type="date"
                                                     value = {this.state.volunteerTime}
                                                     onChange ={this.handleChange}
                                                     
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="">
                                                    {t('What projects did you participated in with Sadagaat?')}
                                                </label>
                                                
                                                <input 
                                                    id="" 
                                                    name="volunteeredProjects"
                                                    className="form-control" 
                                                    type="text"
                                                    onChange ={this.handleChange}
                                                    value = {this.state.volunteeredProjects}
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>{t('How did you know about Sadagaat?')}</label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="heardAboutSadagaat" 
                                                            id="1"
                                                            value='Friends'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.heardAboutSadagaat === 'Friends'}
                                                            
                                                        />
                                                        <label className="form-check-label" for="1">
                                                            {t('Friends')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">
                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="heardAboutSadagaat"
                                                            id=""
                                                            value = 'NewsPaper'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.heardAboutSadagaat === 'NewsPaper'}
                                                        />
                                                        <label className="form-check-label" for="">
                                                        {t('NewsPaper , magazzen')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="heardAboutSadagaat" 
                                                            value='Social Media'
                                                            onChange={this.handleChange}
                                                            checked={this.state.heardAboutSadagaat === 'Social Media'}
                                                        />
                                                        <label className="form-check-label" for="">
                                                            {t('Social Media')}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label>
                                                {t('what is the suitable time for you to volunteer in Sadagaat?')}
                                                </label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="volunteeredPeriod"
                                                            id="1"
                                                            value='Morning time'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.volunteeredPeriod === 'Morning time'}
                                                        />
                                                        <label className="form-check-label" for="1">
                                                            {t('Morning time')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="volunteeredPeriod"
                                                            id=""
                                                            value ='Evening time'
                                                            checked={this.state.volunteeredPeriod === 'Evening time'}
                                                            onChange ={this.handleChange}

                                                        />
                                                        <label className="form-check-label" for="">
                                                            {t('Evening time')}
                                                        </label>
                                                    </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label>
                                                    {t('Would you like us to send a newsletter about Sadagaat work in your email?')}
                                                </label>
                                                <div className="form-check- form-inline">
                                                    <div className="form-check form-inline">

                                                        <input 
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="receiveEmails" 
                                                            id="1"
                                                            value = 'true'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.receiveEmails === 'true'}
                                                        />
                                                        <label className="form-check-label" for="1">
                                                            {t('Yes')}
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-inline">

                                                        <input
                                                            className="form-check-input" 
                                                            type="radio"
                                                            name="receiveEmails" 
                                                            id="" 
                                                            value = 'false'
                                                            onChange ={this.handleChange}
                                                            checked={this.state.receiveEmails === 'false'}
                                                        />
                                                        <label className="form-check-label" for="">
                                                             {t('No')}
                                                        </label>
                                                    </div>
                                            </div>
                                            
                                        </div>
                                        <div className="form-group">
                                            <button className="btn text-white btn-theme-green btn-lg btn-block mt-15"
                                                 type="submit" >
                                                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    {t('Submit')}
                                            </button>
                                        </div>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>

        )
    }

}export default withTranslation()(VolunteerForm);