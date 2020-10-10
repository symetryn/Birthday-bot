exports.run = (cilent, message, args) => {
  date = Date.parse(arg[0]).toLocaleString("en-US", {
    timeZone: "Nepal/Kathmandu",
  });
  id = arg[1];
  message.channel.send(`Set Birthday To ${date}  for user ${id}🎉`);
};
