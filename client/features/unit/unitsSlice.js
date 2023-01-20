import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUnits = createAsyncThunk("units/fetchAll", async () => {
  try {
    const { data } = await axios.get("/api/units");
    return data;
  } catch (error) {
    return error.message;
  }
});

const allUnitsSlice = createSlice({
  name: "units",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllUnits.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectUnits = (state) => state.units;

export default allUnitsSlice.reducer;
