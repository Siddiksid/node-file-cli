const { Command } = require("commander");
const program = new Command();
const fs = require("fs");
program
  .name("file")
  .description("CLI to some JavaScript file utilities")
  .version("0.8.0");

program
  .command("mkfile")
  .description("make a new file with the name given")
  .argument("<file>", "file to be created")

  .action((file) => {
    if (fs.existsSync(file)) {
      console.log(`File with the name  ${file} already exists`);
    } else {
      fs.writeFile(file, "Welcome to the new file", (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("File created succesfully");
        }
      });
    }
  });

program
  .command("delfile")
  .description("Delete a file by its name")
  .argument("<file>", "file to be deleted")

  .action((file) => {
    if (fs.existsSync(file)) {
      fs.unlink(file, function (err) {
        if (err) {
          console.log(err);
        }
      });
      console.log(`File with the name ${file} has been deleted`);
    } else {
      console.log(`File with the name ${file} does not exist`);
    }
  });
program
  .option("--speak", "Talk to the Hand!!")
  .option("--bark", "Woof!!!! Woof!!!!")
  .option("--praise", "All hail the king!!!")
  .option("--got", "The North Remembers")
  .action((options) => {
    if (options.speak) {
      console.log("Talk to the Hand!!");
    } else if (options.bark) {
      console.log("Woof!!!! Woof!!!!");
    } else if (options.praise) {
      console.log("All hail the king!!!");
    } else if (options.got) {
      console.log("The North Remembers");
    }
  });

program
  .command("insertfile")
  .description("Insert content into a file")
  .argument("<file>", "file in which you want to write the content")
  .argument("<content>", "Content which is to be written in file")
  .action((file, content) => {
    if (fs.existsSync(file)) {
      fs.writeFile(file, content, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log(
            `File "${file}" has been updated with content: "${content}"`
          );
        }
      });
    } else {
      console.log(`File "${file}" does not exist.`);
    }
  });

program
  .command("readfile")
  .description("Insert content into a file")
  .argument("<file>", "file in which you want to write the content")

  .action((file) => {
    if (fs.existsSync(file)) {
      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log(data);
        }
      });
    } else {
      console.log(`File "${file}" does not exist.`);
    }
  });

program.parse();
