import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function DisplayErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 mb-6">{message}</p>
          {onRetry && (
            <Button
              onClick={onRetry}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
