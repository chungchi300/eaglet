const SparkPost = require('sparkpost');
const client = new SparkPost(global.config.mail.sparkpost.api);
global.mail = async function({ to, cc, bcc, subject, html }) {
  if (process.env.NODE_ENV == 'test') {
    console.log('not mail out due to testing environment', html);
  } else {
    await client.transmissions.send({
      options: global.config.mail.sparkpost.options,
      content: {
        from: global.config.mail.from,
        subject: subject,
        html: html,
      },
      headers: {
        CC: 'chungchi300@hotmail.com',
      },
      recipients: [{ address: to }],
    });
  }
};
