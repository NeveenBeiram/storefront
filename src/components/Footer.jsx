import React from 'react';
import { Typography } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
  root: {
    width: '100%',
    padding : '15px',
    'box-shadow': '0px -10px 30px -10px rgba(0,0,0,0.5)'
  },
});


function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    
<div style={{'background':'#dae1ed','margin-top':'50vh'}}>
      <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}}  showLabels  className={classes.root}>
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href='https://www.linkedin.com/in/neveen-beiram-8a6b41192/'/>
        <Typography style={{'padding-top':'20px'}}  component="h6" align="center" >&copy; Neveen Beiram 2021</Typography>
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href='https://github.com/NeveenBeiram'/>
      </BottomNavigation>

    </div>
   
  );
}

export default Footer;