const Discord = require("discord.js");

exports.run = (client, message, args, keyv) => {
  if (args.length == 0) {
    return message.channel.send(`Command Syntax:\n +wish {name}`);
  }
  const embed = new Discord.MessageEmbed()
    .setTitle(`🎂  Happy Birthday To ${args.join(" ")}  🎉`)
    .setThumbnail("https://cdn.frankerfacez.com/emoticon/52846/4")
    .setDescription("Many many Happy Returns of the Day");

  message.channel.send(embed);
};
