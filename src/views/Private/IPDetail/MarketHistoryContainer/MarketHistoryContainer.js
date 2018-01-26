import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import MarketHistory from './MarketHistory'
import MyHistory from './MyHistory'

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
      marginTop: theme.spacing.unit * 2,
      backgroundColor: theme.palette.background.paper,
    },
});

class MarketHistoryContainer extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { classes } = this.props;
        const { value } = this.state;
        
        return (
            <div className='container'>
                <div className='row'>
                    <div className={classes.root}>
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="Market History" />
                            <Tab label="My History" />
                        </Tabs>
                        {value === 0 && (
                        <TabContainer>
                            <MarketHistory />
                        </TabContainer>
                        )}
                        {value === 1 && <TabContainer>
                             <MyHistory />   
                        </TabContainer>}
                    </div>
                </div>
            </div>    
        )
    }
}

export default withStyles(styles)(MarketHistoryContainer);