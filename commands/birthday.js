module.exports = {
  name: 'birthday',
  description: 'Prints the birthday of the tagged user',
  execute(message, args, database) {
    const user_id = message.mentions.users.first().id;
    database.get(user_id, function(err1, reply1) {
      if (!err1) {
        database.get(`${reply1}_bday`, (err2, reply2) => {
          if (!err2)
            message.channel.send(reply2);
        });
      }
    });
  },
};