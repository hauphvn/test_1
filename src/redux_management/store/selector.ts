import {RootState} from "src/app/store";

export const listStoreOriginal = (state: RootState) => state.store.listStoreOriginal;
export const listAccountBetaOriginal = (state: RootState) => state.store.listAccountBetaOriginal;
export const listMenuStoreByStoreId = (state: RootState) => state.store.listMenuStoreByStoreId;
export const listAccountBetaSearch = (state: RootState) => state.store.listAccountBetaSearch;
export const storeDetail = (state: RootState) => state.store.storeById;
export const loadingListStore = (state: RootState) => state.store.status;
