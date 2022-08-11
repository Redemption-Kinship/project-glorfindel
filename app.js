// This is the entry point for our app, and should be the only root-level file in the directory.

// Require necessary discord.js classes
const {Client, GatewayIntentBits} = require('discord.js');
// Import our client token
const {token} = require('./discord/util/config.json');

// Create a new client instance. The GatewayIntentBits is required.
const client = new Client({intents: [GatewayIntentBits.Guilds]});

// When the client logs in successfully, this code will run once only:
client.once('ready', () => {
    console.log('Ready!');
});

// Login to discord using the client token. This should always be at the bottom.
client.login(token);