import { makeStyles } from "@material-ui/core";

export const useImportDataStyles = makeStyles(() => ({
	rootImportData: {
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
	importDaraContainer: {
		marginTop: 30,
		"& .MuiButton-root": {
			backgroundColor: "var(--color-icon-table) !important",
		},
	},
	importDataFilterHeader: {
		maxWidth: "100%",
		display: "flex",
		flexFlow: "row-reverse"
	},
	headerCol: {
		display: "flex",
		flexDirection: "column",
		maxWidth: "50%"
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
	importDataTable:{
		width: "100%",
		marginTop: 16,
		borderRadius: 5,
		padding: '21px 26px 49px 26px !important',
		backgroundColor: 'var(--color-white)',
	},
}));