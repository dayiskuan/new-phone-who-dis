import {fade, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  headerTitle: {
    fontFamily: "'Libre Franklin', sans-serif",
    fontSize: 32,
    textAlign: 'left',
    paddingLeft: 25
  },
	searchContainer: {
		width: '100%',
		margin: 'auto',
		textAlign: "center",
		height: 250,
		background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(242,112,156,1) 0%, rgba(255,148,114,1) 46%)'
	},
	header: {
		paddingTop: 10,
		width: '100%'
	},
	searchInput: {
		width: '100%',
	},
	rootInput: {
		color: '#000',
		backgroundColor: '#fff',
		borderRadius: 20,
		height: 25,
		fontFamily: "'Libre Franklin', sans-serif"
	},
	subMenu: {
		marginTop: 40,
		width: '85%',
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
	},
	subMenuButton: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
		backgroundColor: '#fff',
		color: '#838383',
    height: 30,
    fontSize: 16,
    '&:hover': {
      background: '#ddd'
    }
	},
	textFieldInput: {
		fontSize: 20,
	},
	inputRoot: {
		color: '#fff',
		fontSize: 18,
	},
	inputInput: {
		padding: theme.spacing(1, 0, 1, 0),
		transition: theme.transitions.create('width'),
		width: '100%',
		color: '#000',
		fontWeight: 500,
		height: '30px',
	},
	search: {
		position: 'relative',
		borderRadius: 20,
		backgroundColor: fade(theme.palette.common.white, 1.0),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 1.0),
		},
		color: '#838383',
		margin: 'auto',
		textAlign: 'center',
		width: '90%',
	},
	searchIcon: {
		color: '#838383',
		padding: theme.spacing(0, 0.5),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

}))

export default useStyles;