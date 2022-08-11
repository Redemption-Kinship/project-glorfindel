// This is the entry point for our app, and should be the only root-level file in the directory.

import DiscordJS, { Intents } from "discord.js";
const { token } = require('./config.json');


const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

console.log("Starting...");

client.on("ready", () => {
  console.log(`the bot is online!`);
});

client.on("messageCreate", (message) => {
  console.log("messageCreate");
  // get author info
  const authorId = message.author.id;
  const authorName = message.author.username;
  console.log(`author: ${authorName}`);
  if (message.content === "hello") {
    message.reply({content: "world"});
  }
});

client.login(token);
