import React from 'react';
import {Grid,Box,CardMedia, Typography} from '@material-ui/core'
import Lottie from "react-lottie"
import Party from "./../animations/party.json"
import Burger from"./../animations/fastfood.json"
import HomeIcon from'@material-ui/icons/Home'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    
    marginTop:20, 
    //lineHeight:10
  },
 
}));


function MidSec() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Party,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }}
    const defaultOptions2= {
      loop: true,
      autoplay: true, 
      animationData: Burger,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}

  return (
    <div className={classes.root}>
      <Grid container xs={24} spacing={1}>
        <Grid item xs >
<Box flexWrap="wrap" display="flex" alignContent="centre" color="success.main">
  <Typography variant="h2">
   Home<HomeIcon color="primary" />Bakers
   </Typography>
   

  <Typography alignitems="flex-start" variant="h5" color="secondary" gutterBottom="true">
Made with Pure ingridients for your loved ones  
  </Typography>
  <Typography variant="body1" color="primary" gutterBottom="true">
 Try it and love it 

  </Typography>
  </Box>
  <Lottie
               options={defaultOptions2}
                    height={"50%"}
                    width={"50%"}
                />

</Grid>
<Grid item xs >
  <CardMedia>
   <Box  color="warning.light" width={'80%'} textAlign="center" fontSize="h4.fontSize"> 'Birth Day Specialist'</Box>
  <Lottie
               options={defaultOptions}
                    height={"100%"}
                    width={"100%"}
                />
  </CardMedia>
  

</Grid>
      </Grid>
      </div>
       

  
  );
}

export default MidSec;