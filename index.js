// index.js
// by Drew M. Johnson
// Parts of this file are from https://discordjs.guide/creating-your-bot
// Permission to use granted under MIT License
// Copyright (c) 2017 - 2020 Sanctuary

// Initialize connection to Redis Cloud
const redis = require('redis');
const redis_client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

redis_client.on("error", function(error) {
  console.error(error);
});

// Initialize Discord & a client
const Discord = require('discord.js');
const discord_client = new Discord.Client();

// When the client is ready, run this code
// This event will only trigger one time after logging in
discord_client.once('ready', () => {
  console.log('Ready!');
});

// Listen for messages
discord_client.on('message', message => {
  // Early exit for non-prefix or bot-authored commands
  if (!message.content.startsWith('!') || message.author.bot) return;
  
  if (message.content === '!Thor') {
	  // send back "God of Thunder" to the channel the message was sent in
	  message.channel.send('God of Thunder');
  }
  if (message.content === '!ThreadDay') {
    redis_client.get("superthread_day", function(err, reply) {
      message.channel.send(reply);
    });
  }
});

// login to Discord with your app's token
discord_client.login(process.env.TOKEN);
