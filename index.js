// index.js
// by Drew M. Johnson
// Parts of this file are from https://discordjs.guide/creating-your-bot
// Permission to use granted under MIT License
// Copyright (c) 2017 - 2020 Sanctuary

// Initialize Discord & a client
const Discord = require('discord.js');
const client = new Discord.Client();

// When the client is ready, run this code
// This event will only trigger one time after logging in
client.once('ready', () => {
  console.log('Ready!');
});

// Listen for messages
client.on('message', message => {
  if (message.content === '!Thor') {
	  // send back "God of Thunder" to the channel the message was sent in
	  message.channel.send('God of Thunder');
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);
