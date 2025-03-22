import React from "react";
import { motion } from "framer-motion";

const NewsCardSkeleton: React.FC = () => {
  return (
    <motion.article
      layout
      className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gray-300" />

      {/* Content Skeleton */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>

        <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded mb-1"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded mb-1"></div>

        <div className="mt-4 flex justify-between">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCardSkeleton;
