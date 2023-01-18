// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "august_jwt",
      user: "postgres",
      password: "password",
    },
  },
};
