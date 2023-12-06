import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';

export default function AddAppoint() {
  return (
    <div>
        <h3>Appointment Form</h3>
      <p>if you would like to arrange for a consultation appointment with Dr.Salman, please filll out this Appointment Form and we will get back to you as soon as possible</p>

      <Form className='pt-5'>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Appointment Date
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="MM/DD/YYYY" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Appointment Time
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="HH:MM AM" /></Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        
          {/* <Col sm="10"><Form.Control type="text" placeholder="Full Name"  /></Col> */}
          
        <Col className='mb-4' sm="5"><Form.Control type="email" className='rounded' placeholder="First Name" /></Col>
        <Col sm="5"><Form.Control type="email" className='rounded' placeholder="Last Name" /></Col>
      
        
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          Address
        </Form.Label>
        
        <Col sm="10" className='mb-4'>
          <Form.Control className='mb-4' type="password" placeholder="Street Address" />
          <Form.Control type="password" placeholder="Atreet Address Line 2" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          
        </Form.Label>
        
        <Col className='mb-4' sm="5"><Form.Control type="email" className='rounded' placeholder="City" /></Col>
        <Col sm="5"><Form.Control type="email" className='rounded' placeholder="State" /></Col>
        
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
          
        </Form.Label>
        
        <Col className='mb-4' sm="5"><Form.Control type="email" className='rounded' placeholder="Postal/Zip Code" /></Col>
        <Col sm="5"><Form.Control type="email" className='rounded' placeholder="Country" /></Col>
        
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Date of birth
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="MM/DD/YYYY" /></Col>
      </Form.Group>
      {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Contact number
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="Patient Phone" /></Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Fax number
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="Patient Phone" /></Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Official email
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="Patient Phone" /></Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Personal email
        </Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="Patient Phone" /></Col>
      </Form.Group> */}

      {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
        Doctor Name
        </Form.Label>
        
          
          
        <Col className='mb-4' sm="5"><Form.Control type="email" className='rounded' placeholder="First Name" /></Col>
        <Col sm="5"><Form.Control type="email" className='rounded' placeholder="Last Name" /></Col>
      
        
      </Form.Group> */}

      {/* <Form.Group as={Row}  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">Office address
        
</Form.Label>
        <Col className='mb-4' sm="10"><Form.Control as="textarea" rows={5} /></Col>
        
      </Form.Group>

      <Form.Group as={Row}  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">Mailing address
</Form.Label>
        <Col className='mb-4' sm="10"><Form.Control as="textarea" rows={5} /></Col>
        
      </Form.Group>

      <Form.Group as={Row}  className="mb-3" search-field controlId="formPlaintextEmail">
        <Form.Label column sm="2">About
</Form.Label>
        <Col className='mb-4' sm="10"><Form.Control as="textarea" className="h-auto" rows={5} /></Col>
        
      </Form.Group>
    

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Images for doctor profile</Form.Label>
        <Col className='mb-4' sm="10"><Form.Control type="file" size="lg" /></Col>
        
      </Form.Group> */}

      <Container>
  <Row className="justify-content-md-center">
    
    <Col md="auto"><Link to='/doctor/list'><Button variant="success" type="submit">Submit</Button></Link></Col>
    
  </Row>
  
  
</Container>

      

    </Form>
    </div>
  )
}
