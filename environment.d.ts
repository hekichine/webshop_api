declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string;
      PORT: number;
      API_URL: string;
      NODE_ENV: "development" | "production";
      PWD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
