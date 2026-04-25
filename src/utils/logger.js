export const logError = (error, context) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(`[Error] ${context}:`, error);
  }
  // Integration with monitoring service goes here
};

export const logInfo = (message) => {
  if (process.env.NODE_ENV !== 'production') {
    console.info(`[Info]:`, message);
  }
};
