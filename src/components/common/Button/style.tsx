import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(() => ({
    rootButton: () => ({

    }),
    disable: {
        backgroundColor: 'var(--disable-btn-color)!important'
    },
    icon: {
        margin: '0',
    },
    label: {
        marginLeft: '13px'
    },
    alignContent: (props: any) => ({
        display: 'flex',
        justifyContent: props.justifyContent
    })
}))

export default useStyle
