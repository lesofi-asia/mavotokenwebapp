import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import { tsvParse, csvParse } from  'd3-dsv';
import { timeParse } from 'd3-time-format';
import { getData } from './ChartUtil';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

const TabContainer=props=>{
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    )
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.background.paper,
    },
});

class IPDetail extends React.Component {
    state = {
        value: 0,
        data: null
    };

    componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render(){
        const { classes } = this.props;
        const { value } = this.state;
        const renderChartComponent=this.state.data == null?(
            <div>Loading...</div>
        ):(
            <div style={{backgroundColor: '#141414'}}>
              <Chart type={'svg'} data={this.state.data} width={500} />
            </div>
        )
        
        return (
            <div className='container'>
                <div className='row'>
                    <br />
                </div>    
                <div className='row'>
                    <h2>IP Detail</h2>
                </div> 
                <div className='row'>
                    <div className={classes.root}>
                        <AppBar position="static" style={{backgroundColor: '#141414'}}>
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="Market" />
                            <Tab label="IP Detail" />
                        </Tabs>
                        </AppBar>
                        {value === 0 && (
                        <TabContainer>
                            {renderChartComponent}
                        </TabContainer>
                        )}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                    </div>
                </div>
            </div>    
        )
    }
    
}

export default withStyles(styles)(IPDetail);

{
    /** */
}