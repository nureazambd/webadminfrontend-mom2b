import React, { useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, withRouter, useNavigate } from 'react-router-dom';
import "./LoginPage.css"

export default function LoginPage() {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [error, setError] = React.useState(false);
    // const navigate = useNavigate();

    useEffect(()=>{
        
    })
    const handleLogin=()=>{
        console.warn(user,password)
        if(!user || !password)
        {
          setError(true)
          return false;
        }
    }
  return (
    <div>
        

        {/* <Form>
        <Container>
        <h2 md="auto" className='mb-5'>LoginPage Page</h2>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="5">
          <Form.Control type='email' placeholder='Username' 
          onChange={(e)=>setUser(e.target.value)} value={user}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="5">
          <Form.Control type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)} value={password}
          />
        </Col>
      </Form.Group>

      
  <Row className="justify-content-md-center">
    
    <Col ><Link ><Button onClick={handleLogin} variant="success" type="submit">Submit</Button></Link></Col>
    
  </Row>
  
  
</Container>
    </Form> */}


<div className="wrapper">
        <div className="logo">
            <img src={ require("../../assets/images/profile-icon-w120.png")} alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Login
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"
                onChange={(e)=>setUser(e.target.value)} value={user}
                />
            </div>
            {error && !user && <span className='invalid-input'>Enter valid Username</span>}
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)} value={password}
                />
            </div>
            {error && !password && <span className='invalid-input'>Enter valid Password</span>}
            <Link to="#"><button onClick={handleLogin} className="btn mt-3">Login</button></Link>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <Link to="#">Sign up</Link>
        </div>
    </div>

    </div>
  )
}


