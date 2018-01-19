import React from 'react';
import Chart from './Chart';
import SellTrans from './SellTrans';
import BuyTrans from './BuyTrans';
import Trade from './Trade';
import { getData } from './ChartUtil';

class IPMarket extends React.Component {
    state = {
        data: null
    };

    componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
    }

    render() {
        const renderChartComponent=this.state.data == null?(
            <div>Loading...</div>
        ):(
            <div>
              <Chart type={'svg'} data={this.state.data} width={600} />
            </div>
        )

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-7'>
                      {renderChartComponent}
                    </div>
                    <div className='col-sm-5'>
                        <SellTrans />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-7'>
                       <Trade />
                    </div>
                    <div className='col-sm-5'>
                       <BuyTrans />
                    </div>
                </div>
            </div>
        )
    }
}

export default IPMarket;