import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const getUserLocalStorage = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

axios.defaults.baseURL = "http://localhost:8000/api/v1";

export const register = createAsyncThunk(
  "auth/register",
  async ({ Firstname, lastname, email, password, address, phone }) => {
    try {
      let res = await axios.post("/user/register", {
        Firstname,
        lastname,
        email,
        password,
        address,
        phone,
      });
      return res.data.data;
    } catch (error) {
      console.log(
        "Error in register Functtion Auth Frontend auth Slice",
        error
      );
      throw new Error(error.response.data.message || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      let res = await axios.post("/user/login", {
        email,
        password,
      });
      return { user: res.data.data, token: res.data.token };
    } catch (error) {
      console.log("Error in login Functtion Auth Frontend auth Slice", error);
      throw new Error(error.response.data.message || error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    success: false,
    user: getUserLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    logoutSync: (state, action) => {
      state.user = null,
      state.error = null,
      state.loading = false,
      state.success = false,
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
    ////////////////////////////////////////////////////////////////////////////////////
    builder.addCase(login.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.user = action.payload;
      toast.success("User Logged in Successfully");
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(login.rejected, (state, action) => {
      state.pending = false;
      toast.error("Somthing went Wrong")
      state.error = action.error.message;
    });
  },
});

export default AuthSlice.reducer;
export const { logoutSync } = AuthSlice.actions;
