import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPropertiesAsync = createAsyncThunk(
  "properties/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("/api/properties");
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const addProperty = createAsyncThunk(
  "properties/addProperty",
  async ({ name, address, yearBuilt, totalUnits, description }) => {
    try {
      const { data } = await axios.post("/api/properties", {
        name,
        address,
        yearBuilt,
        totalUnits,
        description,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const allPropertiesSlice = createSlice({
  name: "properties",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPropertiesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectProperties = (state) => state.properties;

export default allPropertiesSlice.reducer;
