import { program } from "../program";

program.command('helloworld')
    .description('Prints "Hello World" to the console')
    .action(() => {
        console.log("Hello World");
  });
