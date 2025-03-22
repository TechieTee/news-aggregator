import { SetStateAction, useState } from "react";
import NewsFilters from "../components/filter/NewsFilters";
import NewsFeed from "../components/news/NewsFeed";
import SearchBar from "../components/core/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { Icon } from "@iconify/react";

export default function HomePage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { valueAfterTimeout, deleteSearchValue, searchValue, setSearchValue } =
    useDebounce();

  return (
    <div className="w-screen  md:px-6 lg:px-8 pb-4">
      <div className="flex md:gap-6">
        {/* Desktop filters */}
        <div className="hidden lg:block w-80 sticky top-8 h-fit">
          <NewsFilters />
        </div>

        {/* Mobile/Tablet filters drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-[100px] h-full w-80 bg-white transform">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Icon icon="material-symbols:close" className="w-6 h-6" />
                </button>
              </div>
              <NewsFilters />
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="fixed z-50 w-full lg:w-[calc(100%-450px)] bg-white py-2 ">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              News Aggregator
            </h1>
            <div className="flex justify-center items-center gap-2 ">
              <SearchBar
                handleSearch={(e: {
                  target: { value: SetStateAction<string | null> };
                }) => {
                  setSearchValue(e?.target?.value);
                }}
                value={searchValue?.toString()}
                deleteSearchValue={deleteSearchValue}
              />
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
                aria-label="Open filters"
              >
                <Icon
                  icon="material-symbols:filter-alt"
                  className="w-6 h-6 text-gray-600"
                />
              </button>
            </div>
          </div>
          <div className="mt-30">
            <NewsFeed query={valueAfterTimeout as string} />
          </div>
        </main>
      </div>
    </div>
  );
}
