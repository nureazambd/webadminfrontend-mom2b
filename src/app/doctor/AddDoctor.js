import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';
import "./adddoctor.css"

export default function Adddoctor() {

  const [dfname, setDfname] = React.useState("");
  const [dlname, setDlname] = React.useState("");
  const [dstreetaddress1, setDstreetaddress1] = React.useState("");
  const [dstreetaddress2, setDstreetaddress2] = React.useState("");
  const [dcity, setDcity] = React.useState("");
  const [dstate, setDstate] = React.useState("");
  const [dpostal, setDpostal] = React.useState("");
  const [dcountry, setDcountry] = React.useState("");
  const [dphone, setDphone] = React.useState("");
  const [dmobile, setDmobile] = React.useState("");
  const [dfax, setDfax] = React.useState("");
  const [dofficeemail, setDofficeemail] = React.useState("");
  const [dpersonalemail, setDpersonalemail] = React.useState("");
  const [dofficeaddress, setDofficeaddress] = React.useState("");
  const [dmailingaddress, setDmailingaddress] = React.useState("");
  const [dabout, setDabout] = React.useState("");
  const [dimage, setDimage] = React.useState("");

  const [error, setError] = React.useState(false);

  const handleAddDoctor=()=>{
      console.warn(dfname, dlname)
      if(!dfname || !dlname || !dstreetaddress1 || !dstreetaddress2 || !dcity || !dstate
        || !dpostal || !dcountry || !dphone || !dmobile || !dfax || !dofficeemail || !dofficeaddress 
        || !dmailingaddress || !dabout || !dimage
        )
      {
        setError(true)
        return false;
      }
  }

  return (
    <div className=''>
    <div className=''>
<div className="container ">
	<div className="row shadow-lg">
		<div className="col-md-3 bg-col-md-3">
			<div className="contact-info">
				<img src={ require("../../assets/images/doctor-icon.png")} alt="image"/>
				<h2>Add Doctor</h2>
				{/* <h4>We would love to hear from you !</h4> */}
        <h4>Please fill this form in a decent manner</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-5" for="fname"><span className='text-danger'>*</span>Doctor Name:</label>
				  <div className="col-sm-10 d-flex">

					<input type="text" className="form-control mr-2" id="fname" placeholder="*First Name" name="fname"
          onChange={(e)=>setDfname(e.target.value)} value={dfname}
          />
          <input type="text" className="form-control ml-2" id="lname" placeholder="*Last Name" name="lname"
          onChange={(e)=>setDlname(e.target.value)} value={dlname}
          />
          
				  </div>
				</div>
        <div className=''>
        { error && !dfname && <span className="invalid-input">Enter valid first name</span>}
        { error && !dlname && <span className="invalid-input pt-4">Enter valid last name</span>}
        </div>
        
				<div className="form-group">
				  <label className="control-label col-sm-5" for="daddress"><span className='text-danger'>*</span>Doctor Address:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="dsa" placeholder="*Street Address" name="dsa"
          onChange={(e)=>setDstreetaddress1(e.target.value)} value={dstreetaddress1}
          />
				  </div>
				</div>
        { error && !dstreetaddress1 && <span className="invalid-input pb-2 pt-2">Enter valid street address 1</span>}
				<div className="form-group">
				  {/* <label className="control-label col-sm-2" for="email">Email:</label> */}
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="dsa2" placeholder="Street Address Line 2" name="dsa2"
          onChange={(e)=>setDstreetaddress2(e.target.value)} value={dstreetaddress2}
          />
				  </div>
				</div>
        {/* { error && !dstreetaddress2 && <span className="invalid-input">Enter valid street address 2</span>} */}

        <div className="form-group">
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="city" placeholder="*city" name="city"
          onChange={(e)=>setDcity(e.target.value)} value={dcity}
          />
          <input type="text" className="form-control ml-2" id="state" placeholder="State" name="state"
          onChange={(e)=>setDstate(e.target.value)} value={dstate}
          />
				  </div>
				</div>
        <div className=''>
        { error && !dcity && <span className="invalid-input pb-2 pt-2">Enter valid city</span>}
        {/* { error && !dstate && <span className="invalid-input">Enter valid state</span>} */}
        </div>

        <div className="form-group">
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="zip" placeholder="Postal/Zip Code" name="zip"
          onChange={(e)=>setDpostal(e.target.value)} value={dpostal}
          />
          <input type="text" className="form-control ml-2" id="country" placeholder="*Country" name="country"
          onChange={(e)=>setDcountry(e.target.value)} value={dcountry}
          />
				  </div>
				</div>

        <div className=''>
        {/* { error && !dpostal && <span className="invalid-input">Enter valid postal/zip</span>} */}
        { error && !dcountry && <span className="invalid-input pb-2 pt-2">Enter valid country</span>}
        </div>
				
        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Phone number:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Phone Number" name="phone"
          onChange={(e)=>setDphone(e.target.value)} value={dphone}
          />
				  </div>
				</div>
        {/* { error && !dphone && <span className="invalid-input">Enter valid phone number</span>} */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Mobile number:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Mobile Number" name="dmobile"
          onChange={(e)=>setDmobile(e.target.value)} value={dmobile}
          />
				  </div>
				</div>
        { error && !dmobile && <span className="invalid-input">Enter valid mobile number</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Fax number:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Fax Number" name="product"
          onChange={(e)=>setDfax(e.target.value)} value={dfax}
          />
				  </div>
				</div>
        {/* { error && !dfax && <span className="invalid-input">Enter valid fax number</span>} */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Official email:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Official email" name="officeEmail"
          onChange={(e)=>setDofficeemail(e.target.value)} value={dofficeemail}
          />
				  </div>
				</div>
        {/* { error && !dofficeemail && <span className="invalid-input">Enter valid office email</span>} */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Personal email:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="text" placeholder="Personal email" name="product"
          onChange={(e)=>setDpersonalemail(e.target.value)} value={dpersonalemail}
          />
				  </div>
				</div>
        { error && !dpersonalemail && <span className="invalid-input">Enter valid personal email</span>}

        {/* <div className="form-group">
				  <label className="control-label col-sm-5" for="text">Doctor Name:</label>
				  <div className="col-sm-10 d-flex">
					<input type="text" className="form-control mr-2" id="text" placeholder="First Name" name="product"/>
          <input type="text" className="form-control ml-2" id="text" placeholder="Last Name" name="product"/>
				  </div>
				</div> */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment">Office Address:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setDofficeaddress(e.target.value)} value={dofficeaddress}></textarea>
				  </div>
				</div>
        {/* { error && !dofficeaddress && <span className="invalid-input">Enter valid office address</span>} */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment">Mailing address:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setDmailingaddress(e.target.value)} value={dmailingaddress}></textarea>
				  </div>
				</div>
        {/* { error && !dmailingaddress && <span className="invalid-input">Enter valid mailing address</span>} */}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="comment"><span className='text-danger'>*</span>About:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment" onChange={(e)=>setDabout(e.target.value)} value={dabout}></textarea>
				  </div>
				</div>
        { error && !dabout && <span className="invalid-input">Enter valid about</span>}

        <div className="form-group">
				  <label className="control-label col-sm-5" for="text"><span className='text-danger'>*</span>Image for doctor profile:</label>
				  <div className="col-sm-10">
					<input type="file" className="form-control" id="text"  name="product"
          onChange={(e)=>setDimage(e.target.value)} value={dimage}
          />
				  </div>
				</div>
        { error && !dimage && <span className="invalid-input">Enter valid image</span>}

        

				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<Link to="#"><button type="submit" onClick={handleAddDoctor} className="btn btn-default">Submit</button></Link>
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
