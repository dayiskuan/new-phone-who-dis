import React, {useState} from 'react';
import {TextField, Button, InputBase} from '@material-ui/core';
import useStyles from './search.styles';

import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from "@material-ui/icons/Search";
import {useListingModal} from "../../hooks/useListingModal";

const SelloutSearch = () => {
	const [search, setSearch] = useState('')

	const { modal, setModal } = useListingModal();

	const handleModal = () => {
		setModal(true)
	}

	const classes = useStyles();
	return (
		<div className={classes.searchContainer}>
			<div className={classes.header}>
      <h2 className={classes.headerTitle}>Marketplace</h2>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon style={{ color: '#838383' }} />
					</div>
					<InputBase
						placeholder='Search'
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
					/>
				</div>

				<div className={classes.subMenu}>
					<Button className={classes.subMenuButton}>
						Sort {<ExpandMoreIcon />}
					</Button>
					<Button className={classes.subMenuButton} onClick={handleModal}>
						Add {<AddIcon />}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SelloutSearch;