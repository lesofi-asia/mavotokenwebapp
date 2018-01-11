import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, {
    TableFooter,
    TablePagination,
    TableRow,
} from 'material-ui/Table';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 800,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
});

let EnhancedDataTable = props => {
    const { title,selected,order,orderBy,page,rowsPerPage,data,columnData,
        handleSelectAllClick,handleRequestSort,isSelectedFunc,handleClick,
        handleKeyDown,handleChangePage,handleChangeRowsPerPage,classes,
        deleteOnClick,customColFunc
     } = props;
    
    return (
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} title={title} deleteOnClick={deleteOnClick}/>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
                columnData={columnData}
              />
              <EnhancedTableBody 
                  data={data}
                  columnData={columnData}
                  //isSelectedFunc={isSelectedFunc}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  handleClick={handleClick}
                  handleKeyDown={handleKeyDown}
                  customColFunc={customColFunc}
              />
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Paper>
    );
}

EnhancedDataTable.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.array.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    columnData: PropTypes.array.isRequired,
    handleSelectAllClick: PropTypes.func.isRequired,
    handleRequestSort: PropTypes.func.isRequired,
   // isSelectedFunc: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
    deleteOnClick: PropTypes.func
};

EnhancedDataTable = withStyles(styles)(EnhancedDataTable);
export default EnhancedDataTable;