import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import DialogIframeViewer from '../../components/DialogIframeViewer';
import PdfViewer from '../../components/PdfViewer';
import InvoiceHeaderForm from './InvoiceHeaderForm';
import InvoiceItemsForm from './InvoiceItemsForm';
import AddInvoiceItemForm from './AddInvoiceItemForm';

const renderInvoiceItemForm=(openAddInvItem)=>{
    if (openAddInvItem){
        return <AddInvoiceItemForm />
    }else {
        return <InvoiceItemsForm />
    }
}

const InvoiceDataExtractionForm = props => {
    const { projApollo,location } = props;
    const { openAddInvItem } = projApollo;
    const query = queryString.parse(location.search);
    
    if (!query.jwt || !query.pdfUrl || !query.taskAcceptedInfoId) {
        return (
            <div className="container">
               <div className="row">
                    <h3>Invoice Data Extraction</h3>
                </div>
                <div className="row">
                    <div className="alert alert-danger" role="alert">
                      ERROR! Missing Parameters!
                    </div>      
                </div>    
            </div>
        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <h3>Invoice Data Extraction</h3>
            </div>
            <div className="row">
               {/*
                <DialogIframeViewer 
                    title='Instructions'
                    renderUrl={'https://docs.google.com/document/d/e/2PACX-1vQm4_jWmGniFFMwwaj00PwR7HgOEgK98GMUojxIGkkYXNDtTyUzBMXpXq3B4tuyXZuiMhV71B6f5VRR/pub?embedded=true'}
                />
               */}
                <a href={'https://docs.google.com/document/d/e/2PACX-1vQm4_jWmGniFFMwwaj00PwR7HgOEgK98GMUojxIGkkYXNDtTyUzBMXpXq3B4tuyXZuiMhV71B6f5VRR/pub?embedded=true'} target='_blank' >Instructions</a>
                &nbsp;&nbsp;&nbsp;
                <a href={query.pdfUrl} target='_blank' >PDF Link</a>
                <br />
                <br />
            </div>  
            
            <div className="row">
                <div className="col-sm">
                    <div className="embed-responsive embed-responsive-1by1" style={{height: '100%'}}>
                       <iframe className="embed-responsive-item" src={query.pdfUrl}></iframe>
                    </div>
                </div>
                <div className="col-sm">
                  <InvoiceHeaderForm jwt={query.jwt} taskAcceptedInfoId={query.taskAcceptedInfoId}/>
                </div>
            </div>
            <div className="row">
              <br />
            </div>
            <div className="row">
                {renderInvoiceItemForm(openAddInvItem)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        projApollo: state.projApollo
    }
}

export default connect(mapStateToProps)(InvoiceDataExtractionForm);