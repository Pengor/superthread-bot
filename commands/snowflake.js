module.exports = {
  name: 'snowflake',
  description: 'Print snowflake id of the user',
  execute(message, args, database) {
    message.channel.send(message.mentions.users.first().id);
  },
};