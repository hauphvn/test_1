import {SelectOptionModel} from "../../models/Select";
import {ItemColumnSearch} from "../../models/ItemColumnSearch";
import {createAsyncThunk, createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {getColumnSearchList, getOptionFilter, searchFilterUser, updateColumnSelected} from "../../api/userApi";
import {User} from "../../models";

export interface UserState {
    usersListOrigin: User[];
    usersListShowTable: User[];
    filtersSearchSelected: SelectOptionModel[];
    optionsFilter: SelectOptionModel[];
    columnSearchList: ItemColumnSearch[];
    startDate: string,
    endDate: string
};

const initialState: UserState = {
    usersListOrigin: [],
    usersListShowTable: [],
    filtersSearchSelected: [],
    optionsFilter: [],
    columnSearchList: [],
    startDate: '',
    endDate: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateColumnSelect: (state, action: PayloadAction<ItemColumnSearch[]>) => {
            const prevList = JSON.parse(JSON.stringify(current(state.columnSearchList)))
            let flag = false;
            prevList.forEach((item: any) => {
                flag = false;
                action.payload.forEach((newItem: any) => {
                    if (item.value == newItem.value) {
                        flag = true;
                        return;
                    }
                })
                item.checked = flag;
            })
            state.columnSearchList = prevList;
        },

        updateUserShowTable: (state) => {
            const headerList = JSON.parse(JSON.stringify(state.columnSearchList));
            const prevUserList = JSON.parse(JSON.stringify((state.usersListOrigin)));
            const newUsersList: User[] = [];
            const listColName: string[] = [];
            headerList.forEach((item: any) => {
                if (item.checked) {
                    listColName.push(item.text);
                }
            });
            prevUserList.forEach((item: any) => {
                const user: any = {};
                listColName.forEach((colName: any) => {
                    user[colName.toString()] = item[colName.toString()];
                })
                newUsersList.push(user);
            });
            state.usersListShowTable = newUsersList;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchFilterAsync.pending, (state) => {
                state.usersListOrigin = [];
            })
            .addCase(searchFilterAsync.fulfilled, (state, action) => {
                state.usersListOrigin = action.payload.usersList;
                userSlice.caseReducers.updateUserShowTable(state);
            })
            .addCase(getOptionsFilterSearchAsync.pending, (state) => {
                state.optionsFilter = [];
            })
            .addCase(getOptionsFilterSearchAsync.fulfilled, (state, action) => {
                state.optionsFilter = action.payload.optionsList;
            })
            .addCase(getColumnSearchListAsync.pending, (state) => {
                state.columnSearchList = [];
            })
            .addCase(getColumnSearchListAsync.fulfilled, (state, action) => {
                state.columnSearchList = action.payload.columnSearchList;
            })
    }
});

export const searchFilterAsync = createAsyncThunk(
    "user/search",
    async (param: {
        inputValue: string,
        filterBy: string[]
    }) => {
        const response = await searchFilterUser(param.inputValue, param.filterBy);
        return response;
    }
)
export const getOptionsFilterSearchAsync = createAsyncThunk(
    "user/getOptionFilterSearch",
    async () => {
        const response = await getOptionFilter();
        return response;
    }
)
export const getColumnSearchListAsync = createAsyncThunk(
    "user/getColumnSearch",
    async (userId: string) => {
        const response = await getColumnSearchList(userId);
        return response;
    }
)
export const updateColumnSelectedAsync = createAsyncThunk(
    "user/updateColumnSelected",
    async (userId: string) => {
        const response = await updateColumnSelected(userId);
        return response;

    }
)

export const {updateColumnSelect, updateUserShowTable} = userSlice.actions;
export default userSlice.reducer;
