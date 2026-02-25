const fs = require("fs");
const fsprom = require("fs").promises;
const { format } = require("date-fns");
const { uid } = require("uid");
const path = require("path");

const MyId = uid(4);
const date = format(new Date(), "yyyMMdd\tHH:mm:ss");

const logEvent = async (message) => {
  const log = `${MyId}${date}${message}\n`;
  console.log(log);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsprom.mkdir(path.join(__dirname, "logs"));
    }
    await fsprom.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      log,
      "utf8",
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvent;
