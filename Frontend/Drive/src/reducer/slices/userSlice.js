import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstanse.js";

// Thunk for signing up
export const signup = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("users/register", userData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Signup error caught:", error);
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);
// Thunk for signing up
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("users/login", credentials, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);
// Thunk for logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "users/logout",
        {},
        {
          withCredentials: true,
        }
      );

      return;
    } catch (error) {
      console.log("logout failed");
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

// create slice

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("Signup error:", action.payload.error);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.clear();
        localStorage.setItem("isLoggedIn", "true");
        // localStorage.setItem("role", action.payload.data.user.role);
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.setItem("isLoggedIn", false);
        // localStorage.removeItem("role");
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
