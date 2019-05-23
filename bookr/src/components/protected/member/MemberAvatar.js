import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';
import "./member.css";

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
    color: '#028090',
    backgroundColor: "#f5f5f5" ,
  },
};



const MemberAvatar = props => {
  const handleAvatar = event => {
    props.logout(event);
  }
  const { classes } = props;
  return (
  
    <Grid container justify="center" alignItems="center" className="avatar-wrapper">
      {props.type !== "review" ? 
        <Avatar className={`${classes.blueAvatar} avatar-style`} onClick={handleAvatar}>{localStorage.getItem("username")[0].toUpperCase()}</Avatar>
        :
        <Avatar className={`${classes.orangeAvatar} avatar-style`} >{props.user[0].toUpperCase()}</Avatar>
    }
      
    </Grid>
  );
}

MemberAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberAvatar);


/*

    <Grid container justify="center" alignItems="center" className="avatar-wrapper">
    
      <Avatar className={`${classes.blueAvatar} avatar-style`} onClick={handleAvatar}>{localStorage.getItem("username")[0].toUpperCase()}</Avatar>
    </Grid>
    */