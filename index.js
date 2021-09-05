#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const command = require("./lib/commands");
clear();

console.log();
// Print Hydyco
console.log(
  chalk.greenBright(figlet.textSync("Hydyco", { horizontalLayout: "full" }))
);

console.log();

const run = async () => {
  command.getCommand();
};

run();
