const dt = require("dayjs");
const { LONG_DATETIME_FORMAT } = require("../config");

const getAfterOneDay = (date) =>
  dt(date).add(1, "day").format(LONG_DATETIME_FORMAT);

module.exports = {
  getAfterOneDay,
};
