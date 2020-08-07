import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Box,Avatar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { green} from '@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
  root: {
    
    marginRight: theme.spacing(1)
    
  },

  tool:{

    align:'centre',
  },
  link: {
    display: 'flex',
    color:"primary",
    align:"center",
  
    
  

  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 30,
    height: 30,
     
  
  }, 
  avatar: {
    backgroundColor: green[500],
  
},
 



}));

export default function Header() {
  const classes = useStyles();



  return (
    
    <div>
      <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
      <Box  display='flex' flexGrow={1}>
      <Avatar aria-label="recipe"
       className={classes.avatar}>HB</Avatar>
          <Typography variant="h4" color="inherit">
            Home Bakers
          </Typography>
          </Box>
      <Breadcrumbs aria-label="breadcrumb">
      <Link className={classes.link}>
        <HomeIcon className={classes.icon} />
        Birthday Cakes
      </Link>
      <Link
        //href="/getting-started/installation/"
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Party Confectionary
      </Link>
      <Typography color="primary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Biscutes&Pastries
      </Typography>
    </Breadcrumbs>
     

  </Toolbar>
 
    </AppBar>
    </div>



  );
}
