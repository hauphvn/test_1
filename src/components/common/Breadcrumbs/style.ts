import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  rootBreadcrumb: {
  },
	title: {
		fontSize: 18,
		lineHeight: '25px'
	},
	text: {
		fontSize: 12,
		lineHeight: '16px'
	},
	breadcrumbItem: {
		paddingTop: '9px',
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		'& a': {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			color: 'var(--color-blue)',
			fontSize: 12,
			lineHeight: '16px',

			'&:hover': {
				textDecoration: 'none',
			}
		}
	},
	activeBreadcrumb: {
		color: 'var(--color-gray) !important'
	}
}));
