import React from 'react';
import EnhancedDataTable from '../../components/MaterialUi/DataTable/EnhancedDataTable';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

class Portfolio extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [
              createData('Cupcake', 305, 3.7, 67, 4.3),
              createData('Donut', 452, 25.0, 51, 4.9),
              createData('Eclair', 262, 16.0, 24, 6.0),
              createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
              createData('Gingerbread', 356, 16.0, 49, 3.9),
              createData('Honeycomb', 408, 3.2, 87, 6.5),
              createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
              createData('Jelly Bean', 375, 0.0, 94, 0.0),
              createData('KitKat', 518, 26.0, 65, 7.0),
              createData('Lollipop', 392, 0.2, 98, 0.0),
              createData('Marshmallow', 318, 0, 81, 2.0),
              createData('Nougat', 360, 19.0, 9, 37.0),
              createData('Oreo', 437, 18.0, 63, 4.0),
            ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
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

    render(){
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <br/>
                </div>    
                <div className='row'>
                    <div className='col-sm'>
                        <h2>Portfolio</h2>
                    </div>    
                </div> 
                <div className='row'>
                    <div className='col-sm'>
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
                        />
                    </div>        
                </div>       
            </div>    
        )
    }
}

export default Portfolio;