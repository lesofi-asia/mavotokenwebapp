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
import Avatar from 'material-ui/Avatar';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];


export default class IPsList extends Component {
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
        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            style={{backgroundColor: '#202020'}}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center',color: '#dbab83'}}>
                  MAVO IP EXCHANGE 
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID" style={{color: '#dbab83'}}>ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name" style={{color: '#dbab83'}}>Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status" style={{color: '#dbab83'}}>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn><img src="/img/avatars/3TT.jpg" style={{height: '50px'}} /></TableRowColumn>
                  <TableRowColumn style={{color: '#dbab83'}}>{row.name}</TableRowColumn>
                  <TableRowColumn style={{color: '#dbab83'}}>{row.status}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter
              adjustForCheckbox={this.state.showCheckboxes}
            >
              
            </TableFooter>
          </Table>
        </div>        
          
      );
    }
  }