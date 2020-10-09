const discord = require("discord.js");
require("dotenv").config();

const client = new discord.Client();

client.on("ready", () => {
  console.log(`Loggedin as ${client.user.tag}`);
});

client.on("message", async (msg) => {
  console.log(client.emojis);

  console.log(msg.guild.emojis.cache);
  try {
    let list = ["🎂", "🇧", "🇮", "🇷", "🇹", "🇭", "🇩", "🇦", "🇾", "🎂"];

    if (msg.author.discriminator == "4969") {
      for (i of list) {
        const a = await msg.react(i);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

function getEmoji(message) {
  return message.guild.emojis.cache.find((emoji) => emoji.name == "bean");
}

client.login(process.env.TOKEN);
