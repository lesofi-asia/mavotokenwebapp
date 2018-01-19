import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import IPBio from './IPBio';
import IPMarket from './IPMarket';

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
        value: 0
    };

    componentDidMount() {
	}

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render(){
        const { classes } = this.props;
        const { value } = this.state;
        
        return (
            <div className='container'>
                <div className='row'>
                    <br />
                </div>    
                <div className='row'>
                    <h2>MAVO IP Detail</h2>
                </div> 
                <div className='row'>
                    <div className={classes.root}>
                        <AppBar position="static" style={{backgroundColor: '#141414'}}>
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="IP Market" />
                            <Tab label="IP Biograghy" />
                        </Tabs>
                        </AppBar>
                        {value === 0 && (
                        <TabContainer>
                            <IPMarket />
                        </TabContainer>
                        )}
                        {value === 1 && <TabContainer><IPBio /></TabContainer>}
                    </div>
                </div>
            </div>    
        )
    }
    
}

export default withStyles(styles)(IPDetail);