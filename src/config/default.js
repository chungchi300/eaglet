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
      dialect: 'mysql',
      pool: {
        max: 1,
        min: 0,
        idle: 10000,
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
