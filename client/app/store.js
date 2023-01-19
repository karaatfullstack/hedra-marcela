import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allPropertiesReducer from "../features/property/propertiesSlice";
import propertyReducer from "../features/property/propertySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    properties: allPropertiesReducer,
    property: propertyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
