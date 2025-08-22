import { program } from "../program";

program.command('hello')
    .description('Prints Hello to the console')
    .action(() => {
        console.log("Hello");
  });
