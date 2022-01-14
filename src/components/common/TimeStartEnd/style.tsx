import {makeStyles} from "@material-ui/core";

type TimeStartEndProps = {
	containerWidth?: string,
	startEndMargin?: string | number,
  fontWeightTitle?: number
}

const useStyle = makeStyles(() => ({
    rootTimeStartEnd: () => ({

    }),
    dateWrapper: {
        display: 'flex',
        width: (props: TimeStartEndProps) => (props.containerWidth),
        justifyContent:' space-between'
    },
    startDateWrapper: {
			width: '100%',
			marginRight: (props: TimeStartEndProps) => (props.startEndMargin),
    },
    endDateWrapper: {
			width: '100%',
    },
  title: {
      fontWeight: (props: TimeStartEndProps) => (props.fontWeightTitle),
  }
}))

export default useStyle;
