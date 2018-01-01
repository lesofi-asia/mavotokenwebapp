import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InvoiceDataExtractionForm from './InvoiceDataExtractionForm';
import SubmittedForm from './SubmittedForm';

const FormView = (props) => {
    const { match,location } = props;
    
    switch (match.params.name){
        case "invoiceDataExtractionForm":
            return <InvoiceDataExtractionForm location={location} />;
        case "submittedForm":
            return <SubmittedForm />
        default:
            return null;        
    }
}

const ProjectApollo = (props) => {
    const { match } = props;
    return (
        <Router>
          <div>
             <Switch>
               <Route path={`${match.path}/:name`} component={FormView} />
               <Route path={`${match.path}/:name?jwt=:jwt&pdfUrl=:pdfUrl&taskAcceptedInfoId=:taskAcceptedInfoId`} component={FormView} />
               <Route render={()=>(
                   <h3>Project Apollo</h3>
               )}/>
             </Switch> 
          </div>  
        </Router>
    )
}

export default ProjectApollo;