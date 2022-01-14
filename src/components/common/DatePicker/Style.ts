import {makeStyles} from "@material-ui/core";

export const useDatePickerStyles = makeStyles(() => ({
  rootDatePicker:(props: any) => ({
    width: props.width,
    minWidth: props.minWidth
  }),
  content: () => ({
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'space-around',
    height: 'var(--button-height)',
    borderRadius: '8px',
		border: '1px solid var(--color-grey-light)',
    margin: '0',
    fontSize: '8px',
    "& input": {
      fontSize: "12px",
      paddingLeft: '19px',
    },
    "& button": {
      padding: '10px',
      position: 'absolute',
      right: '0',
      top: '-8px'
    },
  }),
  icon: {
    color: 'var(--color-white)',
    backgroundColor: 'var(--primary-color)',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'var(--primary-color)',
      opacity: '.8'
    }
  }
}));
