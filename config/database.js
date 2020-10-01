module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'klassenlagercz'),
        username: env('DATABASE_USERNAME', 'klassenlagercz'),
        password: env('DATABASE_PASSWORD', 'klassenlagercz'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
