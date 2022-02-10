var cron = require("node-cron");

const taskDefault = cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

module.exports = {
  taskDefault, 
};
