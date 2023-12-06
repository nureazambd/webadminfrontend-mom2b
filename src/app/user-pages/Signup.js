import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import "./signup.css"


export default function Signup() {
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repassword, setRepassword] = React.useState("");

    const [error, setError] = React.useState(false);

    const handleSignup=()=>{
        console.warn(fname,password)
        if(!fname || !lname || !username || !email || !password || !repassword)
        {
          setError(true)
          return false;
        }
    }

  return (
    <div className='topmargin'>
        <div>

    <div className=''>
<div className="container ">
	<div className="row shadow-lg">
		<div className="col-md-3 bg-col-md-3">
			<div className="contact-info">
				<img src={ require("../../assets/images/signup.png")} alt="image"/>
				<h2>Sign Up</h2>
        <h4>Please fill this form in a decent manner</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-5" for="fname"><span className='text-danger'>*</span>Name:</label>
				  <div className="col-sm-10 d-flex">

					<input type="text" className="form-control mr-2" id="fname" placeholder="First Name" name="fname"
                    onChange={(e)=>setFname(e.target.value)} value={fname}
                    />
                    {/* { error && !fname && <span className="invalid-input">Enter valid Fname</span>} */}

                    <input type="text" className="form-control ml-2" id="fname" placeholder="Last Name" name="fname"
                     onChange={(e)=>setLname(e.target.value)} value={lname}
                    />
                    
          
				  </div>
                  {/* { error && !fname && <span className="invalid-input">Enter valid Fname</span>} */}
                  
                  
				</div>
                <div>
                { error && !fname && <span className="invalid-input">Enter valid Fname</span>}
                { error && !lname && <span className="invalid-input mt-2">Enter valid Lname</span>}
                </div>

				<div className="form-group">
				  <label className="control-label col-sm-5" for="lname"> <span className='text-danger'>*</span> Username:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="username" placeholder="Username" name="username"
                    onChange={(e)=>setUsername(e.target.value)} value={username}
                    />
				  </div>
				</div>
                { error && !username && <span className="invalid-input">Enter valid Username</span>}
                <div className="form-group">
				  <label className="control-label col-sm-5" for="email"><span className='text-danger'>*</span>Email:</label>
				  <div className="col-sm-10">          
					<input type="email" className="form-control" id="email" placeholder="Email" name="email"
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
				  </div>
				</div>
                { error && !email && <span className="invalid-input">Enter valid email</span>}

                <div className="form-group">
				  <label className="control-label col-sm-5" for="country">Country:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="country" placeholder="Country" name="country"
                    onChange={(e)=>setCountry(e.target.value)} value={country}
                    />
				  </div>
				</div>
                {/* { error && !country && <span className="invalid-input">Enter valid country</span>} */}

                <div className="form-group">
				  <label className="control-label col-sm-5" for="password"><span className='text-danger'>*</span>Password:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="password" placeholder="Password" name="password"
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
				  </div>
				</div>
                { error && !password && <span className="invalid-input">Enter valid password</span>}

                <div className="form-group">
				  <label className="control-label col-sm-5" for="repassword"><span className='text-danger'>*</span>Re-Password:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="repassword" placeholder="Re-Password" name="repassword"
                    onChange={(e)=>setRepassword(e.target.value)} value={repassword}
                    />
				  </div>
				</div>
                { error && !repassword && <span className="invalid-input">Enter valid repassword</span>}        

				<div className="form-group contact-form-reg-btn">        
				  <div className="col-sm-offset-2 col-sm-10">
					<Link to="#"><button type="submit" onClick={handleSignup} className="btn btn-default">Submit</button></Link>
				  </div>
				</div>

                <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/login" className="text-primary-c">Login</Link>
                  </div>


			</div>
		</div>
	</div>
</div>

</div>
</div>
    </div>
  )
}
