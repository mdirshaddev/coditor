'use client';

import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorBoundaryProps) => {
  const reportSentry = async (error: Error) => {
    console.log('🚀🚀🚀 ~ reportSentry ~ error', error);
    await Sentry.captureException(error);
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('TOP LEVEL ERROR', error);
    reportSentry(error);
  }, [error]);

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Recover</button>
    </div>
  );
};

export default ErrorBoundary;
