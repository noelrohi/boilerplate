import { env } from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/db/schema",
  dialect: "postgresql",
  out: "migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: [`${env.TABLE_PREFIX}*`],
  verbose: true,
  strict: true,
});
