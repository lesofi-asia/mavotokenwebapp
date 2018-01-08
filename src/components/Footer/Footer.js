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
                      <li><a href="https://www.nusakapital.com/risk-statement/">Risk Statement</a></li>
                      <li><a href="https://www.nusakapital.com/warning-statement/">Warning Statement</a></li>
                      <li><a href="https://www.nusakapital.com/disclosure-statement/">Disclosure Statement</a></li>
                      <li><a href="https://www.nusakapital.com/terms-condition/">Terms &amp; Conditions</a></li>
                      <li><a href="https://www.nusakapital.com/business-continuity-plan/">Business Continuity Plan</a></li>
                  </ul>
                </div>
                <div className="col-sm-2">
                  <h5>Policy</h5>
                  <ul>
                      <li><a href="https://www.nusakapital.com/privacy-policy/">Privacy Policy</a></li>
                      <li><a href="https://www.nusakapital.com/investor-agreement/">Investor Agreement</a></li>
                      <li><a href="https://www.nusakapital.com/issuer-agreement/">Issuer Agreement</a></li>
                      <li><a href="https://www.nusakapital.com/refund-policy/">Refund Policy</a></li>
                      <li><a href="https://www.nusakapital.com/others/">Others</a></li>
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
                  <ul><li><a href="https://nusakapital.com/contact/">Contact</a></li>
                      <li><a href="https://nusakapital.com/faq/">FAQ</a></li>
                      <li><a href="https://nusakapital.com/investor-fees-charges/">Investor Fees &amp; Charges</a></li>
                      <li><a href="https://nusakapital.com/issuers-fees-charges-2/">Issuers Fees &amp; Charges</a></li>
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
