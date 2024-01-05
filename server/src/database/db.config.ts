import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

// Knex configuration object.
const BasicConfig = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	acquireConnectionTimeout: 60000,
	timezone: 'UTC',
	charset: 'utf8mb4',
};

const DbConfig = {
	basic: { ...BasicConfig },
	master: {
		client: 'mysql',
		connection: process.env.DB_CONNECTION_STR || {
			...BasicConfig,
			database: process.env.DB_NAME
		},
		pool: {
			min: parseInt(process.env.DB_POOL_MIN),
			max: parseInt(process.env.DB_POOL_MAX),
			idleTimeoutMillis: parseInt(process.env.DB_POOL_IDLE),
		},
		debug: Boolean(process.env.DB_DEBUG == 'true') || false,
		migrations: {
			/* The table name used for storing the migration state */
			tableName: 'knex_migrations',
			/* Directory containing the migration files. Default ./migrations */
			directory: './src/database/migrations'
		},
		seeds: {
			/* Default records */
			directory: './src/database/seeds'
		}
	}
}

export default DbConfig;