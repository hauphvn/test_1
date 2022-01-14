import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	settingCMCWrapper: {
		height: '100%',
		width: '100%'
	},
	content: {
		width: '546px',
		borderRadius: '5px',
		backgroundColor: 'var(--color-white)',
		padding: '36px 33px 30px 23px !important',
		fontSize: '12px'
	},
	breadcrumbWrapper: {
		marginTop: '19px',
		marginBottom: '13px'
	},
	item: {
		marginBottom: '16px',
		"& label": {
			fontSize: '12px',
		}
	},

}));
