const discord = require("discord.js");
require("dotenv").config();

const client = new discord.Client();

client.on("ready", () => {
  console.log(`Loggedin as ${client.user.tag}`);
});

const prefix="+"

client.on("message", async (msg) => {
  console.log(client.emojis);

  console.log(msg.guild.emojis.cache);
  try {
    let args= msg.content.slice(prefix.length).trim().split(" ");
    let cmd= args.shift().toLowerCase()
   
    if(msg.author.bot) return;
    if(!msg.content.startsWith(prefix)) return;

    delete require.cache[require.resolve(`./commands/${cmd}.js`)]

    let commandFile=require(`./commands/${cmd}.js`);
    commandFile.run(client,msg,args);
  
  } catch (e) {
    msg.channel.send("Invalid Command")
  }
});

function reactBirthday(msg,id) {
   const list = ["🎂", "🇧", "🇮", "🇷", "🇹", "🇭", "🇩", "🇦", "🇾", "🎂"];
    if (msg.author.discriminator == id) {
      for (i of list) {
         await msg.react(i);
      }
    }
    msg.react("718472122988494908");
}

client.login(process.env.TOKEN);
