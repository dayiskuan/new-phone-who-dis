import React, { useState } from "react";
import { makeStyles, Button, TextField, InputBase } from "@material-ui/core";
import Nui from "../../../../os/nui-events/utils/Nui";

import CloseIcon from '@material-ui/icons/Close';

import "../Sellout.css"
import {useListingModal} from "../../hooks/useListingModal";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: "100%",
    backgroundColor: '#F9F9F9',
    height: '100%',
    margin: "auto",
    textAlign: "center",
    fontFamily: "'Libre Franklin', sans-serif"
  },
  hidden: {
    display: 'none'
  },
  input: {
    marginBottom: 20,
    fontFamily: "'Libre Franklin', sans-serif"
  },
  textFieldInput: {
    fontSize: 18,
    background: "#EBEBEB",
    color: '#272727',
    fontWeight: 600,
    textIndent: 3,
    borderRadius: 15,
    padding: 15,
    fontFamily: "'Libre Franklin', sans-serif"
  },
  multilineFieldInput: {
    fontSize: 18,
    background: "#EBEBEB",
    borderRadius: 15,
    fontFamily: "'Libre Franklin', sans-serif",
    color: '#272727',
    textIndent: 3,
    fontWeight: 600,
    padding: 15
  },
  postButton: {
    display: "block",
    margin: "auto",
    background: "#f44336",
    width: "80%",
    fontSize: 20,
  },
}));

export const ListingForm = () => {
  const classes = useStyles();

  const { modal, setModal } = useListingModal()

  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ description, setDescription ] = useState('');

  const addListing = () => {
    Nui.send('phone:addListing', {
      title,
      url,
      description
    })
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className={modal ? classes.root : classes.hidden}>
      <h1 style={{ color: '#272727' }}>New Listing</h1>
      <InputBase
        className={classes.input}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        inputProps={{ className: classes.textFieldInput }}
        style={{ width: "80%" }}
      />

      <InputBase
        className={classes.input}
        placeholder="Category"
        inputProps={{ className: classes.textFieldInput }}
        style={{ width: "80%" }}
      />

      <InputBase
        className={classes.input}
        placeholder="Image or URL link"
        inputProps={{ className: classes.textFieldInput }}
        style={{ width: "80%" }}
      />

      <InputBase
        className={classes.input}
        placeholder="Price"
        onChange={e => setUrl(e.target.value)}
        inputProps={{ className: classes.textFieldInput }}
        style={{ width: "80%" }}
      />

      <InputBase
        className={classes.input}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        inputProps={{ className: classes.multilineFieldInput }}
        style={{ width: "80%" }}
        multiline
        rows={3}
      />

      <Button onClick={addListing} className={classes.postButton}>Post</Button>
      <div>
        <Button onClick={closeModal}>
          <h3 style={{ color: '#272727' }}>Cancel</h3>
        </Button>
      </div>
    </div>
  );
};
