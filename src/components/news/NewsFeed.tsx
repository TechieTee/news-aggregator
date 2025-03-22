import React, { useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import { useFetchNews } from "../../hooks/useFetchNews";
import { Article, NewsFeedProps } from "../../types";
import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsFeed: React.FC<NewsFeedProps> = ({ query }) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useFetchNews(query);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <div className="p-4">
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <NewsCardSkeleton />
          <NewsCardSkeleton />
        </div>
      )}
      {isError && (
        <p className="text-red-500 text-center">Failed to load articles.</p>
      )}
      {data?.pages.map((group, index) => (
        <div key={index}  className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
          index > 0 ? 'mt-4' : ''
        }`}>
          {group.map((article: Article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>
      ))}

      {isFetchingNextPage && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NewsCardSkeleton />
          <NewsCardSkeleton />
        </div>
      )}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default NewsFeed;
