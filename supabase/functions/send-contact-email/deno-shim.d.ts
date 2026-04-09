/**
 * Deno and Web API Shim
 * This file provides type definitions for globals that are available in the Supabase Edge Function 
 * environment (Deno) but may be missing from the editor's default configuration.
 */

declare global {
  // Deno Global Namespace
  const Deno: {
    env: {
      get(key: string): string | undefined;
    };
    serve(handler: (req: any) => any): void;
  };

  // Web API Fallbacks (for editors missing 'dom' lib)
  // Using 'any' types here to avoid configuration conflicts while silencing IDE errors.
  type Request = any;
  type Response = any;
  const Request: any;
  const Response: any;

  function fetch(input: string | Request | URL, init?: any): Promise<Response>;

  const console: {
    log(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
  };

  // Other common globals used in Edge Functions
  const TextEncoder: any;
  const TextDecoder: any;
}

// Ensure this file is treated as a module
export { };
