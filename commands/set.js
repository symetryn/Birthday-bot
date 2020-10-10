const Keyv = require("keyv");

exports.run = async (client, message, args, keyv) => {
  if (args[1].length !== 4) throw Exception("Invalid discriminator");
  date = new Date(args[0]);

  // store.birthdayId = args[1];
  // store.birthdayDate = date;

  await keyv.set("birthdayId", args[1]);
  await keyv.set("birthdayDate", date.toDateString());
  console.count("test");
  // message.channel.send(
  //   `Set Birthday To ${date.toDateString()}  for user ${args[1]}🎉`
  // );
};
