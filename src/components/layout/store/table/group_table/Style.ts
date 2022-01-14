import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	groupTableWrapper: {
		height: '100%',
		width: '100%',
	},
	content: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	actionWrapper: {
		display: "flex",
		justifyContent: 'space-between',
		width: '100%'
	},
	inputWrapper: {
		flex: 1,
		display: "flex"
	},
	importWrapper: {
		marginRight: '19px'
	},
	exportWrapper: {},
	button: {
		margin: '10px'
	},
	searchInput: {
		width: '40%',
		marginRight: '16px'
	},
	filterTitle: {
		flexBasis: '30%',
		flexGrow: 0,
		flexShrink: 0,
		marginBottom: '0px'
	},
	tableContainer: {
		height: 'auto',
		backgroundColor: 'var(--color-white)',
		marginTop: '26px',
		borderRadius: '5px',
		padding: '14px 24px 60px 25px !important'
	},
	title: {
		fontSize: 'var(--font-size-title)',
		fontWeight: 400
	},
	breadcrumbWrapper: {
		marginTop: '19px',
		marginBottom: '24px',
	},
	paginationWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginTop: '30px !important'
	}
}));
