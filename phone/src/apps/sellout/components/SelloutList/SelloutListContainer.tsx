import React from "react";
import { useListing } from "../../hooks/useListing";
import { SelloutList } from "./SelloutList";
import SelloutSearch from "../search/SelloutSearch"
import {useListingModal} from "../../hooks/useListingModal";

import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  hidden: {
    display: 'none'
  },
  show: {
    display: 'block'
  }
}))

export const SelloutListContainer = () => {
  const { modal } = useListingModal()
  const { listing } = useListing();

  const classes = useStyles();
  return (
    <div className={modal ? classes.hidden : classes.show}>
      <SelloutSearch />
      <SelloutList listings={listing} />
    </div>
  )
};
