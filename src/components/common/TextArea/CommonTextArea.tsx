import {FC} from "react";
import useStyle from "./style";
import {TextareaAutosize} from "@material-ui/core";

type Props = {
  maxRows?: number,
  minRows?: number,
  minWidth?: number,
  defaultValue?: string,
  placeholder?: string,
  onChange: (value: any) => void;
  border?: string;
  borderRadius?: string,
  width?: string
  height?: string
}

const CommonTextArea: FC<Props> = (
  {
    maxRows,
    minRows,
    minWidth,
    width,
    height,
    placeholder,
    defaultValue,
    border,
    borderRadius,
    onChange
  }
) => {
    // @ts-ignore
    const classes = useStyle();
    return (
        <div className={classes.rootTextArea}>
          <TextareaAutosize
            style={{
              height: height,
              width: width,
              border: border,
              borderRadius: borderRadius,
              minWidth: `${minWidth}px`
            }}
            onChange={onChange}
            maxRows={maxRows}
            minRows={minRows}
            aria-label="maximum height"
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </div>
    )
}
CommonTextArea.defaultProps = {
  maxRows: 10,
  minRows: 3,
  minWidth: 200,
  defaultValue: '',
  placeholder: '',
  border: '1px solid black',
  borderRadius: 'none',
  width: 'auto',
  height: 'auto'
}


export default CommonTextArea;
