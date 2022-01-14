import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    restaurantWrapper: {
        height: '100%',
        width: '100%',
    },
    button: {
        margin: '10px'
    },
		searchInput : {
			width: '40%',
			marginRight: '10px'
		},
	filterTitle: {
		flexBasis: '30%',
		flexGrow: 0,
		flexShrink: 0,
		marginBottom: '0px'
	},
	tableContainer: {
		height: 'auto',
		marginTop: '50px'
	},
	title: {
		fontSize: 'var(--font-size-title)',
		fontWeight: 400
	}
}));
