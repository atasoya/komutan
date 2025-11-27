![Node](https://img.shields.io/badge/node-%23339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Komutan

**A CLI tool for creating and managing CommanderJS CLI tools inspired by cobra-cli**

![CLI Preview](https://github.com/atasoya/komutan/blob/main/preview.png?raw=true)

### Features

- Scaffold initial typescript app structure
- Add new command
- Test CLI locally by building and linkingæ
- Publish to npmjs

### Install

#### From npmjs

```bash
npm i -g komutan
komutan
```

#### From github

Clone and install dependencies:

```bash
git clone https://github.com/atasoya/komutan.git
cd komutan
npm install
npm run build
npm link
komutan
```

### Usage

#### Create fresh CLI app

Creates initial clean typescript CLI app structure

```bash
komutan init <name>
```

##### Project Structure

```
./
├── src/
│   ├── index.ts              # CLI entry (Commander)
│   └── program/
│       ├── metadata.ts       # CLI metadata
│       ├── program.ts        # Main program object
│       └── commands/         # CLI commands
│           ├── hello.ts
│           └── index.ts      # Main entry
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

#### Add new commands

Adds new command by creating name.ts and adding import to the index.ts

```bash
komutan add <name>
```

##### Command Template

```ts
import { program } from "../program";

program.command('#name#')
    .description('Description of the command')
    .action(() => {
        console.log("#name#");
  });
`;
```

#### Test CLI localy

Combines `npm run build` and `npm link` to one command.

```bash
komutan test
```

#### Publish CLI to npmjs

Version and publish to npmjs (you may need to login first: `npm login` )

```bash
komutan publish
```
