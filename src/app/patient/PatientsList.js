import React from 'react'
import "./PatientsList.css"

export default function PatientsList() {
  return (
    <div className='bodyy'>

{/* <div className="container d-flex">
    				<div className="row">
						<h2 id="details">Choose your package</h2>
					</div><br/>
                    
                     
                      
                        <div className="col-md-3" id="home-box">
                            <div className="pricing_header">
                                <h2>Basic User</h2>
                                <div className="space"></div>
    						</div>
                                <ul className="list-group">
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Responsible design</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> 3 examples</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> HTML5 & CSS3</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> PSD included</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> Light and clean</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> Customizible HTML</li>
                                    </ul>
                                
                                <div className="try">
                                    <p className="price">$ 9.99</p>
                                    <a className="btn btn-default" href="#" type="button">Abbonati</a>
                                </div>
                            </div>
                        
                        <div className="col-md-3" id="home-box">
                            <div className="pricing_header">
                                <h2>Premium User</h2>
                                <div className="space"></div>
    						</div>
                                <ul className="list-group">
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Responsible design</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> 3 examples</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> HTML5 & CSS3</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> PSD included</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> Light and clean</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> Customizible HTML</li>
                                    </ul>
                                
                                <div className="try">
                                    <p className="price">$ 44.99</p>
                                    <a className="btn btn-default" href="#" type="button">Abbonati</a>

                                </div>
                            </div>
                        
                        
                        
                        <div className="col-md-3" id="home-box">
                            <div className="pricing_header">
                                <h2>Business User</h2>
                                <div className="space"></div>
							</div>
                                <ul className="list-group">
                                    
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Responsible design</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> 3 examples</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> HTML5 & CSS3</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> PSD included</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Light and clean</li>
                                        <li className="list-group-item off"><span className="glyphicon glyphicon-remove"></span> Customizible HTML</li>
                                    </ul>
                                
                                <div className="try">
                                    <p className="price">$ 79.99</p>
                                    <button className="btn btn-default" href="#" type="button">Abbonati</button>
                                </div>
                            </div>
                        
                        
                        
                        <div className="col-md-3" id="home-box">
                            <div className="pricing_header">
                                <h2>Customize</h2>
                                <div className="space"></div>
							</div>
                                <ul className="list-group">
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Responsible design</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> 3 examples</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> HTML5 & CSS3</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> PSD included</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Light and clean</li>
                                        <li className="list-group-item"><span className="glyphicon glyphicon-ok"></span> Customizible HTML</li>
                                    </ul>
                               
                                <div className="try">
                                    <p className="price">$ 119.99</p>
                                    <button className="btn btn-default" href="#" type="button">Abbonati</button>
                                </div>
                            
                        </div> 
                    </div>   */}


{/* <div className="container"> */}
<div className="">

    	<div className="title">
    		<h3>Patients List</h3>
    	</div>
    	<div className="row">
            {/* <div className="col-md-12">
                <h4>Simple Table</h4>
            </div> */}
            {/* <div className="col-lg-8 col-md-10 ml-auto mr-auto"> */}
            <div className="col-lg-12 col-md-12 ml-auto mr-auto">

            {/* <h4><small>Simple With Actions</small></h4> */}
                <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th >Profile Pic</th>
                            <th>Patient Name</th>
                            <th>Patient Address</th>
                            <th>Patient Phone</th>
                            <th>Doctor Name</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='listHover'>
                            <td className="text-center bg-color-odd">1</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td >Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
    
                            <td className="text-center">2</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/46/65/female-patient-icon-flat-style-eps-vector-44274665.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">3</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">4</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/46/65/female-patient-icon-flat-style-eps-vector-44274665.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Mike Monday</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">5</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Paul Dickens</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>

                        <tr className='listHover'>
                            <td className="text-center bg-color-odd">6</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td >Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
    
                            <td className="text-center">7</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/46/65/female-patient-icon-flat-style-eps-vector-44274665.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">8</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">9</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/46/65/female-patient-icon-flat-style-eps-vector-44274665.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Mike Monday</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">10</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Paul Dickens</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>

                        <tr className='listHover'>
                            <td className="text-center bg-color-odd">11</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td >Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
    
                            <td className="text-center">12</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/46/65/female-patient-icon-flat-style-eps-vector-44274665.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">13</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Andrew Mike</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">14</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/46/65/female-patient-icon-flat-style-eps-vector-44274665.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Mike Monday</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                        <tr className='listHover'>
                            <td className="text-center">15</td>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/64/male-patient-profile-icon-with-circle-shape-flat-vector-43514864.webp" alt="..."/>
                                </div>
                            </td>
                            <td>Paul Dickens</td>
                            <td>Dhaka,BD</td>
                            <td>+88016987548</td>
                            <td>Prof. Dr. Mohammad Safiuddin</td>
                            <td className="td-actions text-right">
                                <button type="button" rel="tooltip" className="btn btn-info btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-account material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-success btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-grease-pencil material-icons"></i>
                                </button>
                                <button type="button" rel="tooltip" className="btn btn-danger btn-round btn-just-icon btn-sm mx-1" data-original-title="" title="">
                                    <i className="mdi mdi-close material-icons"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
    
                {/* <h4><small>Striped With Checkboxes</small></h4>
                <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th></th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Qty</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" checked=""/>
                                        <span className="form-check-sign">
                                            <span className="check"></span>
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>Moleskine Agenda</td>
                            <td>Office</td>
                            <td>25</td>
                            <td className="text-right">€ 49</td>
                            <td className="text-right">€ 1,225</td>
                        </tr>
                        <tr>
    
                            <td className="text-center">2</td>
                            <td className="text-center">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <span className="form-check-sign">
                                            <span className="check"></span>
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>Stabilo Pen</td>
                            <td>Office</td>
                            <td>30</td>
                            <td className="text-right">€ 10</td>
                            <td className="text-right">€ 300</td>
                        </tr>
                        <tr>
    
                            <td className="text-center">3</td>
                            <td className="text-center">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" checked=""/>
                                        <span className="form-check-sign">
                                            <span className="check"></span>
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>A4 Paper Pack</td>
                            <td>Office</td>
                            <td>50</td>
                            <td className="text-right">€ 10.99</td>
                            <td className="text-right">€ 109</td>
                        </tr>
                        <tr>
    
                            <td className="text-center">4</td>
                            <td className="text-center">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <span className="form-check-sign">
                                            <span className="check"></span>
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>Apple iPad</td>
                            <td>Meeting</td>
                            <td>10</td>
                            <td className="text-right">€ 499.00</td>
                            <td className="text-right">€ 4,990</td>
                        </tr>
                        <tr>
    
                            <td className="text-center">5</td>
                            <td className="text-center">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" checked=""/>
                                        <span className="form-check-sign">
                                            <span className="check"></span>
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>Apple iPhone</td>
                            <td>Communication</td>
                            <td>10</td>
                            <td className="text-right">€ 599.00</td>
                            <td className="text-right">€ 5,999</td>
                        </tr>
                        <tr>
                            <td colspan="5"></td>
                            <td className="td-total">
                                Total
                            </td>
                            <td className="td-price">
                                <small>€</small>12,999
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div> */}
    
            </div>
            
             {/* <div className="col-md-12">
                <h4>Shopping Cart Table</h4>
            </div>
            
            <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                <div className="table-responsive">
                <table className="table table-shopping">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th>Product</th>
                            <th className="th-description">Color</th>
                            <th className="th-description text-right">Size</th>
                            <th className="text-center">Price</th>
                            <th className="text-right">Qty</th>
                            <th className="text-right">Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="img-container">
                                    <img src="https://cdn.shopify.com/s/files/1/0128/9452/products/apparel_outerwear_tsm_fleece-varsity_black_01_1024x1024.jpg?v=1522083098" alt="..."/>
                                </div>
                            </td>
                            <td className="td-name">
                                <a href="#jacket">Spring Jacket</a>
                                <br/><small>by Dolce&Gabbana</small>
                            </td>
                            <td>
                                Red
                            </td>
                            <td className="text-center">
                                M
                            </td>
                            <td className="td-number text-center">
                                <small>€</small>549
                            </td>
                            <td className="td-number">
                                1
                                <div className="btn-group">
                                    <button className="btn btn-round btn-info btn-sm"> <i className="material-icons">remove</i> </button>
                                    <button className="btn btn-round btn-info btn-sm"> <i className="material-icons">add</i> </button>
                                </div>
                            </td>
                            <td className="td-number text-center">
                                <small>€</small>549
                            </td>
                            <td className="td-actions">
                                <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-link" data-original-title="Remove item">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                             <td>
                                <div className="img-container">
                                    <img src="https://cdn.fashiola.ph/L16204209/gucci-baby-short-with-gucci-jacquard-trim.jpg" alt="..."/>
                                </div>
                            </td>
                            <td className="td-name">
                                <a href="#pants">Short Pants</a>
                                <br/><small>by Gucci</small>
                            </td>
                            <td>
                                Purple
                            </td>
                            <td className="text-center">
                                M
                            </td>
    
                            <td className="td-number text-center">
                                <small>€</small>499
                            </td>
                            <td className="td-number">
                                2
                                <div className="btn-group">
                                    <button className="btn btn-round btn-info btn-sm"> <i className="material-icons">remove</i> </button>
                                    <button className="btn btn-round btn-info btn-sm"> <i className="material-icons">add</i> </button>
                                </div>
                            </td>
                            <td className="td-number text-center">
                                <small>€</small>998
                            </td>
                            <td className="td-actions">
                                <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-link" data-original-title="Remove item">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="img-container">
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/71ElLga-12L._UX385_.jpg" alt="..."/>
                                </div>
                            </td>
                            <td className="td-name">
                                <a href="#nothing">Pencil Skirt</a>
                                <br/><small>by Valentino</small>
                            </td>
                            <td>
                                White
                            </td>
                            <td className="text-center">
                                XL
                            </td>
    
                            <td className="td-number text-center">
                                <small>€</small>799
                            </td>
                            <td className="td-number">
                                1
                                <div className="btn-group">
                                    <button className="btn btn-round btn-info btn-sm"> <i className="material-icons">remove</i> </button>
                                    <button className="btn btn-round btn-info btn-sm"> <i className="material-icons">add</i> </button>
                                </div>
                            </td>
                            <td className="td-number text-center">
                                <small>€</small>799</td>
                            <td className="td-actions">
                                <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-link" data-original-title="Remove item">
                                    <i className="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                            </td>
                            <td className="td-total">
                               Total
                            </td>
                            <td className="td-price text-center">
                                <small>€</small>2,346
                            </td>
                            <td colspan="3" className="text-right"> <button type="button" className="btn btn-info btn-round">Complete Purchase <i className="material-icons">keyboard_arrow_right</i></button></td>
    
                        </tr>
                    </tbody>
                </table>
                </div>
    
            </div> */}
        </div>
    </div>
    </div>
  )
}
