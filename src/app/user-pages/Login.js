import React, { Component, useEffect } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';




// export class Login extends Component {
const Login =()=> {

  
  
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);


    const handleLogin=()=>{
    console.warn(user,password)
    if(!user || !password){
      setError(true)
      return false;
    }
  }

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="text" placeholder="Username" size="lg" className="h-auto" 
                    onChange={(e)=>setUser(e.target.value)} value={user}
                    />
                  </Form.Group>
                  {error && !user && <span className='invalid-input'>Enter valid Username</span>}
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" 
                     onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
                  </Form.Group>
                  {error && !password && <span className='invalid-input'>Enter valid Password</span>}
                  {/* <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</Link>
                  </div> */}
                  <div className="mt-3">
                    <button className="btn btn-block btn-lg log-bg-color font-weight-medium auth-form-btn" onClick={handleLogin} >SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register-1" className="text-primary-c">Create New Account</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  
}

export default Login;
