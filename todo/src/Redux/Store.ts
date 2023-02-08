// This is what's going to hold our whole application's state
import { configureStore } from "@reduxjs/toolkit";

// Later we're going to import our reducer functions into here

export const store = configureStore({
    // map all our reducers to our store
    reducer :{

    }
});

//Because we are using typescript, we need to export a couple of special types
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;