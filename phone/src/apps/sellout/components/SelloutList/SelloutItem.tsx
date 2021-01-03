import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper } from "@material-ui/core";
import { ImageDisplay } from "../images/ImageDisplay";
import { ListItem } from "../../../../ui/components/ListItem";
import ChatIcon from "@material-ui/icons/Chat";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "5px",
  },
  content: {
    display: "flex",
    marginTop: "-5px",
    flexFlow: "column nowrap",
    width: "100%",
  },
  paper: {
    borderRadius: 15,
    overflow: "auto",
    display: "flex",
    color: '#292929',
    justifyContent: 'space-between',
    height: "auto",
    background: "#fff",
    marginBottom: 20,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
  },
  header: {
    margin: 5,
  },
  headerTypo: {
    margin: 3,
  },
  desc: {
    padding: 3,
    fontSize: 16,
    color: '#838383',
    paddingTop: '5px',
    paddingLeft: '10px',
  },
  imageSection: {
    float: 'right',
  },
  listingImage: {

  }
}));

export const SelloutItem = (listing) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <div className={classes.content}>
        <Paper elevation={2} className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h5" style={{ padding: '5px 0px 0px 10px', }}>
              {listing.title}
            </Typography>
            <Typography variant="h6" className={classes.desc}>
              {listing.description}
            </Typography>
          </div>
          <div className={classes.imageSection}>
            <div className={classes.listingImage} style={{
              backgroundImage: `url(${listing.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '150px',
              height: '150px'
            }} />
          </div>
        </Paper>
      </div>
    </ListItem>
  );
};
