import {RootState} from "src/app/store";

export const listColumnSearch = (state: RootState) => state.restaurant.listColumnSearch;
export const listRestaurantsOriginal = (state: RootState) => state.restaurant.listRestaurantsOriginal;
export const listRestaurants = (state: RootState) => state.restaurant.listRestaurants;
export const listOptionsFilter = (state: RootState) => state.restaurant.listOptionsFilter;
export const storeInfo = (state: RootState) => state.editStore.storeInfo;