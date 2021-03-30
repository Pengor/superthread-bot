module.exports = {
  name: 'thankyou',
  description: 'Accept someone\'s thanks',
  execute(message, args, database) {
    message.channel.send('Oh you\'re quite welcome!');
  },
};