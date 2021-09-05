const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");
//commands
const init = require("./init");
const files = require("../files");

module.exports = {
  getCommand: () => {
    let available_cmd = {
      "npx create-hydyco-app <project-name> js":
        "Start new project with <project-name> for javascript",
      "npx create-hydyco-app <project-name> ts":
        "Start new project with <project-name> for typescript",
    };
    // at position 0 we will be having the command to execute
    const available_root_cmds = ["init"];
    const available_options = ["js", "ts"];
    const input = argv["_"];
    const project_name = input[0]; // npx create-hydyco-app project-name
    const node_cmd = input.slice(1); // other commands
    let [format] = node_cmd;
    if (!format) format = "ts";

    if (!available_options.includes(format)) {
      console.log(chalk.redBright(`${format} options not available`));
      console.table(available_cmd);
    }

    if (project_name) {
      if (files.directoryExists("./package.json")) {
        console.log(chalk.redBright("package.json found in this directory"));
        process.exit();
      }
      init(project_name, format);
    } else {
      console.table(available_cmd);
      process.exit();
    }
  },
};
