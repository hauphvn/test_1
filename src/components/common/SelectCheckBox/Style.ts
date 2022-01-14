import { makeStyles } from '@material-ui/core';

type Props = {
	width?: number | string;
}

export const useSelectCheckBoxStyles = makeStyles(() => ({
	rootSelect: {
	},
	formControl: {
		width: (props: Props) => props.width,
	},
}));