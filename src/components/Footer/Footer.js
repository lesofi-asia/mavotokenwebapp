import React from 'react';
import { Link } from 'react-router-dom';
import { connect  } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

const Footer=props=>{
  return (
        <footer className="mvtfooter">
          <div className="container">
            <div className="row">
                <div className="col-sm-3">
                  <h5>MAVOIPX</h5>
                   <ul>
                   <li>{ props.translate('platformDesc') }</li>
                   </ul>
                </div>
                <div className="col-sm-2">
                 <h5>{ props.translate('disclosure') }</h5>
                  <ul>
                      <li><a href="#">{ props.translate('riskStatement') }</a></li>
                      <li><a href="#">{ props.translate('warningStatement') }</a></li>
                      <li><a href="#">{ props.translate('termsNCondition') }</a></li>
                  </ul>
                </div>
                <div className="col-sm-2">
                  <h5>{ props.translate('policy') }</h5>
                  <ul>
                      <li><a href="#">{ props.translate('privacyPolicy') }</a></li>
                      <li><a href="#">{ props.translate('others') }</a></li>
                  </ul>
                </div>
                <div className="col-sm-2">
                    <h5>{ props.translate('joinUs') }</h5>
                    <ul>
                       <li><Link to="/signup">{ props.translate('signup') }</Link></li>
                      <li><Link to="/signin">{ props.translate('login') }</Link></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                  <h5>{ props.translate('contact') }</h5>
                  <ul>
                      <li><a href="#">{ props.translate('contact') }</a></li>
                      <li><a href="#">{ props.translate('faq') }</a></li>
                  </ul>
                </div>
            </div>
            <div className="row">
              <div className="footer-copyright">
                <p>2018 © MAGIC IPX</p>
              </div>
            </div>  
        </div>
        
      </footer>
  )
}

const mapStateToProps = (state) => {
  return {
      translate: getTranslate(state.locale)
  }
}
export default connect(mapStateToProps)(Footer);
