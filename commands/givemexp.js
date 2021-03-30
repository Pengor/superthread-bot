module.exports = {
    name: 'givemexp',
    description: 'Gives you XP',
    execute(message, args, database) {
      // send back "God of Thunder" to the channel the message was sent in
      message.channel.send('You gain 1 XP');
    },
  };