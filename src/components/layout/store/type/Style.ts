import { makeStyles } from "@material-ui/core";

export const useStoreTypeStyles = makeStyles(() => ({
	rootStoreType: {
		height: "100%",
		width: "100%",
		'@global': {
			'*::-webkit-scrollbar': {
				width: '0.5em'
			},
			'*::-webkit-scrollbar-thumb': {
				backgroundColor: 'var(--color-gray)',
				borderRadius: 5
			}
		}
	},
	storeTypeContainer: {
		marginTop: 30,
		"& .MuiIconButton-root": {
			width: 42,
			height: 42,
		},
	},
	storeTypeFilterHeader: {
		maxWidth: "50%",
		display: "flex",
	},
	headerCol: {
		display: "flex",
		flexDirection: "column",
		maxWidth: "50%"
	},
	filterInput: {
		flex: 2,
	},
	title: {
		fontSize: "var(--font-size-12)",
		marginBottom: 8,
		fontWeight: 600,
	},
	input: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		"& div + div": {
			marginLeft: 13,
		},
		"& div:nth-child(1)": {
			flex: 1,
		},
	},
	storeTypeTable:{
		width: "100%",
		marginTop: 16,
		borderRadius: 5,
		padding: '21px 26px 49px 26px !important',
		backgroundColor: 'var(--color-white)',
	},
	tablePagination: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: 30,
	}
}));
