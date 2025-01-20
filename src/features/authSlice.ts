import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "../services/api";
import { AuthState, LoginCredentials, LoginResponse, RegisterCredentials } from "../types/auth";

export const register = createAsyncThunk<void, RegisterCredentials>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await registerUser(credentials.name, credentials.email, credentials.password);

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk<LoginResponse, LoginCredentials>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials.email, credentials.password);

      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            console.log('ini di klik');
            
            const data = await logoutUser();
            return data.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const token = localStorage.getItem("token");
const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;
const isAuthenticated = !!token && !!user;

const initialState: AuthState = {
  user: user,
  token: token,
  isAuthenticated: isAuthenticated,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state: any, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(login.rejected, (state: any, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    });
    builder.addCase(logout.rejected, (state: any, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
