import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateRange, PreferencesState } from "../../types";

const initialState: PreferencesState = {
  sources: [],
  categories: "all",
  dateRange: {
    startDate: null,
    endDate: null,
  },
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setSources: (state, action: PayloadAction<string[]>) => {
      state.sources = action.payload;
    },
    setCategories: (state, action: PayloadAction<string>) => {
      state.categories = action.payload;
    },

    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
  },
});

export const { setDateRange, setSources, setCategories } =
  preferencesSlice.actions;
export default preferencesSlice.reducer;
