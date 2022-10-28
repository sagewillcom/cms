const parse = require('pg-connection-string').parse

const { host, port, database, user, password } = parse(process.env.DATABASE_URL)

export default () => ({
	connection: {
		client: 'postgres',
		connection: {
			host,
			port,
			database,
			user,
			password,
			ssl:
				process.env.NODE_ENV === 'development'
					? false
					: { rejectUnauthorized: false }
		},
		debug: false
	}
})
