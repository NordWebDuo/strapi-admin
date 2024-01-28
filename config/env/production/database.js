module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'andrei11_strapi'),
        user: env('DATABASE_USERNAME', 'andrei11_root'),
        password: env('DATABASE_PASSWORD', 'q1q2w1w2A!'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          ca: env('DATABASE_CA')
        },
      },
      debug: false,
    },
  });