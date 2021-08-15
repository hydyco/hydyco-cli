const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");
//commands
const init = require("./init");
const files = require("../files");

module.exports = {
  getCommand: () => {
    let available_cmd = {
      "npx create-hydyco-app <project-name>":
        "Start new project with <project-name>",
    };
    // at position 0 we will be having the command to execute
    let available_root_cmds = ["init"];
    let input = argv["_"];
    let project_name = input[0]; // npx create-hydyco-app project-name
    let node_cmd = input.slice(1); // other commands

    if (project_name) {
      if (files.directoryExists("./package.json")) {
        console.log(chalk.greenBright("package.json found in this directory"));
        process.exit();
      }
      init(project_name);
    } else {
      console.table(available_cmd);
      process.exit();
    }
  },
};
