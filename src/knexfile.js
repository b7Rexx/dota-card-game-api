require('dotenv').config({ path: __dirname + '/../.env' });

// Default configuration for database connection
const connection = {
  port: process.env.DB_PORT || '3306',
  host: process.env.DB_HOST || 'remotemysql.com',
  user: process.env.DB_USER || '8fboJ1HdkT',
  password: process.env.DB_PASSWORD || 'k1XNr1pcb9',
  database: process.env.DB_NAME || '8fboJ1HdkT',
  charset: 'utf8',
  timezone: 'UTC',
};

// // For test environment
// if (process.env.NODE_ENV === 'test') {
//   connection = {
//     ...connection,
//     port: process.env.TEST_DB_PORT,
//     host: process.env.TEST_DB_HOST,
//     user: process.env.TEST_DB_USER,
//     password: process.env.TEST_DB_PASSWORD,
//     database: process.env.TEST_DB_NAME
//   };
// }

/**
 * Database configuration.
 */
module.exports = {
  connection,
  client: process.env.DB_CLIENT,
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
    stub: './stubs/migration.stub',
  },
  seeds: {
    directory: './seeds',
    stub: './stubs/seed.stub',
  },
};
