// This is the entry point for our app, and should be the only root-level file in the directory.

// Require necessary discord.js classes
const {Client, GatewayIntentBits} = require('discord.js');
// Import our client token
const {token} = require('./discord/util/token.json');

// Create a new client instance. The GatewayIntentBits is required.
const client = new Client({intents: [GatewayIntentBits.Guilds]});

// When the client logs in successfully, this code will run once only:
client.once('ready', () => {
    console.log('Ready!');
});

// Here the bot responds to various commands.
// This functionality should eventually be refactored to it's own class.
client.on('interactionCreate', async interaction => {
    // First we make sure the interaction is in fact a chat input command.
    if (!interaction.isChatInputCommand()) return;

    // We can check the .commandName property of the interaction to determine how to respond.
    const {commandName} = interaction;

    // Now we respond accordingly.
    if (commandName === 'hello') {
        // The reply method will send a response in the channel the command was used.
        // We can also gather data about the user/server the command was initiated by.
        await interaction.reply(`Hello, ${interaction.user.username}!`)
    }
});

// Login to discord using the client token. This should always be at the bottom.
client.login(token);