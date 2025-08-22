import { program } from "../program";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { commandTemplate } from "../utils/commandTemplate";

program.command('add')
    .description('Adds a new command to the CLI')
    .argument('<name>', 'name of the command')
    .action((name) => {
        console.log(`Adding a new command called ${name}`);
        
        try {
            const targetPath = process.cwd();
            const commandPath = join(targetPath, 'src', 'program', 'commands', `${name}.ts`);
            
            if (existsSync(commandPath)) {
                console.error(`Command ${name} already exists`);
                return;
            }
            
            const commandContent = commandTemplate.replace(/#name#/g, name);
            writeFileSync(commandPath, commandContent);

            const indexPath = join(targetPath, 'src', 'program', 'commands', 'index.ts');
            const indexContent = readFileSync(indexPath, 'utf8');
            writeFileSync(indexPath, indexContent.trimEnd() + `\nimport "./${name}";\n`);

            console.log(`Successfully added new command to ${commandPath}`);
        } catch (error) {   
            console.error(`Error copying template: ${error instanceof Error ? error.message : String(error)}`);
        }
  });