import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "src/api/authentication";
import { UserAuth } from "src/models";

export interface LoginState {
    userInfo: UserAuth;
    status: "idle" | "loading" | "failed",
}

const initialState: LoginState = {
    userInfo: {
        id: '',
        userName: '',
        password: '',
    },
    status: "idle",
};

export const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(handleLogin.fulfilled, (state, action) => {
                state.status = "idle";
                state.userInfo = action.payload;
            });
    },
});

export const handleLogin = createAsyncThunk(
    "login/auth",
    async (userInfo: UserAuth) => {
        const response = await login(userInfo);
        return response.data;
    }
);

export default authSlice.reducer;
