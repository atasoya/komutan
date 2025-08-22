import { program } from "../program";
import { cpSync } from "fs";
import { join } from "path";
import { replaceNameInFiles } from "../utils/file";

program.command('init')
    .description('Scaffolds a new CLI project')
    .argument('<name>', 'name of the CLI project')
    .action((name) => {
        console.log(`Scaffolding a new CLI project called ${name}`);
        
        try {
            const templatePath = join(__dirname, '../../../template');
            const targetPath = process.cwd();
            
            cpSync(templatePath, targetPath, { recursive: true });
            console.log(`Successfully copied template to directory`);
            
            replaceNameInFiles(targetPath, name);
            console.log(`Replaced #name# placeholders with "${name}"`);
        } catch (error) {
            console.error(`Error copying template: ${error instanceof Error ? error.message : String(error)}`);
        }
  });
