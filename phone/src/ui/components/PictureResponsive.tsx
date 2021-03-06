import React from 'react';
import { makeStyles } from '@material-ui/core';

interface IProps {
  src: string;
  alt: string;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    objectFit: 'contain',
  },
});

export const PictureResponsive = ({ src, alt }: IProps) => {
  return <img className={useStyles().root} src={src} alt={alt} />;
};
