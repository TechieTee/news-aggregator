import { useDispatch, useSelector } from "react-redux";
import { categories, sources } from "../../utils/constants";
import { RootState } from "../../store";
import {
  setCategories,
  setSources,
  setDateRange,
} from "../../store/slices/preferencesSlice";
import DateRangePicker from "./DateRangePicker";
import Checkbox from "../core/Checkbox";

export default function NewsFilters() {
  const dispatch = useDispatch();
  const preferences = useSelector((state: RootState) => state.preferences);

  const handleCategoryChange = (category: string) => {
   
    dispatch(setCategories(category));
  };

  const handleSourceChange = (sourceId: string) => {
    const updatedSources = preferences.sources.includes(sourceId)
      ? preferences.sources.filter((s) => s !== sourceId)
      : [...preferences.sources, sourceId];
    dispatch(setSources(updatedSources));
  };

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    dispatch(setDateRange({ startDate, endDate }));
  };

  const categoryOptions = categories.map((category) => ({
    id: category.id,
    label: category.name,
  }));

  const sourceOptions = sources.map((source) => ({
    id: source.id,
    label: source.name,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-6 h-[70vh] md:h-[90vh] overflow-y-auto">
      <section>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <Checkbox
          options={categoryOptions}
          selectedValues={preferences.categories}
          onChange={handleCategoryChange}
          disabled={preferences.sources.length > 0}
          singleSelect
        />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Sources</h3>
        <Checkbox
          options={sourceOptions}
          selectedValues={preferences.sources}
          onChange={handleSourceChange}
          disabled={preferences.categories !== "all"}
        />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Date Range</h3>
        <div className="space-y-2">
          <DateRangePicker onDateChange={handleDateChange} />
        </div>
      </section>
    </div>
  );
}
