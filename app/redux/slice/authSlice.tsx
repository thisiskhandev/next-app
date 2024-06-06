import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface loginState {
  user: object;
  isLoading: boolean;
  isError: boolean;
}

const initialState: loginState = {
  user: {},
  isLoading: false,
  isError: false,
};

interface loginParams {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: loginParams) => {
    const payload = { username: email, password };
    const apiRoot = process.env.NEXT_PUBLIC_API_ROOT;
    if (!apiRoot) {
      throw new Error("API root is not defined!");
    }
    const res = await axios.post(apiRoot, payload);
    return res.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
