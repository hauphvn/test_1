import { makeStyles } from "@material-ui/core";

export const useLoginStyles = makeStyles(() => ({
	rootLogin: {
		display: "flex",
		height: "100vh",
		width: "100%",
	},
	loginContainer: {
		margin: "auto",
		width: 409,
		height: 367,
		borderRadius: 5,
		backgroundColor: "var(--color-white)",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		padding: "32px 24px 35px 24px",
		"& .MuiAvatar-root": {
			width: "81px",
			height: "auto",
		},
	},
	title: {
		marginTop: 17,
		width: 130,
		height: 38,
		"& span": {
			fontSize: "var(--font-size-14)",
		},
	},
	button: {
		margin: "10px",
	},
	loginForm: {
		padding: "17px 0 17px 0",
		"& div + div": {
			marginTop: 16,
		},
		"& button": {
			marginTop: 14,
			borderRadius: "10px !important",
			width: "100% !important",
		},
	},
}));
