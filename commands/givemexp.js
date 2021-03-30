module.exports = {
    name: 'givemexp',
    description: 'Gives you XP',
    execute(message, args, database) {
      message.channel.send('You gain 1 XP');
    },
  };