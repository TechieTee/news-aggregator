import { ChangeEvent } from "react";

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}
export interface PreferencesState {
  sources: string[];
  categories: string;
  dateRange: DateRange;
}

interface Option {
  id: string;
  label: string;
}

export interface CheckboxProps {
  options: Option[];
  selectedValues: string |string[];
  onChange: (value: string) => void;
  disabled: boolean;
  singleSelect?: boolean;
}
export interface Article {
  id?: string;
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface NewsCardProps {
  article: Article;
}

export interface NewsFeedProps {
  query: string;
}

export interface DateRangePickerProps {
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

export interface SearchProps {
  value: string | undefined;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  deleteSearchValue: () => void;
}
