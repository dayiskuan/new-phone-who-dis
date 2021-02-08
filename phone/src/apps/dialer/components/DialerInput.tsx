import React, { ChangeEvent, useContext } from 'react';
import { Box, IconButton, InputBase, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import { DialInputCtx, IDialInputCtx } from '../context/InputContext';
import Nui from '../../../os/nui-events/utils/Nui';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'right',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    display: 'flex',
    height: 100,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.h6.fontSize,
  },
  iconBtn: {
    padding: 10,
  },
}));

export const DialerInput = () => {
  const classes = useStyles();

  const { inputVal } = useContext<IDialInputCtx>(DialInputCtx);

  const handleCall = (number: string) => {
    Nui.send('phone:beginCall', {
      number,
    });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <Box component={Paper} className={classes.root}>
      <InputBase
        placeholder='Enter a number'
        className={classes.input}
        value={inputVal}
        onChange={handleInput}
      />
      <IconButton className={classes.iconBtn}>
        <PhoneIcon onClick={() => handleCall(inputVal)} />
      </IconButton>
    </Box>
  );
};
