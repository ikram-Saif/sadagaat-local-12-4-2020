(this.webpackJsonpsadagaat_local=this.webpackJsonpsadagaat_local||[]).push([[31],{630:function(e,a,t){"use strict";function n(e){throw new Error('"'+e+'" is read-only')}t.r(a);var r=t(19),l=t(9),o=t(24),c=t(25),s=t(27),m=t(26),i=t(17),u=t(0),d=t.n(u),h=t(65),f=(t(16),t(21)),g=t(71),p=t(102),E=t(32),v=t.n(E);t(106);var b=function(e){Object(s.a)(t,e);var a=function(e){function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,n=Object(i.a)(e);if(a()){var r=Object(i.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(m.a)(this,t)}}(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).clearState=function(){e.setState({form:Object(l.a)(Object(l.a)({},e.state.form),{},{name:"",gender:"FEMALE",ageGroup:"15-25",phoneNumber:"",secondPhoneNumber:"",email:"",bloodGroup:"AB",educationLevel:"Secondary School",languages:"",studyField:"",job:"",country:"",city:"",cityProjects:"",volunteeredBefore:"",heardAboutSadagaat:"",volunteerTime:"",vacationTime:"",countryProjects:"",volunteeredPeriod:"",volunteeredProjects:"",receiveEmails:""})})},e.handleFormErrorMessage=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.props.t;""===a.target.value?a.target.setCustomValidity(n("fill this field")):a.target.setCustomValidity(t)},e.handleChange=function(a){e.setState({form:Object(l.a)(Object(l.a)({},e.state.form),{},Object(r.a)({},a.target.name,a.target.value))})},e.handleSubmit=function(a){a.preventDefault(),Object(f.g)(e.state.form).then((function(a){e.clearState(),e.setState({response:Object(l.a)(Object(l.a)({},e.state.response),{},{message:"Your Form Submitted Successfully",styleClass:"success-msg"})})})).catch((function(a){var t="";"Request failed with status code 401"===a.message&&(Object(f.d)(),n("message"),t="Please Login Again"),"Network Error"===a.message?(n("message"),t="Network Error"):(n("message"),t="something went wrong try again later"),e.setState({response:Object(l.a)(Object(l.a)({},e.state.response),{},{message:t,styleClass:"error-msg"})})})),g.animateScroll.scrollTo(70)},e.state={form:{name:"",gender:"FEMALE",ageGroup:"15-25",phoneNumber:"",secondPhoneNumber:"",email:"",bloodGroup:"AB",educationLevel:"Secondary School",languages:"",studyField:"",job:"",country:"",city:"",cityProjects:"",volunteeredBefore:"",heardAboutSadagaat:"",volunteerTime:"",vacationTime:"",countryProjects:"",volunteeredPeriod:"",volunteeredProjects:"",receiveEmails:""},response:{message:"",styleClass:""},dob:v()()},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.props.t;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"main-content"},d.a.createElement(h.a,{name:a("Volunteer Registration"),coverImage:"volunteer-bg-img"}),d.a.createElement("section",null,d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-8 col-md-offset-2"},d.a.createElement("div",{className:"tab-content"},d.a.createElement("div",{className:"tab-pane active p-15",id:"register-tab"},d.a.createElement("form",{id:"reg-form",name:"volunteer-form",className:"register-form",onSubmit:this.handleSubmit},d.a.createElement("div",{className:"icon-box mb-0 p-0"},d.a.createElement("h4",{className:"text-gray pt-10 mt-0 mb-30"},a("Fill Your Volunteering Form"))),d.a.createElement("div",{className:"".concat(this.state.response.styleClass," bold"),role:"alert"},d.a.createElement("p",null," ",a(this.state.response.message)," ")),d.a.createElement("p",{className:"text-gray"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-12 "},d.a.createElement("label",{className:"control-label"},a("name")),d.a.createElement("input",{name:"name",className:"form-control",type:"text",onChange:this.handleChange,pattern:"^([A-Za-z\\u0621-\\u064A]+)\\s([A-Za-z\\u0621-\\u064A]+)(\\s[A-Za-z\\u0621-\\u064A]+)?(\\s[A-Za-z\\u0621-\\u064A]+)?([A-Za-z\\u0621-\\u064A\\s]+)?$",title:a("Please enter your fullName"),value:this.state.form.name,required:"required",onInvalid:function(t){return e.handleFormErrorMessage(t,a("Please enter your fullName"))},onInput:function(e){e.target.setCustomValidity(a(""))}}))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-5"},d.a.createElement("label",{for:"",className:"control-label float-left"},a("Gender")),d.a.createElement("select",{name:"gender",className:"form-control float-right",onChange:this.handleChange,value:this.state.form.gender,required:"required"},d.a.createElement("option",{name:"gender"},a("FEMALE")),d.a.createElement("option",{name:"gender"},a("MALE")))),d.a.createElement("div",{className:"form-group required col-md-7"},d.a.createElement("label",{className:"control-label"},a("Age Range")),d.a.createElement("div",{className:"form-check- form-inline"},d.a.createElement("div",{className:"radio-inline "},d.a.createElement("input",{className:"form-check-input form",id:"1",type:"radio",name:"ageGroup",value:"15-25",checked:"15-25"===this.state.form.ageGroup,onChange:this.handleChange}),d.a.createElement("label",{className:"form-check-label",for:"1"},"15-25")),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{id:"2",className:"form-check-input",type:"radio",name:"ageGroup",value:"25-35",onChange:this.handleChange,checked:"25-35"===this.state.form.ageGroup}),d.a.createElement("label",{className:"form-check-label",for:"2"},"25-35")),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"ageGroup",id:"3",value:"35-45",onChange:this.handleChange,checked:"35-45"===this.state.form.ageGroup}),d.a.createElement("label",{className:"form-check-label",for:"3"},"35-45")),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"ageGroup",id:"4",value:"45-",checked:"45-"===this.state.form.ageGroup,onChange:this.handleChange}),d.a.createElement("label",{className:"form-check-label",for:"3"},"45-"))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",{for:"",className:"control-label"},a("Phone"),"."),d.a.createElement("small",{className:"font-12 text-gray"},"   "),d.a.createElement("input",{name:"phoneNumber",className:"form-control",type:"tel",onChange:this.handleChange,pattern:"^(0[0-9]{9})|(00[0-9]{12})$",title:a("Enter a valid phone number with 10 number or 14"),value:this.state.form.phoneNumber,required:"required",onInvalid:function(t){return e.handleFormErrorMessage(t,a("Enter a valid phone number with 10 number or 14"))},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("Additional Phone")),d.a.createElement("small",{className:"font-12 text-gray"},"   "),d.a.createElement("input",{name:"secondPhoneNumber",className:"form-control",type:"tele",onChange:this.handleChange,value:this.state.form.secondPhoneNumber,pattern:"^(0[0-9]{9})|(00[0-9]{12})$",title:a("Enter a valid phone number with 10 number or 14"),onInvalid:function(t){return e.handleFormErrorMessage(t,a("Enter a valid phone number with 10 number or 14"))},onInput:function(e){e.target.setCustomValidity(a(""))}}))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-8"},d.a.createElement("label",{for:"",className:"control-label"},a("E-Mail")),d.a.createElement("input",{id:"",name:"email",className:"form-control",type:"text",onChange:this.handleChange,pattern:"^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-z]{2,8})(\\.[a-z]{2,8})?$",title:a("that email address is invalid"),value:this.state.form.email,required:"required",onInvalid:function(t){return e.handleFormErrorMessage(t,a("that email address is invalid"))},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group required col-md-4"},d.a.createElement("label",{className:"control-label"},a("Blood Group")),d.a.createElement("select",{name:"bloodGroup",className:"form-control float-right",value:this.state.form.bloodGroup,onChange:this.handleChange},d.a.createElement("option",null,"AB"),d.a.createElement("option",null,"A"),d.a.createElement("option",null,"B"),d.a.createElement("option",null,"O")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("Educational Level")),d.a.createElement("select",{name:"educationLevel",className:"form-control float-right",value:this.state.form.educationLevel,onChange:this.handleChange},d.a.createElement("option",null,a("Secondary School")),d.a.createElement("option",null,a("University Degree")))),d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("Languages you Know?")),d.a.createElement("input",{name:"languages",className:"form-control",type:"text",pattern:"^[^\\s].+[^\\s]$",onChange:this.handleChange,value:this.state.form.languages,onInvalid:function(t){return e.handleFormErrorMessage(t,a("your value must not be white space"))},onInput:function(e){e.target.setCustomValidity(a(""))}}))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("What did you Study(or are studding)?")),d.a.createElement("input",{name:"studyField",className:"form-control",type:"text",pattern:"^[^\\s].+[^\\s]$",value:this.state.form.studyField,onChange:this.handleChange,onInvalid:function(t){return e.handleFormErrorMessage(t,a("your value must not be white space"))},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("If you currently work , what is your job?")),d.a.createElement("input",{name:"job",className:"form-control",type:"text",pattern:"^[^\\s].+[^\\s]$",value:this.state.form.job,onChange:this.handleChange,onInvalid:function(t){return e.handleFormErrorMessage(t,a("your value must not be white space"))},onInput:function(e){e.target.setCustomValidity(a(""))}}))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",{for:""},a("In which State do you live ?")),d.a.createElement("input",{id:"",name:"country",className:"form-control",type:"text",pattern:"^[^\\s].+[^\\s]$",value:this.state.form.country,onChange:this.handleChange,onInvalid:function(t){return e.handleFormErrorMessage(t,a("your value must not be white space"))},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("In which city?")),d.a.createElement("input",{id:"city",name:"city",className:"form-control",type:"text",value:this.state.form.city,pattern:"^[^\\s].+[^\\s]$",onChange:this.handleChange,onInvalid:function(t){return e.handleFormErrorMessage(t,a("your value must not be white space"))},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("Did Sadagaat executed any projects in your State?")),d.a.createElement("div",{className:"form-check- form-inline"},d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"cityProjects",value:"yes",onChange:this.handleChange,checked:"yes"===this.state.form.cityProjects}),d.a.createElement("label",{className:"form-check-label"},a("Yes"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"cityProjects",id:"",value:"no",onChange:this.handleChange,pattern:"^[^\\s].+[^\\s]$",checked:"no"===this.state.form.cityProjects}),d.a.createElement("label",{className:"form-check-label",for:""},a("No"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"cityProjects",value:"dont",onChange:this.handleChange,checked:"dont"===this.state.form.cityProjects}),d.a.createElement("label",{className:"form-check-label",for:""},a("I Dont Know")))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",null,a("Did you volunteer in Sadagaat before?")),d.a.createElement("div",{className:"form-check- form-inline"},d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"volunteeredBefore",id:"1",value:"yes",onChange:this.handleChange,checked:"yes"===this.state.form.volunteeredBefore}),d.a.createElement("label",{className:"form-check-label",for:"1"},a("Yes"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"volunteeredBefore",value:"no",onChange:this.handleChange,checked:"no"===this.state.form.volunteeredBefore}),d.a.createElement("label",{className:"form-check-label",for:""},a("No"))))),d.a.createElement("div",{className:"form-group required col-md-6"},d.a.createElement("label",{for:""},a("If yes , Since when?")),d.a.createElement("input",{id:"date",name:"volunteerTime",className:"form-control",type:"date",value:this.state.form.volunteerTime,onChange:this.handleChange,max:v()().format("YYYY-MM-DD"),onInvalid:function(e){return a("enter date no later than")+v()().format("YYYY-MM-DD")},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group col-md-12"},d.a.createElement("label",{for:""},a("What projects did you participated in with Sadagaat?")),d.a.createElement("input",{id:"",name:"volunteeredProjects",className:"form-control",type:"text",pattern:"^[^\\s].+[^\\s]$",onChange:this.handleChange,value:this.state.form.volunteeredProjects,onInvalid:function(t){return e.handleFormErrorMessage(t,a("your value must not be white space"))},onInput:function(e){e.target.setCustomValidity(a(""))}})),d.a.createElement("div",{className:"form-group col-md-12"},d.a.createElement("label",null,a("How did you know about Sadagaat?")),d.a.createElement("div",{className:"form-check- form-inline"},d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"heardAboutSadagaat",id:"1",value:"Friends",onChange:this.handleChange,checked:"Friends"===this.state.form.heardAboutSadagaat}),d.a.createElement("label",{className:"form-check-label",for:"1"},a("Friends"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"heardAboutSadagaat",id:"",value:"NewsPaper",onChange:this.handleChange,checked:"NewsPaper"===this.state.form.heardAboutSadagaat}),d.a.createElement("label",{className:"form-check-label",for:""},a("NewsPaper , magazzen"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"heardAboutSadagaat",value:"Social Media",onChange:this.handleChange,checked:"Social Media"===this.state.form.heardAboutSadagaat}),d.a.createElement("label",{className:"form-check-label",for:""},a("Social Media")))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"form-group col-md-12"},d.a.createElement("label",null,a("what is the suitable time for you to volunteer in Sadagaat?")),d.a.createElement("div",{className:"form-check- form-inline"},d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"volunteeredPeriod",id:"1",value:"Morning time",onChange:this.handleChange,checked:"Morning time"===this.state.form.volunteeredPeriod}),d.a.createElement("label",{className:"form-check-label",for:"1"},a("Morning time"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"volunteeredPeriod",value:"Evening time",onChange:this.handleChange,checked:"Evening time"===this.state.form.volunteeredPeriod}),d.a.createElement("label",{className:"form-check-label",for:""},a("Evening time")))),d.a.createElement("div",{className:"form-group col-md-12"},d.a.createElement("label",null,a("Would you like us to send a newsletter about Sadagaat work in your email?")),d.a.createElement("div",{className:"form-check- form-inline"},d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"receiveEmails",value:"true",onChange:this.handleChange,checked:"true"===this.state.form.receiveEmails}),d.a.createElement("label",{className:"form-check-label"},a("Yes"))),d.a.createElement("div",{className:"radio-inline"},d.a.createElement("input",{className:"form-check-input",type:"radio",name:"receiveEmails",id:"",value:"false",onChange:this.handleChange,checked:"false"===this.state.form.receiveEmails}),d.a.createElement("label",{className:"form-check-label",for:""},a("No"))))),d.a.createElement("div",{className:"form-group"},d.a.createElement("button",{className:"btn text-white btn-theme-green btn-lg btn-block mt-15",type:"submit"},d.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),a("Submit"))))))))))))))}}]),t}(u.Component);a.default=Object(p.a)()(b)}}]);
//# sourceMappingURL=31.cf305ad1.chunk.js.map