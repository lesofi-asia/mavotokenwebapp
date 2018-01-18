import React from 'react';
import Chart from './Chart';
import { tsvParse, csvParse } from  'd3-dsv';
import { timeParse } from 'd3-time-format';
import { getData } from './ChartUtil';
import { TypeChooser } from "react-stockcharts/lib/helper";


class IPDetail extends React.Component {
    componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
    }
    
    render(){
        if (this.state == null) {
			return <div>Loading...</div>
		}
		
        return (
            <div className='container'>
                <div className='row'>
                    <br />
                </div>    
                <div className='row'>
                    <h2>IP Detail</h2>
                </div> 
                <div className='row'>
                   <Chart type={'svg'} data={this.state.data} width={500} />
                </div>
            </div>    
        )
    }
    
}

export default IPDetail;