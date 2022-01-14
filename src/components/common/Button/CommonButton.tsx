import React from "react";
import Button from "@material-ui/core/Button"
import useStyle from "./style"
import clsx from "clsx";

export interface ButtonProps {
  title?: string,
  float?: 'left' | 'right' | 'none',
  height?: string | number,
  width?: string | number,
  textColor?: string,
  backgroundColor?: string,
  disable?: boolean,
  leftIcon?:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  rightIcon?:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  onClick?: (value: any) => void;
  fontWeight?: string;
  boxShadow?: string,
  justifyContent?: string | 'left' | 'right' | 'center' | 'space-between',
  borderRadius?: string;
  minWidth?: string,
  fontSize?: string,
  border?: string
}

export function CommonButton(props: ButtonProps) {
  const {
    title,
    float,
    height,
    width,
    textColor,
    backgroundColor,
    disable,
    onClick,
    leftIcon,
    rightIcon,
    fontWeight,
    boxShadow,
    justifyContent,
    borderRadius,
    minWidth,
    fontSize,
    border
  } = props
  const classes = useStyle({justifyContent: justifyContent});
  return (
    <div className={classes.rootButton}>
      <Button
        classes={
          {
            startIcon: classes.icon,
            label: clsx({
              [classes.alignContent]: justifyContent
            })
          }
        }
        style={{
          minWidth: minWidth,
          float: float,
          color: textColor,
          height: height,
          width: width,
          backgroundColor: backgroundColor,
          boxShadow: boxShadow,
          fontSize: fontSize,
          fontWeight: fontWeight,
          paddingRight: '17px',
          paddingLeft: '17px',
          textTransform: 'none',
          borderRadius: borderRadius,
          border: border
        }}
        startIcon={leftIcon}
        endIcon={rightIcon}
        className={`${disable ? classes.disable : ''}`}
        disabled={disable}
        onClick={onClick}
      >
        {(title) ? (<span className={clsx({
          [classes.label]: (leftIcon)
        })}>
          {title}
        </span>): ''}
      </Button>

    </div>
  )
}

CommonButton.defaultProps = {
  textColor: 'var(--color-text)',
  backgroundColor: 'var(--primary-color)',
  height: '42px',
  width: 'auto',
  disable: false,
  fontWeight: 'bold',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  justifyContent: 'center',
  borderRadius: '5px',
  minWidth: 'auto',
  fontSize: '12px',
  border: 'none'
};

export default CommonButton
