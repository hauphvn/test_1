import { makeStyles } from '@material-ui/core/styles';

export const useSwitchStyles = makeStyles(() => ({
    rootSwitch: {
    },
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 1,
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: 'var(--color-white)',
            '& + $track': {
                backgroundColor: 'var( --primary-color)',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: 'var(--color-green)',
            border: '6px solid var(--color-text)',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 13,
        border: `1px solid var(--color-grey)`,
        backgroundColor: 'var(--color-silver)',
        opacity: 1,
    },
    checked: {},
    focusVisible: {},
}));
