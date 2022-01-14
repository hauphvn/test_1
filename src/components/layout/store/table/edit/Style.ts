import { makeStyles } from "@material-ui/core";

export const useStoreTableEditStyles = makeStyles(() => ({
	rootStoreTableEdit: {
		height: "100%",
		width: "100%",
	},
	storeTableEditContainer: {
	},
	storeTableEditHeader: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end"
	},
	storeTableEditInfo:{
		width: "50%",
		marginTop: 16,
		borderRadius: 5,
		padding: '10px 26px 30px 26px !important',
		backgroundColor: 'var(--color-white)',
		"& .MuiTypography-root":{
			fontSize: "var(--font-size-12)",
			fontWeight: 400
		},
		"& legend":{
			display: "none"
		},
		"& .MuiRadio-root":{
			width: 35,
			height: 35,
		},
		"& .MuiFormControlLabel-root":{
			marginLeft: -7,
			marginBottom: 0
		},
		"& .MuiSelect-root":{
			color: "var(--color-black)",
			border: "1px solid var(--color-grey-light)",
			fontSize: "var(--font-size-14)",
			paddingLeft: '26px !important',
		}
	},
	title: {
		fontSize: "var(--font-size-12)",
		marginBottom: 8,
		fontWeight: 400,
	},
	titleInfo:{
		fontSize: 'var(--font-size-16)',
		display: 'block',
		fontWeight: 600
	},

	contentRow: {
		display: "flex",
		flexDirection: "column",
		marginTop: 23,
		flex: 1,
		"& + div": {
			marginLeft: 13,
		},
		"& p": {
			minHeight: 17,
		},
	},
	required:{
		color: 'red'
	},
	saveButton:{
		marginTop: 30
	}
}));