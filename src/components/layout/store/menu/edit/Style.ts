import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	editMenuStoreWrapper: {
		height: '100%',
		width: '100%'
	},
	content: {
		width: '546px',
		borderRadius: '5px',
		backgroundColor: 'var(--color-white)',
		padding: '36px 24px 18px 23px !important',
		fontSize: '12px'
	},
	item: {
		marginBottom: '16px'
	},
	subItem: {
		marginBottom: '18px',
		"& label": {
			margin: '0 0 4px 0',
			padding: 0,
		}
	},
	groupRadios: {
		marginTop: '-18px',
		marginLeft: '-9px',
		marginBottom: '-19px',
	},
	timeWrapper: {},
	start: {
		color: 'var(--color-require)'
	},
	line: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
	},
	addMoreContainer: {
		display: 'flex',
		gap: '13px'
	},
	addMore: {},
	breadcrumbWrapper: {
		marginTop: '19px',
		marginBottom: '12px'
	},
	checkboxWrapper: {
		display: "flex",
		gap: '47px',
		"& label": {
			margin: '0'
		}
	},
	imageContainer: {
		display: "flex",
		justifyContent: 'space-between',
		marginBottom: '4px',
		"& p": {
			color: '#A3A8B7',
			fontSize: '7px',
			fontWeight: 700,
			fontStyle: 'italic',
		},
		"& p, label": {
			margin: 0,
			padding: 0
		}
	},
	importWrapper: {
		width: '499px',
		height: '188px',
		backgroundColor: '#E9E9E9',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		borderRadius: '8px'
	},
	iconImportImage: {
		color: '#A3A8B7',
		"& p": {
			fontWeight: '700'
		},
		"& :hover": {
			cursor: 'pointer'
		}
	},
	customInputFile: {}
}));
