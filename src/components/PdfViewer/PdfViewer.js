import React,{ Component } from 'react';
import PDF from 'react-pdf-js';
import FlatButton from 'material-ui/FlatButton';

export default class PdfViewer extends Component {
    state = {};

    onDocumentComplete = (pages) => {
       this.setState({ page: 1, pages });
    }
    
    onPageComplete = (page) => {
        this.setState({ page });
    }
    
    handlePrevious = () => {
        this.setState({ page: this.state.page - 1 });
    }
    
    handleNext = () => {
        this.setState({ page: this.state.page + 1 });
    }
    
    renderPagination = (page, pages) => {
        let previousButton = <li className="page-item" onClick={this.handlePrevious}><FlatButton label="Previous" primary={true} /></li>;
        if (page === 1) {
            previousButton = <li className="page-item"><FlatButton label="Previous" primary={true} disabled={true} /></li>;
        }
        let nextButton = <li className="page-item" onClick={this.handleNext}><FlatButton label="Next" primary={true} /></li>;
        if (page === pages) {
            nextButton = <li className="page-item"><FlatButton label="Next" primary={true} disabled={true} /></li>;
        }
        return (
            <nav>
            <ul className="pagination">
                {previousButton}
                {nextButton}
            </ul>
            </nav>
        );
    }
    
    render() {
        let pagination = null;
        if (this.state.pages) {
            pagination = this.renderPagination(this.state.page, this.state.pages);
        }
        return (
            <div>
            <PDF file={this.props.pdfFile} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
            {pagination}
            </div>
        )
    }
}