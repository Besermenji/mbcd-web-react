import React, { Component } from 'react';
import './css/login.css';

class Login extends Component {
 render() {
   return (
     <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-4 login-margin-top">
            <div className="row">
              <div className="col-md-6 login-border">
                <div className="row">
               		<div className="col-md-12">
               			<form>

               				<div className="form-group">
               					<label for="exampleInputEmail1">
               						Email address
               					</label>
               					<input type="email" className="form-control" id="exampleInputEmail1" />
               				</div>

               				<div className="form-group">
               					<label for="exampleInputPassword1">
               						Password
               					</label>
               					<input type="password" className="form-control" id="exampleInputPassword1" />
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
export default Login;
