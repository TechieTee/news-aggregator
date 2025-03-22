import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchNewsAPIArticles = async (
  query: string,
  category?: string,
  page: number = 1,
  from?: string,
  to?: string,
  sources?: string[],
  pageSize?: number
) => {
  const response = await axios.get(
    `${BASE_URL}/${category ? "top-headlines" : "everything"}`,
    {
      params: {
        q: query ?? "all",
        category,
        page,
        from: from ? new Date(from).toISOString().split("T")[0] : undefined,
        to: to ? new Date(to).toISOString().split("T")[0] : undefined,
        sources: sources?.join(","),
        pageSize,
        apiKey: NEWS_API_KEY,
      },
    }
  );
  return response.data.articles;
};
