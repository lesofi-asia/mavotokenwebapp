import React from 'react';
import AccountBalance from './AccountBalance';
import PendingWithdrawal from './PendingWithdrawal';
import TransactionHistory from './TransactionHistory';

const Portfolio=props=>{
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

export default Portfolio;