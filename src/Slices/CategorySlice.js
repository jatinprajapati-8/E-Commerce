import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async ({ categoryName }) => {
    try {
      let res = await axios.post("/category/createCategory ", {
        categoryName,
      });
      console.log(res.data);
      return res.data.data;
    } catch (error) {
      console.log(
        "Error in create category Function categoryslice Frontend",
        error
      );
      throw new Error(error.response.data.message || error.message);
    }
  }
);

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    try {
      let res = await axios.get("/category");
      return res.data.data;
    } catch (error) {
      console.log(
        "Error in create category Function categoryslice Frontend",
        error
      );
      throw new Error(error.response.data.message || error.message);
    }
  }
);

const categoryslice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      // state.categories = action.payload;
      state.categories?.push(action.payload)

    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
    ////////////////////////////////////////////////////////////////////////////////////
    builder.addCase(getAllCategory.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.categories = action.payload;
    });
    builder.addCase(getAllCategory.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
  },
});

export default categoryslice.reducer;
