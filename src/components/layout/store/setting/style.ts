import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  storeSettingWrapper: {
    height: '100%',
    width: '100%',
  },
  breadcrumbWrapper: {
    marginTop: '19px',
    marginBottom: '22px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    width: '546px',
    borderRadius: '5px',
    backgroundColor: 'var(--color-white)',
    padding: '36px 33px 18px 23px !important',
    fontSize: '12px'
  },
  item: {
    marginBottom: '16px'
  },
  subItem: {
    marginBottom: '18px',
    "& label": {
      margin: '0 0 4px 0',
      padding: 0,
    }
  },
  groupRadios: {
    marginTop: '-18px',
    marginLeft: '-9px',
  },
}));
