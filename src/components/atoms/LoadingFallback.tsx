import React from 'react';

export const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div
      role="status"
      aria-label="loading-spinner"
      className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"
    ></div>
    <span className="ml-3 text-lg text-gray-700">Carregando...</span>
  </div>
);

export default LoadingFallback;
