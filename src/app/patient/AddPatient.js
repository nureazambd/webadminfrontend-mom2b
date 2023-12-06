import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import "./addpatient.css"

export default function Addpatient() {
  const [pfname, setPfname] = React.useState("");
  const [plname, setPlname] = React.useState("");
  const [psa1, setPsa1] = React.useState("");
  const [psa2, setPsa2] = React.useState("");
  const [pcity, setPcity] = React.useState("");
  const [pstate, setPstate] = React.useState("");
  const [pzip, setPzip] = React.useState("");
  const [pcountry, setPcountry] = React.useState("");
  const [pphone, setPphone] = React.useState("");
  const [pdfname, setPdfname] = React.useState("");
  const [pdlname, setPdlname] = React.useState("");
  const [pmedicalBackground, setPmedicalBackground] = React.useState("");
  const [pedafd, setPedafd] = React.useState("");
  const [pdiagnosis, setPdiagnosis] = React.useState("");
  const [pimage, setPimage] = React.useState("");

  const [error, setError] = React.useState("");
  const handleAddPatient =()=>{
    console.warn(pfname, plname);
    if(!pfname || !plname){
      setError(true);
      return false;
    }
  }



  return (
<div>
     {/* <div className='col-lg-8 col-md-8 ml-auto mr-auto'>
       <h1>Add Patients</h1>

       <Form className=''>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
         <Form.Label column sm="2">
           Patient Name
         </Form.Label>
          
         <Col className='mb-4' sm="5"><Form.Control type="email" className='rounded' placeholder="First Name" /></Col>
         <Col sm="5"><Form.Control type="email" className='rounded' placeholder="Last Name" /></Col>
        
       </Form.Group>

       <Form.Group as={Row} className="mb-3" >
         <Form.Label column sm="2">
           Patient Address
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
         Patient Phone
         </Form.Label>
         <Col className='mb-4' sm="10"><Form.Control type="email" className='rounded' placeholder="Patient Phone" /></Col>
       </Form.Group>

       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
         <Form.Label column sm="2">
         Doctor Name
         </Form.Label>
        
         <Col className='mb-4' sm="5"><Form.Control type="email" className='rounded' placeholder="First Name" /></Col>
         <Col sm="5"><Form.Control type="email" className='rounded' placeholder="Last Name" /></Col>
        
       </Form.Group>

       <Form.Group as={Row}  className="mb-3" controlId="formPlaintextEmail">
         <Form.Label column sm="2">Patient Medical Background
         <p>Include only important and related issues.</p>
 </Form.Label>
         <Col className='mb-4' sm="10"><Form.Control as="textarea" rows={5} /></Col>
        
       </Form.Group>

       <Form.Group as={Row}  className="mb-3" controlId="formPlaintextEmail">
         <Form.Label column sm="2">Examination
 Describe all of the found details, relevant to the patient's current issue.
 </Form.Label>
         <Col className='mb-4' sm="10"><Form.Control as="textarea" rows={5} /></Col>
        
       </Form.Group>

       <Form.Group as={Row}  className="mb-3" search-field controlId="formPlaintextEmail">
         <Form.Label column sm="2">Diagnosis
 </Form.Label>
         <Col className='mb-4' sm="10"><Form.Control as="textarea" className="h-auto" rows={5} /></Col>
        
       </Form.Group>
    
       <Form.Group as={Row} className="mb-3">
         <Form.Label column sm="2">Images for patient profile</Form.Label>
         <Col className='mb-4' sm="10"><Form.Control type="file" size="lg" /></Col>
        
       </Form.Group>

       <Container>
   <Row className="justify-content-md-center">
    
     <Col md="auto"><Link to='/patients/list'><Button variant="success" type="submit">Submit</Button></Link></Col>
    
   </Row>
  
 </Container>

      

     </Form>
    
    </div> */}

    <div className=''>
<div className="container ">
	<div className="row shadow-lg">
		<div className="col-md-3 bg-col-md-3">
			<div className="contact-info">
				<img src={ require("../../assets/images/patient-icon.png")} alt="image"/>
				<h2>Add Patients</h2>
				{/* <h4>We would love to hear from you !</h4> */}
        <h4>Please fill this form in a decent manner</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-5" for="fname"><span className='text-danger'>*</span>Patient Name:</label>
				  <div className="col-sm-10 d-flex">

					<input type="text" className="form-control mr-2" id="fname" placeholder="*First Name" name="fname"
          onChange={(e)=>setPfname(e.target.value)} value={pfname}
          />
          <input type="text" className="form-control ml-2" id="lname" placeholder="*Last Name" name="lname"
          onChange={(e)=>setPlname(e.target.value)} value={plname}
          />
				  </div>
				</div>
        <div className=''>
        { error && !pfname && <span className="invalid-input">Enter valid first name</span>}
        { error && !plname && <span className="invalid-input pt-4">Enter valid last name</span>}
        </div>
				<div className="form-group">
				  <label className="control-label col-sm-5" for="lname"><span className='text-danger'>*</span>Patient Address:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="*Street Address" name="lname"
          onChange={(e)=>setPsa1(e.target.value)} value={psa1}
          />
				  </div>
				</div>
        { error && !psa1 && <span className="invalid-input">Enter valid street address</span>}
				<div className="form-group">
				  {/* <label className="control-label col-sm-2" for="email">Email:</label> */}
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Street Address Line 2" name="email"
          onChange={(e)=>setPsa2(e.target.value)} value={psa2}
          />
				  </div>
				</div>

        <div className="form-group">
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="email" placeholder="*city" name="city"
          onChange={(e)=>setPcity(e.target.value)} value={pcity}
          />
          <input type="text" className="form-control ml-2" id="email" placeholder="State" name="state"
          onChange={(e)=>setPstate(e.target.value)} value={pstate}
          />
				  </div>
				</div>
        { error && !pcity && <span className="invalid-input">Enter valid city</span>}

        <div className="form-group">
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="email" placeholder="Postal/Zip Code" name="zip"
          onChange={(e)=>setPzip(e.target.value)} value={pzip}
          />
          <input type="text" className="form-control ml-2" id="email" placeholder="*Country" name="country"
          onChange={(e)=>setPcountry(e.target.value)} value={pcountry}
          />
				  </div>
				</div>
        { error && !pcountry && <span className="invalid-input">Enter valid country</span>}
				

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Patient Phone:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Patient Phone Number" name="product"
          onChange={(e)=>setPphone(e.target.value)} value={pphone}
          />
				  </div>
				</div>
        { error && !pphone && <span className="invalid-input">Enter valid phone number</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Doctor Name:</label>
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="text" placeholder="First Name" name="product"
          onChange={(e)=>setPdfname(e.target.value)} value={pdfname}
          />
          <input type="text" className="form-control ml-2" id="text" placeholder="Last Name" name="product"
          onChange={(e)=>setPdlname(e.target.value)} value={pdlname}
          />
				  </div>
				</div>

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment">Patient Medical Background:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setPmedicalBackground(e.target.value)} value={pmedicalBackground}></textarea>
				  </div>
				</div>

        <div className="form-group">
				  <label className="control-label col-sm-6" for="comment">Examination Describe all of the found details:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setPedafd(e.target.value)} value={pedafd}></textarea>
				  </div>
				</div>

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment"><span className='text-danger'>*</span>Diagnosis:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setPdiagnosis(e.target.value)} value={pdiagnosis}></textarea>
				  </div>
				</div>
        { error && !pdiagnosis && <span className="invalid-input">Enter valid patient diagnosis</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Image for patient profile:</label>
				  <div className="col-sm-10">
					<input type="file" className="form-control" id="text"  name="image"
          onClick={(e)=>setPimage(e.target.value)} value={pimage}
          />
				  </div>
				</div>
        {/* { error && !pimage && <span className="invalid-input">Enter valid image</span>} */}

        

				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<Link to="#"><button type="submit" className="btn btn-default" onClick={handleAddPatient}>Submit</button></Link>
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
