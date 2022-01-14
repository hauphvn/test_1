import { makeStyles, createStyles } from "@material-ui/core";

export const useTopBarStyles = makeStyles(() =>
	createStyles({
		topBarContainer: {
			flexGrow: 1,
		},
		logoBox: {
			display: "flex",
			alignItems: "center",
			flexBasis: "20%",
			justifyContent: 'space-between',
			"& .MuiAvatar-root": {
				width: "81px",
				height: "24px",
			},
		},
		topBar: {
			"& .MuiToolbar-root": {
				minHeight: 56,
				padding: '0px 30px',
				justifyContent: 'space-between'
			},
			boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
			backgroundColor: 'var(--color-white)',
			"& .MuiIconButton-root + .MuiIconButton-root": {
				marginLeft: 15
			},
			"& .MuiIconButton-colorPrimary": {
				color: 'var(--color-black)',
			},
		},
		userIcon: {
			color: 'var(--primary--color)',
		},
		menuButton: {
			marginRight: 10,
		},
	}),
);