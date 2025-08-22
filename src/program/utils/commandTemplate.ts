export const commandTemplate = `
import { program } from "../program";

program.command('#name#')
    .description('Description of the command')
    .action(() => {
        console.log("#name#");
  });
`;