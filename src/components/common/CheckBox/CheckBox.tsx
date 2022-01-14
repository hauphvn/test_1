import CheckboxBase from "@material-ui/core/Checkbox";
import { useCheckBoxStyles, StyledCheckbox } from "./Style";
import { FormControlLabel } from "@material-ui/core";

export interface CheckBoxProps {
	checked: boolean;
	label?: string;
	width?: string | number;
	labelWidth?: string | number;
	onChange: (event: any) => void;
}

export function CheckBox(props: CheckBoxProps) {
	const { label, width, labelWidth, ...restProps } = props;
	const classes = useCheckBoxStyles({ width, labelWidth });

	return (
		<div className={classes.rootCheckBox}>
			<FormControlLabel
				control={<StyledCheckbox {...restProps} />}
				label={label}
			/>
		</div>
	);
}

CheckBox.defaultProps = {
	width: "18px",
	labelWidth: "12px",
};
