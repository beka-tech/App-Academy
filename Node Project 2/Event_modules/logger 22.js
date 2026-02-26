const { format } = require("date-fns");

const getTimestamp = () => {
  const now = new Date();

  // milliseconds (real wall clock)
  const base = format(now, "yyyyMMdd\tHH:mm:ss.SSS");

  // extra micro precision from hrtime
  const micro = Number(process.hrtime.bigint() % 1000n)
    .toString()
    .padStart(3, "0");

  return base + micro;
};

const logger = {
  info: (...args) => {
    console.log(`[${getTimestamp()}] INFO:`, ...args);
  },
  warn: (...args) => {
    console.warn(`[${getTimestamp()}] WARN:`, ...args);
  },
  error: (...args) => {
    console.error(`[${getTimestamp()}] ERROR:`, ...args);
  },
};

console.log(logger);
