import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {CommonButton} from '../Button';

export interface AlerDialogProps {
	open: boolean;
	handleOK?: () => void;
	handleClose: () => void;
	title?: string;
	message?: string;
}
export function AlerDialog(props: AlerDialogProps) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const { handleOK, open, handleClose, title, message } = props;

	return (
		<div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
           {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
					<CommonButton
						title={"OK"}
						height="40px"
						onClick={handleOK}
					/>
					<CommonButton
						title={"Cancel"}
						height="40px"
						onClick={handleClose}
					/>
        </DialogActions>
      </Dialog>
    </div>
	)
}
