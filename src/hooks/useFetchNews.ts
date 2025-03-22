import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchNewsAPIArticles } from "../api";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useFetchNews = (query: string) => {
  const { sources, categories, dateRange } = useSelector(
    (state: RootState) => state.preferences
  );

  const fetchNews = async (page: number) => {
    const [newsAPI] = await Promise.all([
      fetchNewsAPIArticles(
        query,
        categories === "all" ? "" : categories,
        page,
        dateRange.startDate?.toISOString(),
        dateRange.endDate?.toISOString(),
        sources,
        40
      ),
    ]);

    return newsAPI;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["articles", query, categories, dateRange, sources],
    queryFn: ({ pageParam = 1 }) => fetchNews(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};
