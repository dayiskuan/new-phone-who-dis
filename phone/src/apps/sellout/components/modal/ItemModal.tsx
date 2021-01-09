import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useItemModal } from '../../hooks/useItemModal';
import { useListingDetails } from '../../hooks/useListingDetails';
import useStyles from './modal.styles';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { spawnSync } from 'child_process';

export default function ItemModal() {
  const classes = useStyles();

  const { details, setDetails } = useListingDetails();
  const { itemModal, setItemModal } = useItemModal();

  const handleClose = () => {
    setDetails(null);
    setItemModal(false);
  };

  return (
    <div className={itemModal ? classes.root : classes.hidden}>
      {/* Header part */}
      <div
        className={classes.header}
        style={{
          backgroundImage: `url(${details.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button onClick={handleClose} className={classes.closeButton}>
          {<CloseIcon />}
        </button>
        <div>
          <button className={classes.editButton}>
            EDIT {<ExpandMoreIcon />}
          </button>
          <span className={classes.category}>{details.category}</span>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.titleSection}>
          <Typography className={classes.listingTitle}>
            {details.title}
          </Typography>
          <span className={classes.priceContainer}>${details.price}</span>
        </div>

        <div className={classes.metaContainer}>
          <div className={classes.metaSection}>
            <Typography className={classes.metaDetail}>
              <span style={{ color: '#504F4F' }}>Author:</span> {details.name}
            </Typography>

            <Typography className={classes.metaDetail}>
              <span style={{ color: '#504F4F' }}>Category:</span>{' '}
              {details.category}
            </Typography>

            <Typography className={classes.metaDetail}>
              <span style={{ color: '#504F4F' }}>Posted:</span> {details.posted}
            </Typography>
          </div>
        </div>

        <div className={classes.descContianer}>
          <h2 style={{ color: '#000', fontWeight: 500 }}>
            Listing Description
          </h2>
          <p style={{ float: 'left' }}>{details.description}</p>
        </div>
      </div>
    </div>
  );
}
