import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(() => ({
    rootUserPage: {
        width: '100%',
        fontSize: 'var(--font-size-12)'
    },
    breadcrumbWrapper: {
        marginTop: '19px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    content: {
        maxWidth: '100%',
    },
    control: {
        display: "flex",
        gap: '13px'
    },
    item: {
        flex: 1
    },
    lastItem: {
        // backgroundColor: '#ccc',
        flex: 2,
    },
    colTitle: {
        marginBottom: 8,
        fontWeight: 600,
    },
    filterInput: {
        flex: 1,
    },
    searchWrapper: {
        display: "flex",
        gap: '13px'
    },
    timeWrapper: {
        // width: '327px'
    },
    timeLabelWrapper: {},
    tableWrapper: {
        backgroundColor: 'var(--color-white)',
        marginTop: '13px',
        borderRadius: '5px',
        padding: '14px 24px 60px 25px !important'
    },
    paginationWrapper: {
        display: 'flex',
        justifyContent: 'end',
        marginTop: '30px !important',
    }
}));

export default useStyle;
