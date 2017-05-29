import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customField } from '../common/customField.react';

import * as validates from '../../helpers/form_validation';

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
               				  <Field name="email"
                               type="email"
                               component={customField} label="Email"
                               className="form-control"
                               validate={[validates.required, validates.email]}
                         />
               				</div>

               				<div className="form-group">
               					<label htmlFor="userPassword">
               						Password
               					</label>
                        <Field name="userPassword"
                               type="password"
                               component={customField}
                               className="form-control"
                               validate={[validates.required, validates.password]}
                        />
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
