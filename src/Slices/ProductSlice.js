import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async ({ name, description, price, brand, category, instock, token }) => {
    try {
      let res = await axios.post(
        "/products/create ",
        {
          name,
          description,
          price,
          brand,
          category,
          instock,
        },
        {
          headers: {
            Authorization: `Bearer + ${token}`,
          },
        }
      );
      console.log(res.data);
      return res.data.data;
    } catch (error) {
      console.log(
        "Error in create product Function productSlice Frontend",
        error
      );
      throw new Error(error.response.data.message || error.message);
    }
  }
);

export const getAllproducts = createAsyncThunk(
  "products/getAllproducts",
  async () => {
    try {
      let res = await axios.get("/products");
      return res.data.data;
    } catch (error) {
      console.log(
        "Error in create product Function productSlice Frontend",
        error
      );
      throw new Error(error.response.data.message || error.message);
    }
  }
);

const productSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      // state.products = action.payload;
      state.products?.push(action.payload);
      toast.success("Product Created Successfully");
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
    ////////////////////////////////////////////////////////////////////////////////////
    builder.addCase(getAllproducts.pending, (state, action) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(getAllproducts.fulfilled, (state, action) => {
      state.pending = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getAllproducts.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
