import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "src/redux_management/counter/counterSlice";
import userReducer from "src/redux_management/user/userSlice";
import restaurantReducer from "src/redux_management/restaurant/restaurantSlice";
import editUserReducer from "../redux_management/user/editUserSlice";
import editStoreReducer from "src/redux_management/restaurant/editStoreSlice";
import storeReducer from "src/redux_management/store/storeSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    editUser: editUserReducer,
		restaurant: restaurantReducer,
		editStore: editStoreReducer,
    store: storeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
