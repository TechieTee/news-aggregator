import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface FilterState {
  dateRange: DateRange;
}

const initialState: FilterState = {
  dateRange: {
    startDate: null,
    endDate: null,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
  },
});

export const { setDateRange } = filterSlice.actions;
export default filterSlice.reducer;