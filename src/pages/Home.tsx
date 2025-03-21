import SearchBar from "../components/core/SearchBar";
import NewsFilters from "../components/filter/NewsFilters";
import { useDebounce } from "../hooks/useDebounce";

export default function HomePage() {
 
  const isLoading = false;
  const { deleteSearchValue, searchValue, setSearchValue } = useDebounce();

  return (
   
    <div className="flex flex-col w-screen bg-gray-50  px-4 sm:px-6 lg:px-8 py-4">
      <div className="mb-8">
      
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Latest News
        </h1>
        <div className="flex justify-center">
          <SearchBar
            handleSearch={(e) => {
              setSearchValue(e?.target?.value);
            }}
            value={searchValue?.toString()}
            deleteSearchValue={deleteSearchValue}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="hidden lg:block w-64 sticky top-8 h-fit">
          <NewsFilters onFilterChange={() => {}} />
        </div>
        <main className="flex-1">
          {isLoading ? <p>Loading...</p> : <p> News </p>}
        </main>
      </div>
    </div>
  );
}
