import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  blueAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#028090',
  },
};

function MemberAvatar(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      
      <Avatar className={classes.blueAvatar}>M</Avatar>
    </Grid>
  );
}

MemberAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberAvatar);
