
import { exec } from "child_process";
import { program } from "../program";

program.command('publish')
    .description('Publishes the CLI to npm')
    .action(() => {
        
        exec(`npm version patch`, (error, stdout) => {
            if (error) {
                console.error(`Error versioning: ${error.message}`);
                return;
            }
            console.log(`Successfully versioned: ${stdout}`);
        });

        exec(`npm publish`, (error, stdout) => {
            if (error) {
                console.error(`Error publishing: ${error.message}`);
                return;
            }
            console.log(`Successfully published: ${stdout}`);
        });
  });
