#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const command = require("./lib/commands");
clear();

// Print Hydyco
console.log(
  chalk.greenBright(figlet.textSync("Hydyco", { horizontalLayout: "full" }))
);

const run = async () => {
  command.getCommand();
};

run();
