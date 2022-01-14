import { makeStyles, withStyles } from '@material-ui/core';
import Select from "@material-ui/core/Select";

type Props = {
	width?: number | string;
}

export const useSelectStyles = makeStyles(() => ({
	rootSelect: {
		width: '100%',
		"& .MuiInput-underline:before, & .MuiInput-underline:after": {
			content: 'none'
		},
		"& .MuiSelect-select:focus": {
			borderRadius: '5px',
			backgroundColor: 'var(--color-white)',
		},
		"& .MuiSelect-nativeInput": {
			display: 'none'
		}
	},
	formControl: {
		width: (props: Props) => props.width,
	},
}));

export const StyledSelect = withStyles({
	root: {
		background: 'var(--color-white)',
		borderRadius: 5,
		border: 0,
		color: 'var(--color-text)',
		padding: '13px 19px !important',

	},
	select: {
		maxWidth: '100%',
		boxSizing: 'border-box',
		outline: 'none',
		height: '42px',
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		right: '9px',
		color: 'var(--color-black)'
	},

})(Select);