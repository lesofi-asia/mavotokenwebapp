import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';

const toolbarStyles = theme => ({
    root: {
      paddingRight: 2,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.A700,
            backgroundColor: theme.palette.secondary.A100,
          }
        : {
            color: theme.palette.secondary.A100,
            backgroundColor: theme.palette.secondary.A700,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
});

const deleteOnClick=()=>{
    console.log('deleteOnClick')
}
let EnhancedTableToolbar = props => {
    const { numSelected, classes, title, deleteOnClick } = props;
  
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography type="subheading">{numSelected} selected</Typography>
          ) : (
            <Typography type="title">{title}</Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 && deleteOnClick ? (
             <Tooltip title="Delete">  
                <IconButton aria-label="Delete" onClick={deleteOnClick}>
                <DeleteIcon />
                </IconButton>
             </Tooltip>
            ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
};
  
EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deleteOnClick: PropTypes.func
};
  
EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

export default EnhancedTableToolbar;