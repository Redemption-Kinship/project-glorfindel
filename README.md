# project-glorfindel
An integrated system to aid in the management of an MMO endgame guild.

## Development Notes
### Running the app
Since this is a node.js based app, you must have node.js installed.
> https://nodejs.org/en/

To run the app, first open a terminal from the root of the project directory.

Once open, type the following command to ensure all dependancies are installed:
```
npm install
```
Then, to run the app in developer mode, type the following command:
```
nodemon start
```
This will start the app in developer mode, and any changes made to files within the project directory will trigger an app restart.

### Discord Particulars
Discord bots have a 'client token' which is used to authenticate the bot when it logs in. For security purposes I have added this to the .gitignore so it is not public.

> Anyone with our client token can pretend to be our bot and will have any permissions our bot does!

I have not yet come up with a good solution to share this token with you.

Should we need to reset the token, this can be done through the Discord Developer Portal
> https://discord.com/developers

To add a discord bot to a server, a URL must be generated which can be used to 'invite' the bot user into the server. This URL will determine the permissions and scope the bot possesses within the server, and such URLs can be generated on the bot's developer portal page.

The current invitation link is below:
> https://discord.com/oauth2/authorize?client_id=1007158170914922597&permissions=406206016577&scope=bot%20applications.commands