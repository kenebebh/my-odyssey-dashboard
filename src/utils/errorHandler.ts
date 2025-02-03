import { AxiosError } from "axios";

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    // Handle Axios errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 404) {
        return "The requested resource was not found. Please check the ID and try again";
      }
      return error.response.data.message || error.message;
    } else if (error.request) {
      // The request was made but no response was received
      return "No response received from the server. Please try again later.";
    } else {
      // Something happened in setting up the request that triggered an Error
      return "An error occurred while setting up the request.";
    }
  } else if (error instanceof Error) {
    // Handle general Error objects
    return error.message;
  } else {
    // Handle unknown errors
    return "An unknown error occurred.";
  }
}
