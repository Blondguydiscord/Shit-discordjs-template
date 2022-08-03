require("dotenv").config();
require('events').EventEmitter.defaultMaxListeners = 50;

const { Discord, Client, Collection,MessageSelectMenu, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require("discord.js");

const ms = require("ms")

const db = require('quick.db')

const autoLineBreak = require('auto-line-breaks');

const path = require('path');

const { Canvas, resolveImage } = require('canvas-constructor/cairo');

const fs = require("fs")

const axios = require('axios').default;

const pretty = require("pretty-ms")

const { millify } = require("millify");

  const client = new Client({
  intents: 32767,
  });
////////////////////////////////express//////////////////////////////////////// what u looking at?
const express = require('express')
const app = express()
app.get('/', function (req, res) {
res.send('Hello World')
})
app.listen(3000)

////////////////////////////////Ready////////////////////////////////////////
client.on('ready', () => {
console.log(`[API] Logged in as ${client.user.username}`);
client.user.setStatus(`idle`)
client.user.setActivity(`Redfut Mod`)
})








  process.on("unhandledRejection", error => {
    console.log(error)
});
process.on("rejectionHandled", error => {
    console.log(error)
});
process.on("uncaughtException", error => {
    console.log(error)
});



console.log(process.version)
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handlers")(client);
client.login(process.env.token);