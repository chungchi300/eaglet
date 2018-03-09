module.exports = async function({ to, cc, bcc, subject, html }) {
  const SparkPost = require('sparkpost');
  const client = new SparkPost(global.config.mail.sparkpost.api);
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
};
