import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="#" target="_blank" rel="">RTC Hubs LTD. </a>2023</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><a href="#" target="_blank" rel=""> Mom2B admin </a></span>
        </div>
      </footer> 
    );
  }
}

export default Footer;