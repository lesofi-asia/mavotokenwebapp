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
  ipAvatarTableCol: {
    color: '#dbab83',
    width: '100px'
  },
  ipCodeTableCol: {
    color: '#dbab83',
    width: '100px'
  },
  ipNameTableCol: {
    color: '#dbab83',
    width: '300px'
  }
};

const tableData = [
  {
    ipAvatar: '/img/avatars/HH_ChanHouNam.jpg',
    ipCode: 'TDB',   
    name: 'Teddy Boy',
    price: '1,440',
    amount: '2,134',
    vol: '14,870',
    trending: 'up'
  },
  {
    ipAvatar: '/img/avatars/DS_DingYao.jpg',
    ipCode: 'YNB',   
    name: 'Young & Beautiful',
    price: '849',
    amount: '1,156',
    vol: '325',
    trending: 'down'
  },
  {
    ipAvatar: '/img/avatars/3TT.jpg',
    ipCode: '3TT',   
    name: '3000 years of Time Travel',
    price: '556',
    amount: '998',
    vol: '584',
    trending: ''
  },
  {
    ipAvatar: '/img/avatars/ETE.jpg',
    ipCode: 'FSM',   
    name: 'Feng Shui Monsters',
    price: '1,220',
    amount: '1,786',
    vol: '24,006',
    trending: 'up'
  },
  {
    ipAvatar: '/img/avatars/HH_JiangTaiYang.jpg',
    ipCode: 'HHZ',   
    name: 'Hong Hing Zhai',
    price: '1,387',
    amount: '2,006',
    vol: '25,123',
    trending: 'down'
  }
];

const ipTrending=(trending)=>{
    switch(trending){
        case 'up':
            return <TrendingUp style={{color: '#dbab83'}} />;
        case 'down':
            return <TrendingDown style={{color: '#dbab83'}} />;    
        default:
            return <TrendingFlat style={{color: '#dbab83'}} />;
    }
}

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
          <div className='container' style={{backgroundColor: '#202020'}}>
            <div className='row'>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>No. of IP: </span>
                        <span style={{color: '#dbab83'}}>75</span>
                    </div>
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>Market: </span>
                        <span style={{color: '#dbab83'}}>345</span>
                    </div>
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>Market Cap: </span>
                        <span style={{color: '#dbab83'}}>$1,235,809,896</span>
                    </div>
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>24h Volume: </span>
                        <span style={{color: '#dbab83'}}>$510,068</span>
                    </div>
                </div>
            </div>
          </div>  
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
            { /*
              <TableRow>
                <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'center',color: '#dbab83',width: '100%'}}>
                  MAVO IP EXCHANGE 
                </TableHeaderColumn>
              </TableRow>*/
            }
              <TableRow style={{borderColor: '#dbab83'}}>
                <TableHeaderColumn tooltip="The IP Avatar" style={styles.ipAvatarTableCol}>IP Avatar</TableHeaderColumn>
                <TableHeaderColumn tooltip="The IP Code" style={styles.ipCodeTableCol}>IP Code</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name of IP" style={styles.ipNameTableCol}>Name of IP</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Price (MVT)" style={{color: '#dbab83'}}>Price (MVT)</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Amount (TDB)" style={{color: '#dbab83'}}>Amount (TDB)</TableHeaderColumn>
                <TableHeaderColumn tooltip="The 24h Vol" style={{color: '#dbab83'}}>24h Vol</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Trending" style={{color: '#dbab83'}}>Trending</TableHeaderColumn>
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
                  <TableRowColumn style={styles.ipAvatarTableCol}>
                    <Avatar src={row.ipAvatar}  />
                    {/*
                    <img src={row.ipAvatar} style={{height: '50px'}} />
                    */}
                    </TableRowColumn>
                  <TableRowColumn style={styles.ipCodeTableCol}>{row.ipCode}</TableRowColumn>
                  <TableRowColumn style={styles.ipNameTableCol}>{row.name}</TableRowColumn>
                  <TableRowColumn style={{color: '#dbab83'}}>{row.price}</TableRowColumn>
                  <TableRowColumn style={{color: '#dbab83'}}>{row.amount}</TableRowColumn>
                  <TableRowColumn style={{color: '#dbab83'}}>{row.vol}</TableRowColumn>
                  <TableRowColumn style={{color: '#dbab83'}}>{ipTrending(row.trending)}</TableRowColumn>
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