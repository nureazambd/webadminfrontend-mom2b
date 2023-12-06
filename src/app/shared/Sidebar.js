import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import "./sidebar.css";

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},

      {path: '/dashboard', state: 'dashboardMenuOpen'},
      {path:'/doctor', state: 'doctorMenuOpen'},
      {path:'/patient', state: 'patientMenuOpen'},
      {path:'/appointment', state: 'appointmentMenuOpen'},
      {path:'/feature', state: 'featureMenuOpen'},
      {path:'/notifications', state: 'notificationsMenuOpen'},
      {path: '/product', state: 'productMenuOpen'}


    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                {/* <img src={ require("../../assets/images/faces/srk.webp") } alt="profile" /> */}
                <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>Shah Rukh Khan</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Manager</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          {/* <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li> */}

          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.dashboardMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('dashboardMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-home menu-icon"></i>
            </div>
            <Collapse in={ this.state.dashboardMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/dashboard1') ? 'nav-link active' : 'nav-link' } to="/dashboard"><Trans>Dashboard 1</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/dashboard2') ? 'nav-link active' : 'nav-link' } to="/dashboard2"><Trans>Dashboard 2</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/dashboard3') ? 'nav-link active' : 'nav-link' } to="/dashboard3"><Trans>Dashboard 3</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/doctor') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.doctorMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('doctorMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Doctor</Trans></span>
              <i className="menu-arrow"></i>
              {/* <i className="mdi mdi-crosshairs-gps menu-icon"></i> */}
              <i className="mdi mdi-account-circle menu-icon"></i>
            </div>
            <Collapse in={ this.state.doctorMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/doctor/add') ? 'nav-link active' : 'nav-link' } to="/doctor/add"><Trans>Add Doctor</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/doctor/list') ? 'nav-link active' : 'nav-link' } to="/doctor/list"><Trans>Doctor List</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/doctor/features') ? 'nav-link active' : 'nav-link' } to="/doctor/features"><Trans>Feature</Trans></Link></li>
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/doctor/submenu3') ? 'nav-link active' : 'nav-link' } to="/doctor/submenu3"><Trans>sub-menu 3</Trans></Link></li> */}
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>sub-menu 2</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>sub-menu 3</Trans></Link></li> */}
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/appointment') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.appointmentMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('appointmentMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Appointments</Trans></span>
              <i className="menu-arrow"></i>
              {/* <i className="mdi mdi-account-multiple-plus menu-icon"></i> */}
              <i className="mdi mdi-account-multiple-plus menu-icon"></i>
            </div>
            <Collapse in={ this.state.appointmentMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/appointment/add') ? 'nav-link active' : 'nav-link' } to="/appointment/add"><Trans>Appointments Form</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/appointments') ? 'nav-link active' : 'nav-link' } to="/appointments"><Trans>Appointments</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/patient') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.patientMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('patientMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Patients</Trans></span>
              <i className="menu-arrow"></i>
              {/* <i className="mdi mdi-table-large menu-icon"></i> */}
              <i className="mdi mdi-emoticon-sad menu-icon"></i>

            </div>
            <Collapse in={ this.state.patientMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/patient/add') ? 'nav-link active' : 'nav-link' } to="/patient/add"><Trans>Add Patients</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/patients/list') ? 'nav-link active' : 'nav-link' } to="/patients/list"><Trans>Patients List</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/patients/transactions') ? 'nav-link active' : 'nav-link' } to="/patients/transactions"><Trans>Transactions</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/patients/reports') ? 'nav-link active' : 'nav-link' } to="/patients/reports"><Trans>Reports</Trans></Link></li>
                <li className='nav-item'> <Link className={ this.isPathActive('/icons') ? 'nav-link active' : 'nav-link' } to="/icons"><Trans>icons</Trans></Link></li>

              </ul>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/feature') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.featureMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('featureMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Features</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-format-list-bulleted-type menu-icon"></i>
            </div>
            <Collapse in={ this.state.featureMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/features') ? 'nav-link active' : 'nav-link' } to="/features"><Trans>Features</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

          {/* <li className={ this.isPathActive('/authentication') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.patient3 ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('patient3') } data-toggle="collapse">
              <span className="menu-title"><Trans>Authentication</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-table-large menu-icon"></i>
            </div>
            <Collapse in={ this.state.patient3 }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/authentication/menu1') ? 'nav-link active' : 'nav-link' } to="/authentication/menu1"><Trans>Authentication Menu</Trans></Link></li>
              </ul>
            </Collapse>
          </li> */}

          <li className={ this.isPathActive('/notifications') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.notificationsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('notificationsMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Notifications</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-bell-ring menu-icon"></i>
            </div>
            <Collapse in={ this.state.notificationsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/notifications/mail') ? 'nav-link active' : 'nav-link' } to="/notifications/mail"><Trans>Mail</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/notifications/feedback') ? 'nav-link active' : 'nav-link' } to="/notifications/feedback"><Trans>Feedback</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/notifications/Messages') ? 'nav-link active' : 'nav-link' } to="/notifications/messages"><Trans>Messages</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>User Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-lock menu-icon"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/login-page') ? 'nav-link active' : 'nav-link' } to="/login-page"><Trans>Login Page</Trans></Link></li> */}

                <li className="nav-item"> <Link className={ this.isPathActive('/login') ? 'nav-link active' : 'nav-link' } to="/login"><Trans>Login</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/signup') ? 'nav-link active' : 'nav-link' } to="/signup"><Trans>Register</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" rel="noopener noreferrer" target="_blank">
              <span className="menu-title"><Trans>Miscellaneous</Trans></span>
              <i className="mdi mdi-file-document-box menu-icon"></i>
            </a>
          </li>


          <li className={ this.isPathActive('/concalting') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/concalting">
              <span className="menu-title"><Trans>Concalting</Trans></span>
              <i className="mdi mdi-voice menu-icon"></i>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/drugs') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/drugs">
              <span className="menu-title"><Trans>Baby Products</Trans></span>
              <i className="mdi mdi-basket menu-icon"></i>
            </Link>
          </li> */}

          <li className={ this.isPathActive('/product') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.productMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('productMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Baby Products</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-basket menu-icon"></i>
            </div>
            <Collapse in={ this.state.productMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/product/add') ? 'nav-link active' : 'nav-link' } to="/product/add"><Trans>Add Product</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/product/list') ? 'nav-link active' : 'nav-link' } to="/product/list"><Trans>Products List</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          
          <li className={ this.isPathActive('/practical-procedures') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/practical-procedures">
              <span className="menu-title"><Trans>Practical Procedures</Trans></span>
              <i className="mdi mdi-hospital-building menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/settings') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/settings">
              <span className="menu-title"><Trans>Settings</Trans></span>
              <i className="mdi mdi-brightness-7 menu-icon"></i>
            </Link>
          </li>

        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);