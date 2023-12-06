import React from 'react';
import Table from 'react-bootstrap/Table';
import "./PatientsList.css";

export default function Reports() {
  return (
    <div>
{/* <Table  bordered >
      <thead>
        <tr>
          <th>P-ID</th>
          <th>Patient Name</th>
          <th>Treatment Date</th>
          <th>Did the patient attend the treatment</th>
          <th>Progress Notes</th>
          <th>Next Treatment Plan</th>
          <th>Next Appointment Date</th>
          <th>Doctor's Signature</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Maimuna Sultana</td>
          <td>14-05-2021</td>
          <td>Yes</td>
          <td>Progress Notes</td>
          <td>non</td>
          <td>non</td>
          <td>Signature</td>
        </tr>
      </tbody>
    </Table> */}

<div className='bodyy'>
<div className="">

    	<div className="title">
    		<h3>Patients List</h3>
    	</div>
    	<div className="row">
            
            <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th >Profile Pic</th>
                            <th>Patient Name</th>
                            <th>Treatment Date</th>
                            <th>Attend the treatment</th>
                            <th>Progress Notes</th>
                            <th>Next Treatment Plan</th>
                            <th>Next Appoint Date</th>
                            <th>Doctor's Signature</th>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>

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
                            <td>Maimuna Sultana</td>
                            <td>11-03-2022</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>

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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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

                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>

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

                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>

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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
                            <td>Maimuna Sultana</td>
                            <td>14-05-2021</td>
                            <td>Yes</td>
                            <td>Progress Notes</td>
                            <td>non</td>
                            <td>non</td>
                            <td>Signature</td>
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
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
