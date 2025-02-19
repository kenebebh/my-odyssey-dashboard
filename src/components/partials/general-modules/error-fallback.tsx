"use client";

import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  const router = useRouter();

  const handleHomeClick = () => {
    resetErrorBoundary();
    setTimeout(() => {
      router.replace("/");
      window.location.href = "/";
    }, 0);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full space-y-6 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-8 w-8 text-red-500 dark:text-red-400" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Something went wrong
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            We apologize for the inconvenience. An unexpected error has
            occurred:
          </p>

          <div className="p-4 bg-red-50 dark:bg-red-900 rounded-md">
            <pre className="text-sm text-red-600 dark:text-red-300 whitespace-pre-wrap font-mono">
              {error.message}
            </pre>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Try refreshing the page or click the button below to try again.
          </p>
        </div>

        <button
          onClick={handleHomeClick}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Go to Home Page</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
