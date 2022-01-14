const {makeStyles} = require("@material-ui/core");
const useStyle = makeStyles(() => ({
    rootEditUserPage: {
        width: '100%',
        fontSize: 'var(--font-size-12)'
    },
    emptyInfoCol: {
        maxWidth: '80px'
    },
    formControl: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    breadcrumbWrapper: {
        marginTop: '19px',
        marginBottom: '30px',
    },
    content: {
        marginRight: '29px',
    },
    submitWrapper: {
        display: "flex",
        justifyContent: 'end'
    },
    infoWrapper: {
        "& .row": {
            margin: '0'
        },
        backgroundColor: 'var(--color-white)',
        borderRadius: '5px',
        marginTop: '21px',
        padding: '24px 25px 39px 32px!important',

    },
    itemTitle: {
        marginBottom: '23px',
        fontWeight: 600,
        fontSize: '16px'
    },
    subItem: {
        marginBottom: '18px',
        "& label": {
            margin: '0 0 4px 0',
            padding: 0,
        }
    },
    groupRadios: {
        marginTop: '-18px',
        marginLeft: '-9px'
    },
    tableWrapper: {
        backgroundColor: 'var(--color-white)',
        margin: '30px 29px auto 24px',
        padding: '32px 24px 15px 35px !important',
        paddingBottom: '35px',
        borderRadius: '5px'
    },
    start: {
        color: 'var(--color-require)'
    },
    importWrapper: {
        width: '100%',
        height: '211px',
        backgroundColor: '#E9E9E9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '8px'
    },
    iconImportImage: {
        color: '#A3A8B7',
        "& p": {
            fontWeight: '700'
        },
        "& :hover": {
            cursor: 'pointer'
        }
    },
    emptyItem: {
        height: '56px'
    },
    paginationWrapper: {
        display: 'flex',
        justifyContent: 'end',
        paddingTop: '48px !important'
    }

}));

export default useStyle;
