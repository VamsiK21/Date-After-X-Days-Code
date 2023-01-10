const addDays = require("date-fns/addDays");

const dateFun = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

console.log(dateFun(3));
module.exports = dateFun;
