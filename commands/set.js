const Keyv = require("keyv");

exports.run = async (client, message, args, keyv) => {
  try {
    if (args[1].length !== 4) {
      message.channel.send(`Invalid User`);
    }

    date = new Date(args[0]);

    console.log("date", data);

    await keyv.set("birthdayId", args[1]);
    await keyv.set("birthdayDate", date.toDateString());

    message.channel.send(
      `Set Birthday To ${date.toDateString()}  for user ${args[1]}🎉`
    );
  } catch (e) {
    message.channel.send(`Command Syntax:\n +set {date} {userId}`);
  }
};
