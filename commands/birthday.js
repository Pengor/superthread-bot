module.exports = {
  name: 'birthday',
  description: 'Prints the birthday of the tagged user',
  execute(message, args, database) {
    const taggedUser = message.mentions.users.first();
    var user = parseUser(taggedUser.id, database);
    console.log(`ID=${taggedUser.id}`);
    console.log(`user=${user}`);
    database.get(`${user}_bday`, (err, reply) => {
      if (!err)
        message.channel.send(reply);
    });
  },
};

function parseUser(user_id, database) {
  database.get(user_id, function(err, reply) {
    return reply;
  });
}