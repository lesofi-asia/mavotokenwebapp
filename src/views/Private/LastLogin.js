import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  tableStyle: {
    width: '100%',
    backgroundColor: '#202020'
  },
  tableBodyStyle: {
        overflow:'visible'
  },
  dateTableCol: {
    color: '#dbab83',
    width: '33%'
  },
  ipAddrTableCol: {
    color: '#dbab83',
    width: '33%'
  },
  locationTableCol: {
    color: '#dbab83',
    width: '34%'
  }
};

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

export default class LastLogin extends Component {
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
      return (
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            style={styles.tableStyle}
            bodyStyle={styles.tableBodyStyle} 
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
              <TableRow style={{borderColor: '#dbab83'}}>
                <TableHeaderColumn tooltip="Date" style={styles.dateTableCol}>Date</TableHeaderColumn>
                <TableHeaderColumn tooltip="IP Address" style={styles.ipAddrTableCol}>IP Address</TableHeaderColumn>
                <TableHeaderColumn tooltip="Location" style={styles.locationTableCol}>Location</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index} style={{borderColor: '#dbab83'}}>
                  <TableRowColumn style={styles.dateTableCol}>{row.loginDate}</TableRowColumn>
                  <TableRowColumn style={styles.ipAddrTableCol}>{row.ipAddr}</TableRowColumn>
                  <TableRowColumn style={styles.locationTableCol}>{row.location}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter
              adjustForCheckbox={this.state.showCheckboxes}
            >
              
            </TableFooter>
          </Table>
      );
    }
  }