import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(() => ({
    rootColumnSearch: () => ({
    }),
    searchWrapper: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }),
    listDropdownWrapper: () => ({
        maxHeight: '200px'
    }),
    checked: {
        color: 'var(--primary-color)'
    }
}))

export default useStyle
