import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect  } from 'react-redux';
import * as topnavActions from '../../redux/topNav/actions';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
});

class News extends React.Component {
    componentDidMount(){
        this.props.topnavUpdate()
    }
    componentWillUpdate(){
        
    }
    render(){
        const { classes } = this.props;

        return (
            <div className="container">
                <div className='row'>
                    <br />
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <h2>News</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <Paper className={classes.root} elevation={4}>
                            <Typography type="headline" component="h3">
                            Exchange Problems Mount at Kraken and Coinbase but Bitfinex Reopens Registrations
                            </Typography>
                            <Typography component="p">
                            Exchanges are regarded by many in the cryptocurrency world as a necessary evil. They provide liquidity and an on-ramp from fiat currency, but many other aspects of their service leaves a lot to desired. From onerous KYC requests to sudden withdrawal of service, nary a week goes by without major exchanges leaving customers seething. This week, Coinbase and Kraken have been bearing the brunt of the rage, but there’s good news from Bitfinex at least, which is open for registrations again with a $10k fiat or crypto minimum.
                            </Typography>
                        </Paper>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <Paper className={classes.root} elevation={4}>
                            <Typography type="headline" component="h3">
                            Singapore to Extend Regulatory Mandate Regarding Cryptocurrencies
                            </Typography>
                            <Typography component="p">
                            The Deputy Prime Minister of Singapore has sought to clarify the nation’s stance on cryptocurrencies with regards to its money laundering laws. Speaking earlier this week, Mr. Tharman Shanmugaratnam emphasized that Singapore’s financial regulator will not distinguish between cryptocurrencies and fiat currencies.
                            </Typography>
                        </Paper>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <Paper className={classes.root} elevation={4}>
                            <Typography type="headline" component="h3">
                            Japan’s DMM Bitcoin Exchange Opens for Business With 7 Cryptocurrencies
                            </Typography>
                            <Typography component="p">
                            Japanese e-commerce and entertainment giant DMM Group has launched its crypto exchange, supporting 7 cryptocurrencies and 14 trading pairs. The group is also preparing to launch another crypto exchange this spring aimed at inexperienced investors.
                            </Typography>
                            <Typography component="p">
                            Japanese internet and entertainment conglomerate DMM Group has launched a cryptocurrency exchange under the brand name DMM Bitcoin. The platform began trading on Thursday January 11.
    
    To commemorate the grand opening, the exchange is giving away 1,000 yen (~$US9) to all customers who open a new account during the campaign period between January 11 to March 11.
                            </Typography>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

const NewsWithStyle=withStyles(styles)(News);

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

export default connect(mapStateToProps,mapDispatchToProps)(NewsWithStyle)