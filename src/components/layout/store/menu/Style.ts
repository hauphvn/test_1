import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	storeMenuWrapper: {
		height: '100%',
		width: '100%',
	},
	content: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	searchWrapper: {
		display: "flex",
		alignItems: "center",
		marginBottom: '23px'
	},
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
		backgroundColor: 'var(--color-white)',
		padding: '14px 24px 60px 26px !important',
		height: 'auto',
	},
	title: {
		fontSize: 'var(--font-size-title)',
		fontWeight: 400
	},
	breadcrumbWrapper: {
		marginTop: '19px',
		marginBottom: '24px'
	},
	paginationWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginTop: '30px',
		paddingRight: '58px'
	}
}));
