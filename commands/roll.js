module.exports = {
  name: 'roll',
  description: 'Rolls dice for Edge of the Empire',
  execute(message, args, database) {
    message.channel.send('Oh, you think you can just roll some dice now, huh?');
  },
};