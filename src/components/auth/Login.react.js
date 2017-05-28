import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmitBind = (...args) => this.onSubmit(...args);
  }

  onSubmit(values) {
    console.log("AADasdlmaskldmaklsdmklasmdklasmdklasmkldmaskld", values);
  }

 render() {
   const {
     handleSubmit,
   } = this.props;
   return (
     <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-4 login-margin-top">
            <div className="row">
              <div className="col-md-6 login-border">
                <div className="row">
               		<div className="col-md-12">
               			<form onSubmit={handleSubmit(this.onSubmitBind)}>

               				<div className="form-group">
               					<label htmlFor="userEmail">
               						Email address
               					</label>
                        <Field name="userEmail"
                               component="input"
                               type="email"
                               className="form-control"
                               id="userEmail"
                               autoFocus
                               />
               				</div>

               				<div className="form-group">
               					<label htmlFor="userPassword">
               						Password
               					</label>
                        <Field name="userPassword" component="input" type="password" className="form-control" id="userPassword"/>
               				</div>
               				<button type="submit" className="btn btn-default pull-right">
               					Submit
               				</button>

               			</form>
               		</div>
               	</div>

              </div>
              <div className="col-md-6">
                <p>facebook</p>
                <p>google</p>
              </div>
            </div>
          </div>
        </div>
     	</div>
   );
 }
}
// Decorate the form component
Login = reduxForm({
  form: 'loginForm' // a unique name for this form
})(Login);

export default Login;
