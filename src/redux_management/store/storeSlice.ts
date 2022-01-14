import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MenuModel, StoreManagement, StoreModel} from "../../models";
import {
  deleteAccountBetaById,
  getAccountBetaByQuery,
  getAllAccountBeta, getAllMenuByStoreId,
  getAllStoreSystemManagement, getStoreById,
  updateStoreSystemManagement
} from "../../api/storeApi";
import {AppThunk} from "../../app/store";
import {listAccountBetaOriginal, listStoreOriginal} from "./selector";
import {AccountBeta} from "../../models/account";

export interface StoreState {
  storeById: StoreModel;
  listStoreOriginal: StoreManagement[],
  listMenuStoreByStoreId: MenuModel[],
  listAccountBetaOriginal: AccountBeta[],
  listAccountBetaSearch: AccountBeta[],
  status: "idle" | "loading" | "failed",
};
const initialState: StoreState = {
  storeById: new StoreModel(),
  listMenuStoreByStoreId: [],
  listStoreOriginal: [],
  listAccountBetaOriginal: [],
  listAccountBetaSearch: [],
  status: "idle",
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    updateStoreSingleAction: (state, action: PayloadAction<StoreManagement[]>) => {
      state.listStoreOriginal = action.payload;
    },
    resetListStore: (state) => {
      state.listStoreOriginal = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStoreSystemManagementAsync.pending, (state) => {
        state.listStoreOriginal = [];
        state.status = 'loading';
      })
      .addCase(getAllStoreSystemManagementAsync.fulfilled, (state, action) => {
        state.listStoreOriginal = action.payload.listStoreOriginal;
        state.status = "idle";
      })
      .addCase(getAllMenuByStoreIdAsync.pending, (state) => {
        state.listMenuStoreByStoreId = [];
        state.status = 'loading';
      })
      .addCase(getAllMenuByStoreIdAsync.fulfilled, (state, action) => {
        state.listMenuStoreByStoreId = action.payload.listStoreOriginal;
        state.status = "idle";
      })
      .addCase(getAllAccountBetaAsync.pending, (state) => {
        state.listAccountBetaOriginal = [];
        state.status = 'loading';
      })
      .addCase(getAllAccountBetaAsync.fulfilled, (state, action) => {
        state.listAccountBetaOriginal = action.payload.listAccountBetaOriginal;
        state.status = "idle";
      })
      .addCase(getAccountBetaByQueryAsync.pending, (state) => {
        state.listAccountBetaOriginal = [];
        state.status = 'loading';
      })
      .addCase(getAccountBetaByQueryAsync.fulfilled, (state, action) => {
        state.listAccountBetaOriginal = action.payload.listAccountBetaSearch;
        state.status = "idle";
      })
      .addCase(deleteAccountBetaAsync.pending, (state) => {
        state.listAccountBetaOriginal = [];
        state.status = 'loading';
      })
      .addCase(deleteAccountBetaAsync.fulfilled, (state, action) => {
        state.listAccountBetaOriginal = action.payload.listAccountBetaSearch;
        state.status = "idle";
      })
      .addCase(getStoreByIdAsync.pending, (state) => {
        state.storeById = new StoreModel();
        state.status = 'loading';
      })
      .addCase(getStoreByIdAsync.fulfilled, (state, action) => {
        state.storeById = action.payload.store;
        state.status = "idle";
      })
  }
});
export const getStoreByIdAsync = createAsyncThunk(
  "systemManagement/getStoreDetail",
  async (params:{storeId: string}) => {
    const response = await getStoreById(params.storeId);
    return response;
  }
)
export const getAllMenuByStoreIdAsync = createAsyncThunk(
  "systemManagement/getAllMenuByStore",
  async (params: {storeId: string, query: string}) => {
    const response = await getAllMenuByStoreId(params.storeId, params.query);
    return response;
  }
)

export const getAllStoreSystemManagementAsync = createAsyncThunk(
  "systemManagement/getAllStore",
  async () => {
    const response = await getAllStoreSystemManagement();
    return response;
  }
)

export const getAllAccountBetaAsync = createAsyncThunk(
  "systemManagement/getAllAccountBeta",
  async () => {
    const response = await getAllAccountBeta();
    return response;
  }
)

export const getAccountBetaByQueryAsync = createAsyncThunk(
  "systemManagement/searchAccountBetaByQuery",
  async (query: string) => {
    const response = await getAccountBetaByQuery(query);
    return response;
  }
)
export const updateStoreSystemManagementAsync = createAsyncThunk(
  "systemManagement/updateStore",
  async (param: {
    store: StoreManagement[]
  }) => {
    const response = await updateStoreSystemManagement(param.store);
    return response;
  }
)
export const deleteAccountBetaAsync = createAsyncThunk(
  "systemManagement/deleteAccountBeta",
  async (accId: string) => {
    const response = await deleteAccountBetaById(accId);
    return response;
  }
)

export const updateStoreSingle =
  (newStore: StoreManagement): AppThunk =>
    (dispatch, getState) => {
      const listStoreCurrent: StoreManagement[] = JSON.parse(JSON.stringify(listStoreOriginal(getState())));
      listStoreCurrent.forEach((store: StoreManagement) => {
        if(newStore.id === store.id){
          store.status = newStore.status;
          store.name = newStore.name;
          dispatch(updateStoreSingleAction(listStoreCurrent));
          return;
        }
    })
    };


export const {updateStoreSingleAction, resetListStore} = storeSlice.actions;
export default storeSlice.reducer;
