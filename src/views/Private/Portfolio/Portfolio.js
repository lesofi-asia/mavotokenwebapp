import React from 'react';
import { connect } from 'react-redux';
import AccountBalance from './AccountBalance';
import PendingWithdrawal from './PendingWithdrawal';
import TransactionHistory from './TransactionHistory';
import * as topnavActions from '../../../redux/topNav/actions';

class Portfolio extends React.Component{
    componentDidMount(){
        this.props.topnavUpdate()
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <br />
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Portfolio/Trade</h2>
                    </div>
                </div>
                <div className='row'>
                    <br />
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <AccountBalance />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <PendingWithdrawal />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <TransactionHistory />
                    </div>
                </div>
                <div className='row'>
                    <br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        topnavUpdate: () => {
            dispatch(topnavActions.topnavUpdate())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);