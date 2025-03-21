import { ChangeEvent } from 'react';
import { Icon } from '@iconify/react';

interface Props {
  handleSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  deleteSearchValue?: () => void;
}

export default function SearchBar({ handleSearch, value, deleteSearchValue,  }: Props) {
 

  return (
    <div className="relative">
      <Icon icon="ph:magnifying-glass" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        placeholder="Search news..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
       {value && (
        <button
          type="button"
          className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={deleteSearchValue}
        >
          <Icon icon="ph:x" className="w-4 h-4 text-red-500" />
          <span className="hidden">close</span>
        </button>
      )}
    </div>
  );
}