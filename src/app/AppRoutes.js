import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Dashboard2 = lazy(() =>import('./dashboard/Dashboard2'));
const Dashboard3 = lazy(() =>import('./dashboard/Dashboard3'));


const Submenu1 = lazy(() => import('./doctor/submenu1'));
const Submenu2 = lazy(() => import('./doctor/submenu2'));
const Submenu3 = lazy(() => import('./doctor/submenu3'));

const DoctorsList = lazy(() => import('./doctor/DoctorsList'));
const DoctorFeatures = lazy(() => import('./doctor/Features'));
const AddDoctors = lazy(() => import('./doctor/AddDoctor'));


const Appointments = lazy(() => import('./appointments/Appoint'));
const AddAppointments = lazy(() => import('./appointments/Addappointments'));


const Mdi = lazy(() => import('./icons/Mdi'));


const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));
const LoginPage = lazy(() => import('./user-pages/LoginPage'));
const RegisterPage = lazy(() => import('./user-pages/RegisterPage'));
const SignupPage = lazy(() => import('./user-pages/Signup'));
const Newlogin = lazy(() => import('./user-pages/Newlogin'))

const BlankPage = lazy(() => import('./general-pages/BlankPage'));

const addPatient =  lazy(() => import('./patient/AddPatient'));
const PatientsList =  lazy(() => import('./patient/PatientsList'));
const Transactions = lazy(()=> import('./patient/Transactions'));
const Reports = lazy(() => import('./patient/Reports'));


const Features =  lazy(() => import('./features/Feature'));

const Authentication = lazy(() => import('./authentication/Authentication'));

const Concalting = lazy(() => import('./concalting'));
const Drugs = lazy(() => import('./drugs'));

const Addproduct = lazy(() => import('./product/Addproduct'));
const Productlist = lazy(() => import('./product/Productlist'));

const PracticalProcedures = lazy(() => import('./practicalprocedures'));
const Settings = lazy(() => import('./settings/Usersettings'));

// Notification secton
const Mail = lazy(() => import('./notifications/Mail'));
const Feedback = lazy(() => import('./notifications/Feedback'));
const Messages = lazy(() => import('./notifications/Messages'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/dashboard2" component={ Dashboard2 } />
          <Route path="/dashboard3" component={ Dashboard3 } />

          
          <Route path="/doctor/submenu1" component={ Submenu1 } />
          <Route path="/doctor/submenu2" component={ Submenu2 } />
          <Route path="/doctor/submenu3" component={ Submenu3 } />
          <Route path="/doctor/list" component={ DoctorsList}/>
          <Route path="/doctor/features" component={ DoctorFeatures}/>
          <Route path="/doctor/add" component={ AddDoctors }/>
          

          <Route path="/appointments" component={ Appointments } />
          <Route path="/appointment/add" component={ AddAppointments }/>


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />
          <Route path="/login-page" component={ LoginPage } />
          <Route path="/register-page" component={ RegisterPage } />
          <Route path="/signup" component={ SignupPage }/>
          <Route path="/login" component={ Newlogin }/>

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />

          <Route path="/patient/add" component={ addPatient }  />
          <Route path="/patients/list" component={ PatientsList } />
          <Route path="/patients/transactions" component={ Transactions } />
          <Route path="/patients/reports" component={ Reports } />
          <Route path="/icons" component={ Mdi } />

          <Route path="/features" component={ Features }  />

          <Route path="/authentication/menu1" component={ Authentication } />

          <Route path="/concalting" component={ Concalting }/>
          <Route path="/drugs" component={ Drugs }/>

          <Route path="/product/add" component={ Addproduct } />
          <Route path="/product/list" component={ Productlist }/>

          <Route path="/practical-procedures" component={ PracticalProcedures }/>
          <Route path="/settings" component={ Settings }/>

          {/* notifications section */}
          <Route path="/notifications/mail" component={ Mail }/>
          <Route path="/notifications/feedback" component={ Feedback }/>
          <Route path="/notifications/messages" component={ Messages }/>


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;