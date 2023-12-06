import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import "./newlogin.css"


export default function Newlogin() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [error, setError] = React.useState(false);

    const handleLogin=()=>{
        console.warn(username,password)
        if(!username || !password)
        {
          setError(true)
          return false;
        }
    }

  return (
    <div className='logtopmargin'>
        <div>

    <div className=''>
<div className="container ">
	<div className="row shadow-lg">
		<div className="col-md-3 bg-col-md-3">
			<div className="contact-info">
				<img src={ require("../../assets/images/login-icon-001.png")} alt="image"/>
				<h2>Login</h2>
        <h4>Please fill this form in a decent manner</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				

				<div className="form-group">
				  <label className="control-label col-sm-5" for="lname"><span className='text-danger'>*</span>Username:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="username" placeholder="Username" name="username"
                    onChange={(e)=>setUsername(e.target.value)} value={username}
                    />
				  </div>
				</div>
                { error && !username && <span className="invalid-input">Enter valid Username</span>}
                

                <div className="form-group">
				  <label className="control-label col-sm-5" for="password"><span className='text-danger'>*</span>Password:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="password" placeholder="Password" name="password"
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
				  </div>
				</div>
                { error && !password && <span className="invalid-input">Enter valid password</span>}

                

				<div className="form-group contact-form-login-btn">        
				  <div className="col-sm-offset-2 col-sm-15 col-lg-10">
					<Link to="#"><button type="submit" onClick={handleLogin} className="btn btn-default">Submit</button></Link>
				  </div>
				</div>
        

        
        <Form className="pt-3">
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

                  <div className="login-form-fbconnect mb-2  col-lg-20">
                    <button type="button" className="btn col-sm-20 btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/signup" className="text-primary-c">Create New Account</Link>
                  </div>
          </Form>
          


			</div>
		</div>
	</div>
</div>

</div>
</div>
    </div>
  )
}
