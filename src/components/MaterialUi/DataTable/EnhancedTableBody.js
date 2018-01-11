import React from 'react';
import PropTypes from 'prop-types';
import  {
    TableBody,
    TableCell,
    TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

let EnhancedTableBody = props => {
    const { data, page, rowsPerPage, columnData, isSelectedFunc, handleClick, handleKeyDown } = props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <TableBody>
        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
          //const isSelected = isSelectedFunc(n.id);
          return (
            <TableRow
              hover
              onClick={event => handleClick(event, n.id)}
              onKeyDown={event => handleKeyDown(event, n.id)}
              role="checkbox"
            //  aria-checked={isSelected}
              tabIndex={-1}
              key={n.id}
              selected={false}
              //selected={isSelected}
            >
             {/*
              <TableCell padding="checkbox">
                <Checkbox checked={isSelected} />
              </TableCell>
             */}
              {
                  columnData.map(col=> {
                      return (
                          <TableCell 
                            key={col.id} 
                            padding={col.disablePadding?'none':'default'} 
                            numeric={col.numeric}>{n[col.id]}</TableCell>
                      )
                  })
              }
            </TableRow>
          );
        })}
        {emptyRows > 0 && (
          <TableRow style={{ height: 49 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    )
}

EnhancedTableBody.propTypes = {
    isSelectedFunc: PropTypes.func,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    columnData: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired
};

export default EnhancedTableBody;