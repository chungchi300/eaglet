/**
 * Created at 16/4/11.
 * @Author Ling.
 * @Email i@zeroling.com
 */
module.exports = {
  port: "5000",
  database: {
    // port: 3000,
    connection: {
      database: "yourDatabaseName",
      username: "yourUsername",
      password: "yourPassword"
    },
    extra: {
      host: "localhost",
      // default sqlite but suggest mysql in production
      dialect: "sqlite",
      pool: {
        max: 210,
        min: 20,
        acquire: 300000000,
        idle: 0
      },
      storage: "/../database.sqlite",
      define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true
      }
    }
  },
  mail: {
    sparkpost: {
      api: "sparpost api",
      options: {
        sandbox: false
      }
    },
    from: "sender email name"
  }
};
