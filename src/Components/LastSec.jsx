import React from 'react';
import{Box, Grid,CardMedia,Button} from "@material-ui/core"
import Lottie from "react-lottie"
import motorbike from "./../animations/motorbike.json"
import { makeStyles } from '@material-ui/core/styles';
import { FormControl,FormHelperText,Input,InputLabel} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root:{
    marginTop:10, 

  },
 
}))
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: motorbike,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }}

function LastSec() {
  const classes = useStyles();


  return (
    <div>
      <Box bgcolor="secondary.main" color="text.disabled" width={"100%"} textAlign="center"fontSize="h4.fontSize">
         For orders 
        </Box>
        <Grid container xs={12} spacing={2} className={classes.root}>
          <Grid item xs> 
          <CardMedia>
   <Box  bgcolor="primary.main" color="warning.light" width={'100%'} textAlign="center" fontSize="h4.fontSize"> 
   Free Home Delivery
   </Box>
  <Lottie
               options={defaultOptions}
                    height={"75%"}
                    width={"75%"}
                > </Lottie>
  </CardMedia>

          </Grid>
          <Grid item xs textAlign="centre">
            
            <Box bgcolor="success.main" color="warning.light" width={'100%'} textAlign="center" fontSize="h4.fontSize">
            Customers Detail </Box>
            
             <Box flexWrap="wrap">
            
            <FormControl fullWidth="true" margin="normal" size="medium" varaint="filled"  >
             <InputLabel >Name:</InputLabel>
            <Input />
           </FormControl>
           <FormControl fullWidth="true" margin="normal" size="medium" varaint="filled">
             <InputLabel>Address:</InputLabel>
            <Input/>
            
             </FormControl>
             <FormControl fullWidth="true" margin="normal" size="medium" varaint="filled">
             <InputLabel>Mobile no:</InputLabel>
            <Input/>
            <FormHelperText id="my-helper-text">We'll never share your Mobile.</FormHelperText>
             </FormControl>
             <FormControl fullWidth="true" margin="normal" size="medium" varaint="filled">
             <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input />
            <FormHelperText>We'll never share your email.</FormHelperText>
             </FormControl>
 <Button size="large" variant="contained" color="primary"> Confirm Order </Button>
             </Box>
            
            </Grid>

      </Grid>
      
       

    </div>
  );
}

export default LastSec;