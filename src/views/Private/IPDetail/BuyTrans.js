import React, {Component} from 'react';
import Table,{
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        width: '50%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 300
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
  }
];

class BuyTrans extends Component {
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
    };
  
    handleToggle = (event, toggled) => {
      this.setState({
        [event.target.name]: toggled,
      });
    };
  
    handleChange = (event) => {
      this.setState({height: event.target.value});
    };
  
    render() {
      const { classes } = this.props;  
      return (
          <Paper className={classes.root}>
               <Table className={classes.table}>
                   <TableHead>
                      <TableRow> 
                       <TableCell>Price (MVT)</TableCell>
                       <TableCell>Amount (TDB)</TableCell>
                       <TableCell>Total (MVT)</TableCell>
                        <TableCell>Sum</TableCell>
                      </TableRow> 
                   </TableHead>    
                   <TableBody>
                    {tableData.map( (row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.total}</TableCell>
                            <TableCell>{row.sum}</TableCell>
                        </TableRow>    
                    ))}
                   </TableBody>    
               </Table>     
          </Paper>    
      )  
    }
  }

  export default withStyles(styles)(BuyTrans);