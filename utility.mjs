// Parse command line arguments
const args = process.argv.slice(2);
const debug = args.includes("--debug");
// Helper functions for logging
export const log = debug
  ? (...args) => console.error("[DEBUG]", ...args)
  : () => {};

export const handleError = (error) => {
  const message = error instanceof Error ? error.message : String(error);

  log("Error:", message);

  return {
    content: [{ type: "text", text: `Error: ${message}` }],
    error: message,
    success: false,
  };
};
