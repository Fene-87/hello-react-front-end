import { configureStore } from "@reduxjs/toolkit";
import greetingsSlice from "./features/greetings/greetingsSlice";

const store = configureStore({
    reducers: {
        greetings: greetingsSlice
    }
})

export default store;
