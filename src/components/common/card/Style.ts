import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(() => ({
    rootCard: {
			width: '120px',
			height: '110px',
			backgroundColor: 'var(--color-white)',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			borderRadius: '5px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			flexDirection: 'column',
    },
		iconWrraper: {
			borderRadius: '50%',
			width: '50px',
			height: '50px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		iconBox: {
			borderRadius: '50%',
			backgroundColor: 'var(--color-black)',
			width: '34px',
			height: '34px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		text: {
			paddingTop: '9px',
			fontWeight: 600,
			letterSpacing: '-0.3px',
			fontSize: '14px',
			lineHeight: '19px',
		}
}))

export default useStyle;
