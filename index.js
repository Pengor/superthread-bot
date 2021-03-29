// index.js
// by Drew M. Johnson
// Parts of this file are from https://discordjs.guide/creating-your-bot
// Permission to use granted under MIT License
// Copyright (c) 2017 - 2020 Sanctuary

// Initialize connection to Redis Cloud
const redis = require('redis');
const database = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

database.on('error', function(error) {
  console.error(error);
});

// Initialize Discord client
const Discord = require('discord.js');
const discord_client = new Discord.Client();

// Parse files in command folder as commands
discord_client.commands = new Discord.Collection();
const fs = require('fs');
const command_files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of command_files) {
	const command = require(`./commands/${file}`);
	discord_client.commands.set(command.name, command);
}

// When the client is ready, run this code
// This event will only trigger one time after logging in
discord_client.once('ready', () => {
  console.log('Ready!');
});

// Set command prefix character
const prefix = '!';

// Listen for messages
discord_client.on('message', message => {
  // Early exit for non-prefix or bot-authored commands
  if (!message.content.startsWith('!') || message.author.bot) return;
  
  // Parse user input from Discord message into command and args
  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command_name = args.shift().toLowerCase();

  // Ensure only valid commands are executed
  if (!discord_client.commands.has(command_name)) return;
  const command = discord_client.commands.get(command_name);

  // Execute the matching command
  try {
    command.execute(message, args, database);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

// login to Discord with your app's token
discord_client.login(process.env.TOKEN);
