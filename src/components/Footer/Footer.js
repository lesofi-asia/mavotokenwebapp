import React from 'react';
import { Link } from 'react-router-dom';

const Footer=props=>{
  return (
        <footer className="mvtfooter">
          <div className="container">
            <div className="row">
                <div className="col-sm-3">
                  <h5>MAVOTOKEN</h5>
                   <ul>
                   <li>MAVOTOKEN is a Shariah-compliant peer-to-peer crowdfunding platform regulated by the Securities Commission of Malaysia</li>
                   </ul>
                </div>
                <div className="col-sm-2">
                 <h5>Disclosure</h5>
                  <ul>
                      <li><a href="#">Risk Statement</a></li>
                      <li><a href="#">Warning Statement</a></li>
                      <li><a href="#">Disclosure Statement</a></li>
                      <li><a href="#">Terms &amp; Conditions</a></li>
                      <li><a href="#">Business Continuity Plan</a></li>
                  </ul>
                </div>
                <div className="col-sm-2">
                  <h5>Policy</h5>
                  <ul>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Investor Agreement</a></li>
                      <li><a href="#">Issuer Agreement</a></li>
                      <li><a href="#">Refund Policy</a></li>
                      <li><a href="#">Others</a></li>
                  </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Join the Crowd</h5>
                    <ul>
                       <li><Link to="/signup">Sign up</Link></li>
                      <li><Link to="/signin">Login</Link></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                  <h5>Contact</h5>
                  <ul><li><a href="#">Contact</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Investor Fees &amp; Charges</a></li>
                      <li><a href="#">Issuers Fees &amp; Charges</a></li>
                      </ul>
                </div>
               
            </div>
            <div className="row">
              <div className="footer-copyright">
                <p>2018 © MAVOTOKEN</p>
              </div>
            </div>  
        </div>
        
      </footer>
  )
}

export default Footer;
