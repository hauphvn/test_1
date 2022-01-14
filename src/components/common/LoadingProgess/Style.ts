import { makeStyles } from "@material-ui/core";

export const useInputStyles = makeStyles(() => ({
  rootLoadingProgess: {
		"& .MuiPaper-root": {
			boxShadow: 'none',
			overflow: 'hidden',
			background: 'transparent',
		}
  },
}));
