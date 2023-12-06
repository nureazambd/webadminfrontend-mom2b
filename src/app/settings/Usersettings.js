import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./settings.css"

export default function Usersettings() {
    const [ufname, setUfname] = React.useState("");
    const [usurname, setUsurname] = React.useState("");
    const [umobile, setUmobile] = React.useState("");
    const [uaddressline1, setUaddressline1] = React.useState("");
    const [uaddressline2, setUaddressline2] = React.useState("");
    const [upostcode, setUpostcode] = React.useState("");
    const [ustate, setUstate] = React.useState("");
    const [uarea, setUarea] = React.useState("");
    const [uemailid, setUemailid] = React.useState("");
    const [ueducation, setUeducation] = React.useState("");
    const [ucountry, setUcountry] = React.useState("");
    const [uregion, setUregion] = React.useState("");
    const [uexperience, setUexperience] = React.useState("");
    const [uadditionalDetails, setUadditionalDetails] = React.useState("");

    const [error, setError] = React.useState("");

    const handleUserSetting = ()=>{
        console.warn(ufname, usurname);
        if(!ufname || !usurname || !umobile || !uaddressline1 || !uaddressline2 || !upostcode || !ustate
            || !uarea || !uemailid || !ueducation || !ucountry || !uregion || !uexperience || !uadditionalDetails )
            {
                setError(true);
                return false;
            }
    }


  return (
    <div>

<div className="container  mb-5 wrapper-settings-page">
    <div className="row ">
        <div className="col-md-3 bg-left-setting border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Shah Rukh Khan</span><span className="text-black-50">shahrukh@gmail.com</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                {/* <div className='wrapper-form-field'></div> */}
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels"><span className='text-danger'>*</span>Name</label><input type="text" className="form-control" placeholder="first name"
                    onChange={(e)=>setUfname(e.target.value)} value={ufname}
                    />
                    {error && !ufname && <span className='invalid-input-setting'>Enter valid fname</span>}
                    </div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="surname"
                    onChange={(e)=>setUsurname(e.target.value)} value={usurname}
                    />
                    {error && !usurname && <span className='invalid-input-setting'>Enter valid surname</span>}
                    </div>

                </div>
                
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels"><span className='text-danger'>*</span>Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number"
                    onChange={(e)=>setUmobile(e.target.value)} value={umobile}
                    />
                    { error && !umobile && <span className="invalid-input-setting">Enter valid mobile number</span>}
                    </div>

                    

                    <div className="col-md-12"><label className="labels"><span className='text-danger'>*</span>Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" 
                    onChange={(e)=>setUaddressline1(e.target.value)} value={uaddressline1}
                    />
                    { error && !uaddressline1 && <span className='invalid-input-setting'>Enter valid address</span>}
                    </div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" 
                    onChange={(e)=>setUaddressline2(e.target.value)} value={uaddressline2}
                    />
                    </div>
                    <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" 
                    onChange={(e)=>setUpostcode(e.target.value)} value={upostcode}
                    /></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" 
                    onChange={(e)=>setUstate(e.target.value)}
                    /></div>
                    <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" 
                    onChange={(e)=>setUarea(e.target.value)} value={uarea}
                    /></div>
                    <div className="col-md-12"><label className="labels"><span className='text-danger'>*</span>Email ID</label><input type="text" className="form-control" placeholder="enter email id" 
                    onChange={(e)=>setUemailid(e.target.value)} value={uemailid}
                    />
                    { error && !uemailid && <span className='invalid-input-setting'>Enter valid email</span>}
                    </div>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" 
                    onChange={(e)=>setUeducation(e.target.value)} value={ueducation}
                    /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels"><span className='text-danger'>*</span>Country</label><input type="text" className="form-control" placeholder="country" 
                    onChange={(e)=>setUcountry(e.target.value)} value={ucountry}
                    />
                    { error && !ucountry && <span className='invalid-input-setting'>Enter valid country name</span>}
                    </div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state"
                    onChange={(e)=>setUregion(e.target.value)} value={uregion}
                    /></div>
                </div>
                {/* <div className="mt-5 text-center"><Link to="/"><button className="btn btn-success profile-button" type="button">Save Profile</button></Link></div> */}
                <div className="mt-5 text-center profile-button-color "><Link to="#"><button onClick={handleUserSetting} className="btn btn-default shadow-lg rounded-lg" type="button" >Save Profile</button></Link></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience"
                onChange={(e)=>setUexperience(e.target.value)} value={uexperience}
                /></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details"
                onChange={(e)=>setUadditionalDetails(e.target.value)} value={uadditionalDetails}
                /></div>
            </div>
        </div>
    </div>
</div>
</div>

  )
}
