import { program } from "../program";

program.command('init')
    .description('Scaffolds a new CLI project')
    .argument('<name>', 'name of the CLI project')
    .action((name) => {
        console.log(`Scaffolding a new CLI project called ${name}`);
  });
