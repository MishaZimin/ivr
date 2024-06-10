import { createReducer } from "@reduxjs/toolkit";
import { setData } from "./actions";

const initialState: any = {
  data: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(setData, (state, action) => {
    state.data = action.payload;
  });
});

export default rootReducer;
