import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export function replaceNameInFiles(dir: string, name: string) {
    const items = readdirSync(dir);
    
    for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (item !== 'node_modules' && item !== '.git') {
                replaceNameInFiles(fullPath, name);
            }
        } else if (stat.isFile()) {
            const textExtensions = ['.js', '.ts', '.json', '.md', '.txt', '.yml', '.yaml', '.html', '.css', '.scss', '.xml'];
            const ext = item.substring(item.lastIndexOf('.'));
            
            if (textExtensions.includes(ext) || item.includes('package.json') || item.includes('tsconfig.json')) {
                try {
                    const content = readFileSync(fullPath, 'utf8');
                    if (content.includes('#name#')) {
                        const newContent = content.replace(/#name#/g, name);
                        writeFileSync(fullPath, newContent, 'utf8');
                    }
                } catch (error) {
                }
            }
        }
    }
}