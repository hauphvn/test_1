import CheckBox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core";

type CheckBoxStyle = {
	width?: string | number;
	labelWidth?: string | number;
};

export const useCheckBoxStyles = makeStyles(() => ({
	rootCheckBox: {
		"& .MuiSvgIcon-root": {
			fontSize: (props: CheckBoxStyle) => props.width,
		},
		"& .MuiFormControlLabel-label": {
			fontSize: (props: CheckBoxStyle) => props.labelWidth,
		},
		"& .MuiCheckbox-colorSecondary.Mui-checked": {
			color: "var(--primary-color)",
		},
	},
}));

export const StyledCheckbox = withStyles({
	root: {
		color: "silver",
		
	},
})(CheckBox);
