export const API_PATH = {
    AUTHENTICATION: {
        SIGN_IN: 'api/authentication/sign-in'
    }
}

export const NAVIGATION_PATH = {
    STORE: {
        INDEX: '/store/',
        DETAIL: '/store/:storeID',
        EDIT: '/store/:storeID/edit/',
        DETAIL_MENU: '/store/:storeID/menu/',
        DETAIL_CATEGORY: '/store/:storeID/category/',
        DETAIL_OPTION_MENU: '/store/:storeID/option-menu/',
        DETAIL_TYPE: '/store/:storeID/type/',
        DETAIL_TABLE: '/store/:storeID/table/',
        DETAIL_TABLE_EDIT: '/store/:storeID/:tableID/edit',
        DETAIL_GROUP_TABLE: '/store/:storeID/group-table/',
        DETAIL_SETTING: '/store/:storeID/setting/',
        DETAIL_IMPORT_DATA: '/store/:storeID/import-data/',
        DETAIL_EXPORT_DATA: '/store/:storeID/export-data/',
        MENU_STORE_EDIT: '/store/:storeID/:item/edit',
    },
    USER: {
        INDEX: '/user',
        EDIT: '/user/edit'
    },
    USER_CMC: {
        INDEX: '/user-cmc',
        EDIT: '/user-cmc/edit',
        ADD_NEW: '/user-cmc/add-new'
    },
    SETTING_CMC: {
        INDEX: '/setting-cmc'
    }
}
export const DATE_FORMAT = "yyyy-MM-dd";
