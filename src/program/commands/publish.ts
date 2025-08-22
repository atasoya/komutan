import { program } from "../program";
import { exec } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

program.command('publish')
    .description('Publishes the CLI to npm')
    .action(() => {
        console.log(`Publishing the CLI to npm`);
        
        try {
            const packageJsonPath = join(process.cwd(), 'package.json');
            if (!existsSync(packageJsonPath)) {
                console.error(`package.json file not found`);
                return;
            }

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
        } catch (error) {
            console.error(`Error publishing: ${error instanceof Error ? error.message : String(error)}`);
        }
  });
