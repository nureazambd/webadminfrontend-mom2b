// import React from 'react'
import React, { useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, withRouter, useNavigate } from 'react-router-dom';
import "./RegisterPage.css"


export default function RegisterPage() {
  return (
    <div>

<div className="container">
    <div className="row py-5 mt-4 align-items-center wrapper-register-page">
    
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0 ">
            {/* <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" className="img-fluid mb-3 d-none d-md-block"/> */}
            {/* <img src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1673508420~exp=1673509020~hmac=f538d96e6e3f6dbfb9187dadcd948219b616b94600fa0638638ee3a64a80d33d" alt="" className="img-fluid mb-3 d-none d-md-block rounded shadow-lg"/> */}
            <img src={ require("../../assets/images/RegisterPage-icon2.png")} alt="" className="img-fluid mb-3 d-none d-md-block  rounded-circle px-5 pb-5"/>
            <h1 className='pl-5'>Create an Account</h1>
            <p className="font-italic text-muted mb-0 pl-5">Create account</p>
            {/* <p className="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" className="text-muted">
                <u>Bootstrapious</u></a>
            </p> */}
        </div>

       
        <div className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
                <div className="row ">

                   
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-account text-muted"></i>
                            </span>
                        </div>
                        {/* <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/> */}
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white  border-md"/>
                    </div>


                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-account text-muted"></i>
                            </span>
                        </div>
                        <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-md"/>
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-account text-muted"></i>
                            </span>
                        </div>
                        <input id="username" type="text" name="username" placeholder="Username" className="form-control bg-white border-md"/>
                    </div>


                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-email text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-md"/>
                    </div>

        
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-phone text-muted"></i>
                            </span>
                        </div>
                        <select id="countryCode" name="countryCode" className=" max-wid custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                            <option value="">+88</option>
                            <option value="">usa</option>
                            <option value="">+1</option>
                            <option value="">uk</option>
                            <option value="">+44</option>
                        </select>
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md  pl-3"/>
                    </div>.


                
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-map-marker text-muted"></i>
                            </span>
                        </div>
                        <select id="job" name="jobtitle" className=" max-wid-country form-control custom-select bg-white  border-md">
                            <option value="">Country</option>
                            <option value="">BD</option>
                            <option value="">USA</option>
                            <option value="">UK</option>
                            <option value="">AUE</option>
                        </select>
                    </div>

             
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white  border-md"/>
                    </div>

         
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="mdi mdi-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" className="form-control bg-white  border-md"/>
                    </div>

                   
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <Link to="/" className="btn btn-primary-color btn-block py-3">
                            <span className="font-weight-bold">Create your account</span>
                        </Link>
                    </div>

                   
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                   
                    <div className="form-group col-lg-12 mx-auto">
                        <a href="#" className="btn btn-primary btn-block py-3 btn-facebook">
                            <i className="fa fa-facebook-f mr-2"></i>
                            <span className="font-weight-bold">Continue with Facebook</span>
                        </a>
                        <a href="#" className="btn btn-primary btn-block py-3 btn-twitter">
                            <i className="fa fa-twitter mr-2"></i>
                            <span className="font-weight-bold">Continue with Twitter</span>
                        </a>
                    </div>

                    
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Already Registered? <Link to="/login-page" className="text-primary ml-2">Login</Link></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}
