import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { defineConfig } from 'prisma/config';

const config = dotenv.config({
  path: ['./.env', './.env.local'],
});
dotenvExpand.expand(config);

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
});
