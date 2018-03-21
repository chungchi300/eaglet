const config = smartRequire('config');
module.exports = async function({ to, cc, bcc, subject, html }) {
  const SparkPost = require('sparkpost');
  const client = new SparkPost(config.mail.sparkpost.api);
  await client.transmissions.send({
    options: config.mail.sparkpost.options,
    content: {
      from: config.mail.from,
      subject: subject,
      html: html,
    },
    headers: {
      CC: 'chungchi300@hotmail.com',
    },
    recipients: [{ address: to }],
  });
};
