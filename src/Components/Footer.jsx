
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
//import {FaceBookIcon,WhatsAppIcon} from "@material-ui/icons"
//import indigo from '@material-ui/core/colors/indigo'

/*const useStyles = makeStyles({
 
//const primary =indigo[500],
 
  root: {
   flexGrow: 1,
   maxWidth: 1000,
  
    
  },
});*/

function Footer() {

  

  return (
    <Box bgcolor="secondary.main">
      
  <Tabs
    variant="fullWidth"
    indicatorColor="primary"
    textColor="primary"
    aria-label="icon tabs example"
  >
    <Tab label="Call" icon={<PhoneIcon />} aria-label="phone" />
    <Tab label="Like" icon={<FavoriteIcon />} aria-label="favorite" />
    <Tab label="Feedback"icon={<PersonPinIcon />} aria-label="person" />

  </Tabs>
    </Box>
  ); 
}

export default Footer;