import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStoreInfo, updateStoreInfo } from "src/api/restaurantApi";
import { StoreModel } from "src/models";

export interface StoreState {
	storeInfo: StoreModel;
}

const initialState: StoreState = {
	storeInfo: new StoreModel()
};

export const storeSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getEditStoreInfoAsync.pending, (state) => {
			})
			.addCase(getEditStoreInfoAsync.fulfilled, (state, action) => {
				state.storeInfo = action.payload.storeInfo;
			})
	}
})

export const getEditStoreInfoAsync = createAsyncThunk(
	"storeEdit/getStoreInfo",
	async (storeId: string) => {
		const response = await getStoreInfo(storeId);
		return response;
	}
);

export const handleUpdateStoreInfoAsync = createAsyncThunk(
	"storeEdit/updateStoreInfo",
	async (storeInfo: StoreModel) => {
		const response = await updateStoreInfo(storeInfo);
		debugger
		return response;
	})


export default storeSlice.reducer;
