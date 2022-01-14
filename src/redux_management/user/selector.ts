import {RootState} from "src/app/store";

export const listColumnSearch = (state: RootState) => state.user.columnSearchList;
export const listUsersOriginal = (state: RootState) => state.user.usersListOrigin;
export const listUsersShowTable = (state: RootState) => state.user.usersListShowTable;
export const listOptionsFilter = (state: RootState) => state.user.optionsFilter;
export const dataEditUser = (state: RootState) => state.editUser.dataUserOriginal
