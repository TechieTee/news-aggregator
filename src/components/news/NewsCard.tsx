import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { NewsCardProps } from "../../types";
import placeholder from "../../assets/placeholder.jpg";

export default function NewsCard({ article }: NewsCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = format(new Date(article.publishedAt), "MMM dd, yyyy");

  return (
    <motion.article
      layout
      className="rounded-lg shadow-md overflow-hidden"
    >
      {!imageError && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={article.urlToImage ?? placeholder}
            alt={article.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{article.source.name}</span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {article.title}
        </h3>

        <AnimatePresence>
          <motion.p
            className={`text-gray-600 ${isExpanded ? "" : "line-clamp-3"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {article.description}
          </motion.p>
        </AnimatePresence>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-600 hover:text-primary-700 text-sm"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-blue-500 text-xs italic px-4 py-2 rounded-lg hover:bg-primary-700
              transition-colors duration-200"
          >
            Visit Article
          </a>
        </div>
      </div>
    </motion.article>
  );
}
