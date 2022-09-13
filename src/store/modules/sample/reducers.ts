import { createReducer } from '@reduxjs/toolkit';

import { type SampleReducerState, LocalActions } from './types';

const initialState: SampleReducerState = {
  count: 0,
};

export const sampleReducer = createReducer(initialState, (builder) => {
  builder.addCase(LocalActions.INCREMENT, (state) => ({ ...state, count: state.count + 1 }));
});
