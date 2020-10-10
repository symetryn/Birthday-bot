const Discord = require("discord.js");
require("dotenv").config();
const Keyv = require("keyv");

const keyv = new Keyv();
let client = new Discord.Client();

let store = {};
client.on("ready", () => {
  console.log(`Loggedin as ${client.user.tag}`);
});

const prefix = "+";

client.on("message", async (msg) => {
  try {
    let args = msg.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    checkBirthday(msg);

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, msg, args, keyv);
  } catch (e) {
    console.log(e);
    msg.channel.send("Invalid Command");
  }
});

async function reactBirthday(msg) {
  const list = ["🎂", "🇧", "🇮", "🇷", "🇹", "🇭", "🇩", "🇦", "🇾", "🎉"];

  for (i of list) {
    await msg.react(i);
  }
}
async function checkBirthday(msg) {
  const id = await keyv.get("birthdayId");
  const date = await keyv.get("birthdayDate");
  console.log(id, date);
  console.log(msg.author.discriminator, new Date().toDateString());
  if (msg.author.discriminator == id && date == new Date().toDateString()) {
    reactBirthday(msg);
  }
}

client.login(process.env.TOKEN);
