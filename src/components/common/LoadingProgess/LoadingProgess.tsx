import { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useInputStyles } from './Style';

export interface LoadingProgessProps {
	loading: string;
}
export function LoadingProgess(props: LoadingProgessProps) {
	const { loading } = props;
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (loading === 'loading') {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [loading]);

	const classes = useInputStyles();
	return (
		<div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
				className={classes.rootLoadingProgess}
      >
				<CircularProgress disableShrink />
      </Dialog>
    </div>
	)
}