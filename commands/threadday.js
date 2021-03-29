module.exports = {
  name: 'threadday',
  description: 'Prints Superthread anniversary date',
  execute(message, args, database) {
    database.get('superthread_day', function(err, reply) {
      message.channel.send(reply);
    });
  },
};