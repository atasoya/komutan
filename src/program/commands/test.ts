import { program } from "../program";
import { exec } from "child_process";

program.command('test')
    .description('Test CLI tool by building and linking')
    .action(() => {
        exec("npm run build", (error, stdout, stderr) => {
            if (error) {
                console.error(`Error building: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`Successfully built: ${stdout}`);
            exec("npm link", (error, stdout) => {
                if (error) {
                    console.error(`Error linking: ${error.message}`);
                    return;
                }
                console.log(`Successfully linked: ${stdout}`);
            });
        });
  });
