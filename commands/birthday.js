module.exports = {
  name: 'birthday',
  description: 'Prints the birthday of the tagged user',
  execute(message, args, database) {
    const user_id = message.mentions.users.first().id;
    console.log(`ID=${user_id}`);
    //var user = parseUser(taggedUser.id, database);
    var user_name;
    database.get(user_id, function(err, reply) {
      console.log(`reply=${reply}`);
      user_name = reply;
    });
    console.log(`user=${user_name}`);
    database.get(`${user_name}_bday`, (err, reply) => {
      if (!err)
        message.channel.send(reply);
    });
  },
};

// function parseUser(user_id, database) {
//   database.get(user_id, function(err, reply) {
//     console.log(`reply=${reply}`);
//     return reply;
//   });
// }