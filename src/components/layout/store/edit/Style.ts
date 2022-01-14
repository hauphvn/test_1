import { makeStyles } from "@material-ui/core";

export const useStoreEditStyles = makeStyles(() => ({
	rootStoreEdit: {
		height: "100%",
		width: "100%",
	},
	storeEditContainer: {
		marginTop: 30,
		"& .MuiIconButton-root": {
			width: 42,
			height: 42,
		},
	},
	storeEditHeader: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end"
	},
	storeEditInfo:{
		width: "100%",
		marginTop: 16,
		borderRadius: 5,
		padding: '24px 30px 40px 30px !important',
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
			marginLeft: -7
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
	contentCol:{
		display: "flex",
		justifyContent: 'space-between',
	},
	contentRow: {
		display: "flex",
		flexDirection: "column",
		marginTop: 23,
		maxWidth: '47%',
		flex: 1,
		"& + div": {
			marginLeft: 13,
		},
		"& p": {
			minHeight: 17,
		},
	},
	uploadImageCard:{
		height: 250,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		backgroundColor: 'var(--color-gray-light)',
		border: 'none',
		boxSizing: 'border-box',
		borderRadius: 8,
		boxShadow: 'none'
	},
	uploadIcon:{
		margin: 'auto',
		"& .MuiSvgIcon-root":{
			fontSize: 45,
			color: 'var(--color-gray)'
		}
	},
	required:{
		color: 'red'
	}
}));
