import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToolbarTitle} from 'material-ui/Toolbar';
import * as actions from '../../redux/imgCate/actions';

class ImgCateThankYou extends Component {
    componentDidMount(){
        if (this.props.imgCate.submitted){
            this.props.submitCompleted();
        }
    }
    render() {
        const { imgCate } = this.props;
        
        return (
            <div className="animated fadeIn">
                <div className="ImageCategorisation">
                <ToolbarTitle text="Image Categorisation " />  
                <blockquote className="blockquote text-left">
                    <h4 className="display-4">Thank you</h4>
                    <p className="mb-0">Your task has been submitted successfully.</p>
                    <div className="card" style={{width: 600}}>
                        <div className="card-header">
                            Here is your answer :
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{imgCate.answer}</li>
                        </ul>
                    </div>
                    <footer className="blockquote-footer">Team at <cite title="Source Title">Swarm Colony</cite></footer>
                </blockquote>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        imgCate: state.imgCate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitCompleted: () => {
          dispatch(actions.submitCompleted())  
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImgCateThankYou);