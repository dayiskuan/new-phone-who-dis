import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper } from "@material-ui/core";
import { ListItem } from "../../../../ui/components/ListItem";
import { useItemModal } from "../../hooks/useItemModal";
import { useListingDetails } from "../../hooks/useListingDetails";

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

  },
  price: {
    fontWeight: 600,
    paddingLeft: '10px',
    fontFamily: "'Libre Franklin', sans-serif",

  },
  readMoreBtn: {
    background: '#FF9472',
    paddingLeft: '10px',
    '&:hover': {
      background: '#FE9485'
    }
  }
}));

export const SelloutItem = (listing) => {
  const classes = useStyles();

  const { setItemModal } = useItemModal()
  const { setDetails } = useListingDetails();

  const handleOpenListing = (listing) => {
    setDetails(listing)
    setItemModal(true)
  }

  return (
    <ListItem className={classes.root}>
      <div className={classes.content}>
        <Paper elevation={2} className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h5" style={{ padding: '5px 0px 0px 10px', }}>
              {listing.title}
            </Typography>
            <Typography variant="h6" className={classes.desc}>
              {listing.description.slice(0, 30)}...
            </Typography>
            <Typography variant="h6" className={classes.price}>
              ${listing.price}
            </Typography>
            <Button className={classes.readMoreBtn} onClick={() => handleOpenListing(listing)}>
              Read more
            </Button>
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
