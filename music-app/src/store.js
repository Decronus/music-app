import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user-api";
import { tracksApi } from "./tracks-api";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(tracksApi.middleware),
});
