import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allPropertiesReducer from "../features/property/propertiesSlice";
import propertyReducer from "../features/property/propertySlice";
import unitReducer from "../features/unit/unitSlice";
import allUnitsReducer from "../features/unit/unitsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    properties: allPropertiesReducer,
    property: propertyReducer,
    units: allUnitsReducer,
    unit: unitReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
