const CLI = require("clui");
const commandLine = require("node-cmd");
const Spinner = CLI.Spinner;
const clone = require("git-clone");
const rmdir = require("rmdir");

module.exports = async function intProject(projectName, format) {
  projectName = projectName != null ? projectName : "hydyco-app";

  const status = new Spinner("Creating your project  😀  ");

  console.log();

  status.start();

  switch (format) {
    case "js":
      clone(
        "https://github.com/hydyco/hydyco-app-js-mongo.git",
        `./${projectName}`,
        [],
        () => {
          commandLine.run(
            `  
               cd ${projectName}
               npm install
            `,
            function (err, data, stderr) {
              if (!err) {
                rmdir(`./${projectName}/.git`, function (err, dirs, files) {
                  if (!err) {
                    console.log("Project Created");
                    status.stop();
                  } else {
                    console.error(err);
                  }
                });
              } else {
                console.log("error", err);
              }
            }
          );
        }
      );
      return;
    case "ts":
      clone(
        "https://github.com/hydyco/hydyco-app-ts-mongo.git",
        `./${projectName}`,
        [],
        () => {
          commandLine.run(
            `  
               cd ${projectName}
               npm install
            `,
            function (err, data, stderr) {
              if (!err) {
                rmdir(`./${projectName}/.git`, function (err, dirs, files) {
                  if (!err) {
                    console.log("Project Created");
                    status.stop();
                  } else {
                    console.error(err);
                  }
                });
              } else {
                console.log("error", err);
              }
            }
          );
        }
      );
      return;
    default:
      return;
  }
};
