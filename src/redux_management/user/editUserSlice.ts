import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import EditUser from "../../models/editUser";
import {getAllDataEditUser, updateEditUser} from "../../api/userApi";
import {create} from "domain";

export interface EditUserState {
  dataUserOriginal: EditUser
};

const initialState: EditUserState = {
  dataUserOriginal: new EditUser()
};

export const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
builder
  .addCase(getDataEditUserAsync.pending, (state) => {
  })
  .addCase(getDataEditUserAsync.fulfilled, (state, action) => {
    state.dataUserOriginal = action.payload.listDataUser
  })
  }
});

export const getDataEditUserAsync = createAsyncThunk(
  "editUser/getAllDataUser",
  async(param: {
    userId: string
  }) => {
    const response = await getAllDataEditUser(param.userId);
    return response;
  }
)
export const updateDataEditUserAsync = createAsyncThunk(
  "editUser/updateEditUser",
  async(param:{
    user: EditUser
  }) => {
    const response = await updateEditUser(param.user);
    return response;
  }
)
export const {} = editUserSlice.actions;
export default editUserSlice.reducer;
