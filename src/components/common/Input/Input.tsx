import * as React from "react";
import { InputBase, InputLabel } from "@material-ui/core";
import { useInputStyles } from "./Style";

export interface InputProps {
  title?: string;
  titleMargin?: string;
	titleWidth?: string;
  name?: string;
  value: string | null | undefined;
  type?: string;
  width?: string;
  placeholder?: string;
  disable?: boolean
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export function Input(props: InputProps) {
  const { title, titleMargin, width, titleWidth, type, disable, ...restProps } = props;
  const classes = useInputStyles({ titleMargin, width, titleWidth });

  return (
    <div className={classes.rootInput}>
      {title && <InputLabel className={classes.title}>{title}</InputLabel>}
      <InputBase
        disabled={disable}
				type={type}
        autoComplete={`new-${type}`}
        fullWidth
        className={classes.input}
        {...restProps} />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  titleMargin: "10px",
  disable: false
};
