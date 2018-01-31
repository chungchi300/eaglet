/**
 * Created at 16/4/11.
 * @Author Ling.
 * @Email i@zeroling.com
 */

module.exports = {
  database: {
    // port: 3000,
    connection: {
      database: 'your mysql database name',
      username: 'your mysql user name',
      password: 'your mysql password',
    },
    extra: {
      host: 'host name',
      //default sqlite but suggest mysql in production
      dialect: 'sqlite',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      storage: global.srcRoot + '/../database.sqlite',
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
      },
    },
  },
  mail: {
    sparkpost: {
      api: 'sparpost api',
      options: {
        sandbox: false,
      },
    },
    from: 'sender email name',
  },
};
