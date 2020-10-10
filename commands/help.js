const Discord = require("discord.js");

exports.run = (client, message, args, keyv) => {
  const embed = new Discord.MessageEmbed().setTitle(`🎂 Commands 🎉`).addFields(
    { name: "+wish {user}", value: "wish someone birthday" },
    {
      name: "+set {date} {userId}",
      value: "set someones birthday to react birthday to their messages",
    }
  );

  message.channel.send(embed);
};
