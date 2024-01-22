import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../../types/types';
import productData  from './stackline_frontend_assessment_data_2021.json'

console.log("json", productData);

const initialState: ProductState = {
  items: [],
  status: 'idle',
  error: null
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return productData;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action:PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load product';
      });
  }
});

export default productsSlice.reducer;
