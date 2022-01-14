import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	storeDetailWrapper: {
		height: '100%',
		width: '100%',
	},
	content: {
		margin: 0,
		padding: 0
	},
	rowItem: {
		marginBottom: '32px',
		'& .item': {
			flex: 0,
			paddingRight: '12px',
			paddingLeft: '12px'
		}
	},
	breadcrumbWrapper: {
		marginTop: '19px',
		marginBottom: '22px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	titleItem: {
		fontSize: '18px',
		fontWeight: 600,
		paddingLeft: '2px'
	}
}));
