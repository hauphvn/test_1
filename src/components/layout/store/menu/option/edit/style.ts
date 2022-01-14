import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  editOptionMenuWrapper: {
    height: '100%',
    width: '354px',
  },
  titleWrapper: {
    "& .MuiDialogTitle-root": {
      padding: '25px auto 15px auto'
    }
  },
  actionWrapper: {
    display: "flex",
    justifyContent: 'center',
    "& .MuiDialogActions-root": {
      marginBottom: '14px',
      marginTop: '4px'
    }
  },
  contentWrapper: {
    "& .MuiDialogContent-root": {
      margin: '0px',
      padding: '0 22px 0 16px',
    }
  },
  filterInput: {
    marginBottom: '19px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItemsWrapper: {
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '22px',
    marginBottom: '16px',
    justifyContent: 'space-between',
    "& .itemFirst": {
      flex: 1
    }
  }
}))
