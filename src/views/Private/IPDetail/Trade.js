import React from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const Buy=props=>{
    return (
        <div className='container'>
            <div className='row'>
                <br />
            </div>
            <div className='row'>
              <div className='col-sm'>
                <h5>Buy TDB</h5>
              </div>  
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <TextField
                            name="price"
                            label="Price"
                            value={'0.0001000'}
                        />
                    </div>
                </div>
              </div>  
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <TextField
                            name="amount"
                            label="Amount"
                            value={'0'}
                        />
                    </div>
                </div>
              </div>  
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row">
                   <div className="p-2">
                    <TextField
                        name="total"
                        label="Total"
                        value={'0'}
                    />
                   </div> 
                </div>
              </div>  
            </div>    

            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row"> 
                    <div className="p-2">
                        <button className="btn btn-primary btn-lg" type="button" >
                            Buy
                        </button> 
                    </div>
                </div>
              </div>  
            </div>      

            <div className='row'>
                <br />
            </div>
        </div>
    )
}

const Sell=props=>{
    return (
        <div className='container'>
            <div className='row'>
                <br />
            </div>
            <div className='row'>
              <div className='col-sm'>
                <h5>Sell TDB</h5>
              </div>  
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row"> 
                    <div className="p-2">
                        <TextField
                            name="price"
                            label="Price"
                            value={'0.0001500'}
                        />
                    </div>    
                </div>  
              </div>  
            </div>
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row"> 
                    <div className="p-2">
                        <TextField
                            name="amount"
                            label="Amount"
                            value={'0'}
                        />
                    </div>
                </div>
              </div>  
            </div>  
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row"> 
                    <div className="p-2">
                        <TextField
                            name="total"
                            label="Total"
                            value={'0'}
                        />
                    </div>
                </div>
              </div>  
            </div> 
            <div className='row'>
              <div className='col-sm'>
                <div className="d-flex flex-row"> 
                    <div className="p-2">
                        <button className="btn btn-primary btn-lg" type="button" >
                            Sell
                        </button> 
                    </div>
                </div>
              </div>  
            </div> 
            <div className='row'>
                <br />
            </div>
        </div>
    )
}

const Trade=props=>{
    return (
        <div className='container'>
            <div className='row'>
                <br />
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                   <Card>
                     <Buy />
                   </Card>  
                </div>
                <div className='col-sm-6'>
                   <Card>
                    <Sell />
                   </Card>   
                </div>
            </div>
        </div>
    )
}

export default Trade;