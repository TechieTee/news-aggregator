import { useDispatch, useSelector } from "react-redux";
import { categories, sources } from "./constants";
import { RootState } from "../../store";
import { setCategories, setSources } from "../../store/slices/preferencesSlice";
import { SearchParams } from "../../types";

interface Props {
  onFilterChange: (filters: Partial<SearchParams>) => void;
}

export default function NewsFilters({ onFilterChange }: Props) {
  const dispatch = useDispatch();
  const preferences = useSelector((state: RootState) => state.preferences);

  const handleCategoryChange = (category: string) => {
    onFilterChange({ category });
    const updatedCategories = preferences.categories.includes(category)
      ? preferences.categories.filter((c) => c !== category)
      : [...preferences.categories, category];
    dispatch(setCategories(updatedCategories));
  };

  const handleSourceChange = (sourceId: string) => {
    const updatedSources = preferences.sources.includes(sourceId)
      ? preferences.sources.filter((s) => s !== sourceId)
      : [...preferences.sources, sourceId];
    onFilterChange({ sources: updatedSources });
    dispatch(setSources(updatedSources));
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-6">
      <section>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={preferences.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Sources</h3>
        <div className="space-y-2">
          {sources.map((source) => (
            <label key={source.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={preferences.sources.includes(source.id)}
                onChange={() => handleSourceChange(source.id)}
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span>{source.name}</span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Date Range</h3>
        <div className="space-y-2"></div>
      </section>
    </div>
  );
}