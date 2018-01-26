import React, {Component} from 'react';
import { connect  } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { Link } from 'react-router-dom';
import EnhancedDataTable from '../../components/MaterialUi/DataTable/EnhancedDataTable';
import Avatar from 'material-ui/Avatar';
import TrendingUp from 'material-ui-icons/TrendingUp';
import TrendingDown from 'material-ui-icons/TrendingDown';
import TrendingFlat from 'material-ui-icons/TrendingFlat';
import ipAvatarThreeT from '../ImageAssets/ipAvatar/3TT.jpg';
import ipAvatarDsDingYao from '../ImageAssets/ipAvatar/DS_DingYao.jpg';
import ipAvatarEte from '../ImageAssets/ipAvatar/ETE.jpg';
import ipAvatarHhChanHouNam from '../ImageAssets/ipAvatar/HH_ChanHouNam.jpg';
import ipAvatarHhJiangTaiYang from '../ImageAssets/ipAvatar/HH_JiangTaiYang.jpg';

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

const getAvatarSrc=(ipCode)=>{
  switch(ipCode){
    case 'TDB':
      return ipAvatarHhChanHouNam;
    case 'YNB': 
      return ipAvatarDsDingYao; 
    case '3TT':
      return ipAvatarThreeT;
    case 'FSM':
      return ipAvatarEte;   
    case 'HHZ':
      return ipAvatarHhJiangTaiYang;     
    default: 
      return null;   
  }
}

const customCol = (col,row)=>{
  if (col.id==='ipAvatar'){
    const to=`/prototype/ipDetail/${row.id}`;
    return (
      <Link to={to}>
        <Avatar src={getAvatarSrc(row.ipCode)}  />
      </Link>
    )
  }
  if (col.id==='trending'){
    return ipTrending(row[col.id]);
  }
}

const columnData = [
  { id: 'ipAvatar', numeric: false, disablePadding: false, label: 'IP Avatar', customCol: true },
  { id: 'ipCode', numeric: false, disablePadding: false, label: 'IP Code' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Name of IP' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'vol', numeric: true, disablePadding: false, label: '24h Vol' },
  { id: 'trending', numeric: false, disablePadding: false, label: 'Trending', customCol: true },
];

const tableData = [
  {
    id: 1,
    ipAvatar: '/img/avatars/HH_ChanHouNam.jpg',
    ipCode: 'TDB',   
    name: 'Teddy Boy',
    price: '1,440',
    amount: '2,134',
    vol: '14,870',
    trending: 'up'
  },
  {
    id: 2,
    ipAvatar: '/img/avatars/DS_DingYao.jpg',
    ipCode: 'YNB',   
    name: 'Young & Beautiful',
    price: '849',
    amount: '1,156',
    vol: '325',
    trending: 'down'
  },
  {
    id: 3,
    ipAvatar: '/img/avatars/3TT.jpg',
    ipCode: '3TT',   
    name: '3000 years of Time Travel',
    price: '556',
    amount: '998',
    vol: '584',
    trending: ''
  },
  {
    id: 4,
    ipAvatar: '/img/avatars/ETE.jpg',
    ipCode: 'FSM',   
    name: 'Feng Shui Monsters',
    price: '1,220',
    amount: '1,786',
    vol: '24,006',
    trending: 'up'
  },
  {
    id: 5,
    ipAvatar: '/img/avatars/HH_JiangTaiYang.jpg',
    ipCode: 'HHZ',   
    name: 'Hong Hing Zhai',
    price: '1,387',
    amount: '2,006',
    vol: '25,123',
    trending: 'down'
  }
];

class IPsList extends Component {
    constructor(props, context){
      super(props, context);

      this.state = {
        order: 'asc',
        orderBy: 'ipCode',
        selected: [],
        data: tableData.sort((a, b) => (a.ipCode < b.ipCode ? -1 : 1)),
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
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
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
    
    render() {
      const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

      return (
          <div className='container' style={{backgroundColor: '#202020'}}>
            <div className='row'>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>{ this.props.translate('noOfIP') }: </span>
                        <span style={{color: '#dbab83'}}>75</span>
                    </div>
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>{ this.props.translate('market') }: </span>
                        <span style={{color: '#dbab83'}}>345</span>
                    </div>
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>{ this.props.translate('marketCap') }: </span>
                        <span style={{color: '#dbab83'}}>$1,235,809,896</span>
                    </div>
                    <div className="p-2">
                        <span style={{color: '#dbab83', fontWeight: 'bold'}}>{ this.props.translate('24hVolume') }: </span>
                        <span style={{color: '#dbab83'}}>$510,068</span>
                    </div>
                </div>
            </div>
            <div className='row'>
              <EnhancedDataTable 
                      title={'MAVO IP'}    
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
                      customColFunc={customCol}
                  />
            </div>
          </div>  
      );
    }
}

const mapStateToProps = (state) => {
  return {
      translate: getTranslate(state.locale)
  }
}

export default connect(mapStateToProps)(IPsList);