import React from 'react';
import { connect } from 'react-redux';
import EnhancedDataTable from '../../../components/MaterialUi/DataTable/EnhancedDataTable';
import Button from 'material-ui/Button';
import actionPlusIcon from '../../ImageAssets/actions/action_plus_icon.png';
import actionMinusIcon from '../../ImageAssets/actions/action_minus_icon.png';
import CustomDialog from '../../../components/CustomDialog';
import QRCode from 'qrcode.react';
import uuidv3 from 'uuid/v3';
import * as actions from '../../../redux/portfolio/actions';
import * as dialogActions from '../../../redux/dialogSession/actions';

let counter = 0;
function createData(symbol,availableBalance,pendingDeposit,reserved,total) {
  counter += 1;
  return { id: counter,action: 'Action', symbol, availableBalance, pendingDeposit, reserved, total };
}

const columnData = [
  { id: 'action', numeric: false, disablePadding: false, label: 'Actions',customCol: true },
  { id: 'symbol', numeric: false, disablePadding: false, label: 'Symbol' },
  { id: 'availableBalance', numeric: true, disablePadding: false, label: 'Available Balance' },
  { id: 'pendingDeposit', numeric: true, disablePadding: false, label: 'Pending Deposit' },
  { id: 'reserved', numeric: true, disablePadding: false, label: 'Reserved' },
  { id: 'total', numeric: true, disablePadding: false, label: 'Total' },
];

class AccountBalance extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            order: 'desc',
            orderBy: 'availableBalance',
            selected: [],
            data: [
              createData('BAT', 492119.39621730, 0.00000000, 0.00000000, 492119.39621730),
              createData('BCC', 0.00001770, 0.00000000, 0.00000000, 0.00001770),
              createData('BTG', 0.00000682, 0.00000000, 0.00000000, 0.00000682),
              createData('BTC', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('LTC', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('DOGE', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('VTC', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('PPC', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('FTC', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('RDD', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('AAA', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('AAB', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
              createData('AAC', 0.00000000, 0.00000000, 0.00000000, 0.00000000),
            ].sort((a, b) => (a.availableBalance < b.availableBalance ? -1 : 1)),
            page: 0,
            rowsPerPage: 5,
          };
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';
    
        if (this.state.orderBy === property && this.state.order === 'desc') {
          order = 'asc';
        }
    
        const data =
          order === 'desc'
            ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
            : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
    
        this.setState({ data, order, orderBy });
    };

    handleSelectAllClick = (event, checked) => {
        if (checked) {
          this.setState({ selected: this.state.data.map(n => n.id) });
          return;
        }
        this.setState({ selected: [] });
    };
    
    handleKeyDown = (event, id) => {
        //if (keycode(event) === 'space') {
        //    this.handleClick(event, id);
        //}
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };
    
    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };
    
    isSelected = id => this.state.selected.indexOf(id) !== -1;

    handleClick = (event, id)=> {

    }

    displayActionCol=(col,row)=>{
        return (
            <div style={{width: '50px'}}>
                <img src={actionPlusIcon} onClick={()=>this.depositFund(row)} style={{width: '20px'}} />
                &nbsp;&nbsp;
                <img src={actionMinusIcon} onClick={()=>this.withdrawFund(row)} style={{width: '20px'}} />
            </div>     
        )
    }

    depositFund=(row)=>{
        this.props.mvTokenSelected('deposit',row);
        this.props.openDialogAction();
    }

    withdrawFund=(row)=>{
        this.props.mvTokenSelected('withdraw',row);
        this.props.openDialogAction();
    }

    render(){
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
        const { portfolio } = this.props;
        const blockChainAddress=uuidv3('mavotoken.com',uuidv3.DNS)
        return (
            <div className='container'>
                <div className='row'>
                    <CustomDialog isModal={true} title={portfolio.mvToken?'MVT: '+portfolio.mvToken.symbol:''} >
                        <div className='container'>
                            <div className='row'>
                               {portfolio.mvToken?portfolio.mvToken.symbol:''} {portfolio.tranType} address:
                            </div>  
                            <div className='row'>
                                 {blockChainAddress} 
                            </div>       
                            <div className='row'>   
                               <QRCode value={blockChainAddress} />  
                            </div>    
                        </div>
                    </CustomDialog>
                </div>
                <div className='row'>
                    <EnhancedDataTable 
                        title={'Account Balances'}
                        selected={selected}
                        order={order}
                        orderBy={orderBy}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        data={data}
                        columnData={columnData}
                        handleSelectAllClick={this.handleSelectAllClick}  
                        handleRequestSort={this.handleRequestSort}
                        //isSelectedFunc={this.isSelected}
                        handleClick={this.handleClick}
                        handleKeyDown={this.handleKeyDown}
                        handleChangePage={this.handleChangePage}
                        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                        customColFunc={this.displayActionCol}
                    />
                </div>    
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        portfolio: state.portfolio
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        mvTokenSelected: (type,row) => {
          dispatch(actions.mvTokenSelected(type,row))  
        },
        openDialogAction:() => {
          dispatch(dialogActions.openDialog())  
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountBalance)