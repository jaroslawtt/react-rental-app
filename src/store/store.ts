import { configureStore } from "@reduxjs/toolkit";
import apartmentSlice from "./slices/AppartmentSlice";

export const store = configureStore({
    reducer: {
        apartments: apartmentSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
