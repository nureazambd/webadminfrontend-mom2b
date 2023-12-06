import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import "./addappointments.css"

export default function Addappointments() {
//   const [pfname, setPfname] = React.useState("");

  const [appointmentDate, setAppointmentDate] = React.useState("");
  const [appointmentTime, setAppointmentTime] = React.useState("");
  const [afname, setAfname] = React.useState("");
  const [alname, setAlname] = React.useState("");
  const [astreetAddress, setAstreetAddress] = React.useState("");
  const [astreetAddress2, setAstreetAddress2] = React.useState("");
  const [acity, setAcity] = React.useState("");
  const [astate, setAstate] = React.useState("");
  const [azipcode, setAzipcode] = React.useState("");
  const [acountry, setAcountry] = React.useState("");
  const [apatientPhone, setApatientPhone] = React.useState("");
  const [adfname, setAdfname] = React.useState("");
  const [adlname, setAdlname] = React.useState("");
  const [adateOfBirth, setAdateOfBirth] = React.useState("");
  const [aimage, setAimage] = React.useState("");



//   const [plname, setPlname] = React.useState("");
//   const [psa1, setPsa1] = React.useState("");
//   const [psa2, setPsa2] = React.useState("");
//   const [pcity, setPcity] = React.useState("");
//   const [pstate, setPstate] = React.useState("");
//   const [pzip, setPzip] = React.useState("");
//   const [pcountry, setPcountry] = React.useState("");
//   const [pphone, setPphone] = React.useState("");
//   const [pdfname, setPdfname] = React.useState("");
//   const [pdlname, setPdlname] = React.useState("");
//   const [pmedicalBackground, setPmedicalBackground] = React.useState("");
//   const [pedafd, setPedafd] = React.useState("");
//   const [pdiagnosis, setPdiagnosis] = React.useState("");
//   const [pimage, setPimage] = React.useState("");

  const [error, setError] = React.useState("");
  const handleAddPatient =()=>{
    console.warn(appointmentDate, appointmentTime);
    if(!appointmentDate || !appointmentTime){
      setError(true);
      return false;
    }
  }

  return (
    <div>
        <div className=''>
<div className="container ">
	<div className="row shadow-lg">
		<div className="col-md-3 bg-col-md-3">
			<div className="contact-info">
				<img src={ require("../../assets/images/hospital-Addappointments.png")} alt="image"/>
				<h2>Appointment Form</h2>
				{/* <h4>We would love to hear from you !</h4> */}
        <h4>if you would like to arrange for a consultation appointment, please fill out the Appointment Form and we will get back to you as soon as possible</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">

            <div className="form-group">
				  <label className="control-label col-sm-5" for="lname"><span className='text-danger'>*</span>Appointment Date:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="appointmentDate" placeholder="MM/DD/YYYY" name="appointmentDate"
          onChange={(e)=>setAppointmentDate(e.target.value)} value={appointmentDate}
          />
				  </div>
				</div>
        { error && !appointmentDate && <span className="invalid-input">Enter valid appointment date</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="lname"><span className='text-danger'>*</span>Appointment Time:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="appointmentDate" placeholder="HH:MM AM" name="appointmentDate"
          onChange={(e)=>setAppointmentTime(e.target.value)} value={appointmentTime}
          />
				  </div>
				</div>
        { error && !appointmentTime && <span className="invalid-input">Enter valid street address</span>}



				<div className="form-group">
				  <label className="control-label col-sm-5" for="fname"><span className='text-danger'>*</span>Name:</label>
				  <div className="col-sm-10 d-flex">

					<input type="text" className="form-control mr-2" id="fname" placeholder="*First Name" name="fname"
          onChange={(e)=>setAfname(e.target.value)} value={afname}
          />
          <input type="text" className="form-control ml-2" id="lname" placeholder="*Last Name" name="lname"
          onChange={(e)=>setAlname(e.target.value)} value={alname}
          />
				  </div>
				</div>
        <div className=''>
        { error && !afname && <span className="invalid-input">Enter valid first name</span>}
        { error && !alname && <span className="invalid-input pt-4">Enter valid last name</span>}
        </div>
				<div className="form-group">
				  <label className="control-label col-sm-5" for="lname"><span className='text-danger'>*</span>Address:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="*Street Address" name="lname"
          onChange={(e)=>setAstreetAddress(e.target.value)} value={astreetAddress}
          />
				  </div>
				</div>
        { error && !astreetAddress && <span className="invalid-input">Enter valid street address</span>}
				<div className="form-group">
				  {/* <label className="control-label col-sm-2" for="email">Email:</label> */}
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Street Address Line 2" name="email"
          onChange={(e)=>setAstreetAddress2(e.target.value)} value={astreetAddress2}
          />
				  </div>
				</div>

        <div className="form-group">
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="email" placeholder="*city" name="city"
          onChange={(e)=>setAcity(e.target.value)} value={acity}
          />
          <input type="text" className="form-control ml-2" id="email" placeholder="State" name="state"
          onChange={(e)=>setAstate(e.target.value)} value={astate}
          />
				  </div>
				</div>
        { error && !acity && <span className="invalid-input">Enter valid city</span>}

        <div className="form-group">
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="email" placeholder="Postal/Zip Code" name="zip"
          onChange={(e)=>setAzipcode(e.target.value)} value={azipcode}
          />
          <input type="text" className="form-control ml-2" id="email" placeholder="*Country" name="country"
          onChange={(e)=>setAcountry(e.target.value)} value={acountry}
          />
				  </div>
				</div>
        { error && !acountry && <span className="invalid-input">Enter valid country</span>}
				

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Patient Phone:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Patient Phone Number" name="product"
          onChange={(e)=>setApatientPhone(e.target.value)} value={apatientPhone}
          />
				  </div>
				</div>
        { error && !apatientPhone && <span className="invalid-input">Enter valid phone number</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Doctor Name:</label>
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="text" placeholder="First Name" name="product"
          onChange={(e)=>setAdfname(e.target.value)} value={adfname}
          />
          <input type="text" className="form-control ml-2" id="text" placeholder="Last Name" name="product"
          onChange={(e)=>setAdlname(e.target.value)} value={adlname}
          />
				  </div>
				</div>

                <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Date of birth:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Patient Phone Number" name="product"
          onChange={(e)=>setAdateOfBirth(e.target.value)} value={adateOfBirth}
          />
				  </div>
				</div>
				{ error && !adateOfBirth && <span className="invalid-input">Enter valid DOB</span>}

        {/* <div className="form-group">
				  <label className="control-label col-sm-5" for="comment">Patient Medical Background:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setPmedicalBackground(e.target.value)} value={pmedicalBackground}></textarea>
				  </div>
				</div> */}

        {/* <div className="form-group">
				  <label className="control-label col-sm-6" for="comment">Examination Describe all of the found details:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setPedafd(e.target.value)} value={pedafd}></textarea>
				  </div>
				</div> */}

        {/* <div className="form-group">
				  <label className="control-label col-sm-5" for="comment"><span className='text-danger'>*</span>Diagnosis:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setPdiagnosis(e.target.value)} value={pdiagnosis}></textarea>
				  </div>
				</div>
        { error && !pdiagnosis && <span className="invalid-input">Enter valid patient diagnosis</span>} */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Image for patient profile:</label>
				  <div className="col-sm-10">
					<input type="file" className="form-control" id="text"  name="image"
          onClick={(e)=>setAimage(e.target.value)} value={aimage}
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
