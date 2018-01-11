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
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    }
})

const tableData = [
  {
    loginDate: '2018-01-11 13:26:28',
    ipAddr: '113.210.134.10',   
    location: 'George Town Malaysia'
  },
  {
    loginDate: '2018-01-11 13:19:51',
    ipAddr: '113.210.35.49',   
    location: 'Shah Alam Malaysia'
  },
  {
    loginDate: '2018-01-11 13:18:47',
    ipAddr: '113.210.35.49',   
    location: 'Shah Alam Malaysia'
  }
];

class LastLogin extends Component {
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
                       <TableCell>Date</TableCell>
                       <TableCell>IP Address</TableCell>
                       <TableCell>Location</TableCell>
                      </TableRow> 
                   </TableHead>    
                   <TableBody>
                    {tableData.map( (row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.loginDate}</TableCell>
                            <TableCell>{row.ipAddr}</TableCell>
                            <TableCell>{row.location}</TableCell>
                        </TableRow>    
                    ))}
                   </TableBody>    
               </Table>     
          </Paper>    
      )  
    }
  }

  export default withStyles(styles)(LastLogin);