import React from 'react';
import './../App.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from'@material-ui/core/Grid'
import {Card,Box}from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green,pink} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({

  body:{
    backgroundColor:pink,
  },
  root: {
    maxWidth: 345,
  margin:20,
    marginTop: 20
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500],
},
 
}));

export default function IntroSec() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <div> 
 <Box textAlign="centre" bgcolor="secondary.light" color="text.disabled" width={"100%"} fontSize="h4.fontSize">
        Make Choice 
        </Box>
      <Grid container spacing={3} direction="row"> 
      
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            HB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chocolate and Vanilla Treat"
        subheader="August 5, 2020"
      />
      <CardMedia
        className={classes.media}
        image="/images/BC1.jpg"
        title="Cream ForestCake"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive BlackForestCake is a perfect party dish and a fun Bakery Item together with your
          guests. Add 1 cup of chocholate sprinkles, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
  
  <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
        HB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ice Cream Cake  Treat"
        subheader="August 5, 2020"
      />
      <CardMedia
        className={classes.media}
        image="/images/BC2.jpg"
        title="Ice Cream Cake"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This Ice Cream Cake  is a perfect Birthday party treat and a fun meal for your Children

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
  
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
        HB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pink Fuge Cake Treat"
        subheader="August 5, 2020"
      />
      <CardMedia
        className={classes.media}
        image="/images/BC3.jpg"
        title="Pink Fuge Cake"
      /> 
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This Ice Cream Cake  is a perfect Birthday party treat and a fun meal for your Children

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>

  </Grid>
  </div>
    );
}
