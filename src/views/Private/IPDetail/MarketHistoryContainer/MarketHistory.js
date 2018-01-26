import React, {Component} from 'react';
import Table,{
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import shuffle from 'shuffle-array';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto'
    },
    mobileRoot: {
        width: '335px',
        overflowX: 'auto'
    },
    table: {
       minWidth: '400px'
    },
    columnHeader: {
      paddingRight: '4px'
    },
    column: {
        paddingRight: '4px'
    },
    cellText: {
      color: 'green'
    },
    sellTransCellText: {
        color: 'red'
    }
})

const tableData = [
  {
    date: '2017-11-10',
    time: '22:14',   
    buyOrSell: '1,439',
    pair: ' ',
    type: ' ',
    side: ' ',
    price: ' ',
    amount: ' ',
    filled: ' ',
    total: ' ',
    transType: 'buy'
  },
  {
    date: '2017-11-10',
    time: '22:03',   
    buyOrSell: '1,438',
    pair: ' ',
    type: ' ',
    side: ' ',
    price: ' ',
    amount: ' ',
    filled: ' ',
    total: ' ',
    transType: 'sell'
  },
  {
    date: '2017-11-09',
    time: '17:57',   
    buyOrSell: '1,440',
    pair: ' ',
    type: ' ',
    side: ' ',
    price: ' ',
    amount: ' ',
    filled: ' ',
    total: ' ',
    transType: 'buy'
  },
  {
    date: '2017-11-09',
    time: '14:33',   
    buyOrSell: '1,441',
    pair: ' ',
    type: ' ',
    side: ' ',
    price: ' ',
    amount: ' ',
    filled: ' ',
    total: ' ',
    transType: 'sell'
  },
  {
    date: '2017-11-09',
    time: '11:25',   
    buyOrSell: '1,443',
    pair: ' ',
    type: ' ',
    side: ' ',
    price: ' ',
    amount: ' ',
    filled: ' ',
    total: ' ',
    transType: 'sell'
  },
  {
    date: '2017-11-09',
    time: '10:08',   
    buyOrSell: '1,442',
    pair: ' ',
    type: ' ',
    side: ' ',
    price: ' ',
    amount: ' ',
    filled: ' ',
    total: ' ',
    transType: 'buy'
  }
];

const isMobile=(width)=> width <=500;

class MarketHistory extends Component {
    state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
     // height: '300px',
      tableData: tableData,
      intervalId: null,
      width: window.innerWidth
    };
  
    shuffeData=()=>{
      let currentTableData=shuffle(this.state.tableData) 
      this.setState({tableData: currentTableData})
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth });
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange );
    }

    componentDidMount(){
    }

    render() {
      const { classes } = this.props;  
      const { width } = this.state;
      return (
          <Paper className={isMobile(width)?classes.mobileRoot:classes.root}>
               <Table className={classes.table}>
                   <TableHead>
                      <TableRow> 
                       <TableCell className={classes.columnHeader}>Date</TableCell>
                       <TableCell className={classes.columnHeader}>Time</TableCell>
                       <TableCell className={classes.columnHeader}>Buy/Sell</TableCell>
                       <TableCell className={classes.columnHeader}>Pair</TableCell>
                       <TableCell className={classes.columnHeader}>Type</TableCell>
                       <TableCell className={classes.columnHeader}>Side</TableCell>
                       <TableCell className={classes.columnHeader}>Price</TableCell>
                       <TableCell className={classes.columnHeader}>Amount</TableCell>
                       <TableCell className={classes.columnHeader}>Filled %</TableCell>
                       <TableCell className={classes.columnHeader}>Total</TableCell>
                      </TableRow> 
                   </TableHead>    
                   <TableBody>
                    {this.state.tableData.map( (row, index) => (
                        <TableRow key={index}>
                            <TableCell className={classes.column}><span className={row.transType==='sell'?classes.sellTransCellText:classes.cellText}>{row.date}</span></TableCell>
                            <TableCell className={classes.column}><span className={row.transType==='sell'?classes.sellTransCellText:classes.cellText}>{row.time}</span></TableCell>
                            <TableCell className={classes.column}><span className={row.transType==='sell'?classes.sellTransCellText:classes.cellText}>{row.buyOrSell}</span></TableCell>
                            <TableCell className={classes.column}><span className={row.transType==='sell'?classes.sellTransCellText:classes.cellText}>{row.pair}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.type}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.side}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.price}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.amount}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.filled}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.total}</span></TableCell>
                        </TableRow>    
                    ))}
                   </TableBody>    
               </Table>     
          </Paper>    
      )  
    }
  }

  export default withStyles(styles)(MarketHistory);