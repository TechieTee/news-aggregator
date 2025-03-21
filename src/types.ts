export interface DateRangeType {
  from: Date | null;
  to: Date | null;
}

export interface SearchParams {
  q: string;
  category?: string;
  pageSize?: number;
  page?: number;
  from?: string;
  to?: string;
  sources: string[];
}