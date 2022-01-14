import { makeStyles } from "@material-ui/core";

export const useLeftSideStyles = makeStyles(() => ({
	appContainer: {
		width: "100%",
		height: "auto",
		flexGrow: 1,

	},

	leftSideContainer: {
		minHeight: "95vh",
		maxWidth: '16.667%',
		position: "fixed",
		width: 350,
		top: 56,
		backgroundColor: "var(--color-white)",
		padding: "27px 16px 0px 16px",
		"& .MuiList-root":{
			padding: 0
		},
		"& .MuiListItem-gutters": {
			padding: 11,
		},

		"& .MuiListItem-root": {
			minWidth: 40,
			height: 42,
			marginBottom: 10,
			borderRadius: 5,
			"&.Mui-selected": {
				backgroundColor: "var(--primary-color)",
				boxSizing: "border-box",
				color: "var(--color-white)",
				"& .MuiListItemIcon-root": {
					color: "var(--color-white)",
				},
			},
			"& .MuiListItemIcon-root": {
				minWidth: 40,
				color: "var(--color-black)",
			},
		},
		
		"& .MuiListItemText-primary": {
			fontSize: "var(--font-size-14)",
		},
	},

	contentContainer: {
		minHeight: "94vh",
		position: "relative",
		top: 56,
		padding: '46px 24px !important',
		"& div": {
			padding: 0
		},
		backgroundColor: "var(--color-background)"
	},
}));
