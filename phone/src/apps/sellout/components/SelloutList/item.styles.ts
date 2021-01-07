import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
}))

export default useStyles;