// This script and others like it will be used to register commands for our bot in different scopes.
// This script will register commands for the test server environment only.

// These scripts only need to be run once, when a new command is added to the registry.

// Required discord library imports:
const {SlashCommandBuilder, Routes} = require('discord.js');
const {REST} = require('@discordjs/rest');
const {clientID, testGuildID, token} = require('../util/config.json');

// Create command registry:
const commands = [
    new SlashCommandBuilder().setName('hello').setDescription('Say hi to the bot!'),
]
    .map(command => command.toJSON());

// Initialise REST client with our client token.
const rest = new REST({version: '10'}).setToken(token);

// Register the commands to our bot in our defined scope (the test server).
rest.put(Routes.applicationGuildCommands(clientID, testGuildID), {body: commands})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);