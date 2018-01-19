import React, {Component} from 'react';
import Table,{
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { setInterval, clearInterval } from 'timers';
import shuffle from 'shuffle-array';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 2,
        overflowX: 'auto'
    },
    table: {
        minWidth: 300
    },
    columnHeader: {
      paddingRight: '4px'
    },
    column: {
        paddingRight: '4px'
    },
    cellText: {
      color: 'red'
    }
})

const tableData = [
  {
    price: '1,439',
    amount: '261',   
    total: '1,439',
    sum: '375,579'
  },
  {
    price: '1,438',
    amount: '260',   
    total: '1,438',
    sum: '375,580'
  },
  {
    price: '1,440',
    amount: '262',   
    total: '1,440',
    sum: '375,580'
  },
  {
    price: '1,441',
    amount: '263',   
    total: '1,441',
    sum: '375,573'
  },
  {
    price: '1,443',
    amount: '267',   
    total: '1,443',
    sum: '375,581'
  },
  {
    price: '1,442',
    amount: '265',   
    total: '1,442',
    sum: '375,580'
  }
];

const shuffe=(array)=>{
  let i = 0
  let j = 0
  let temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

class SellTrans extends Component {
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
      height: '300px',
      tableData: tableData
    };
  
    shuffeData=()=>{
      let currentTableData=shuffle(this.state.tableData) 
      this.setState({tableData: currentTableData})
    }

    componentDidMount(){
       this.timer=setInterval(this.shuffeData, 1000)
    }

    componentWillUnmount(){
      clearInterval(this.timer)
    }

    render() {
      const { classes } = this.props;  
      return (
          <Paper className={classes.root}>
               <Table className={classes.table}>
                   <TableHead>
                      <TableRow> 
                       <TableCell className={classes.columnHeader}>Price (MVT)</TableCell>
                       <TableCell className={classes.columnHeader}>Amount (TDB)</TableCell>
                       <TableCell className={classes.columnHeader}>Total (MVT)</TableCell>
                        <TableCell className={classes.columnHeader}>Sum</TableCell>
                      </TableRow> 
                   </TableHead>    
                   <TableBody>
                    {this.state.tableData.map( (row, index) => (
                        <TableRow key={index}>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.price}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.amount}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.total}</span></TableCell>
                            <TableCell className={classes.column}><span className={classes.cellText}>{row.sum}</span></TableCell>
                        </TableRow>    
                    ))}
                   </TableBody>    
               </Table>     
          </Paper>    
      )  
    }
  }

  export default withStyles(styles)(SellTrans);