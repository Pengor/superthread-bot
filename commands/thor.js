module.exports = {
  name: 'thor',
  description: 'Thor is the God of Thunder',
  execute(message, args, database) {
    // send back "God of Thunder" to the channel the message was sent in
    message.channel.send('God of Thunder');
  },
};