import { makeStyles } from "@material-ui/core";

type Props = {
	titleMargin?: string;
	titleWidth?: string;
	width?: string;
};

export const useInputStyles = makeStyles(() => ({
	rootInput: {
		display: "flex",
		alignItems: "center",
		width: (props: Props) => props.width,
		marginBottom: 0,
		"& .MuiInputLabel-root": {
			marginBottom: 0,
		},
		"& .MuiInputBase-input": {
			padding: 0,
		},
	},
	title: {
		marginRight: (props: Props) => props.titleMargin,
		width: (props: Props) => props.titleWidth,
	},
	input: {
		width: "100%",
		height: 42,
		fontSize: "var(--font-size-12)",
		borderRadius: 3,
		lineHeight: "16.37px",
		backgroundColor: "var(--color-input)",
		color: "var(--color-black)",
		padding: "13px 26px !important",
		border: "1px solid var(--color-grey-light)",
		'& input': {
			fontSize: 'var(--font-size-14)',
		}
	},
}));
