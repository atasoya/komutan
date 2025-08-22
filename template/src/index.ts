#!/usr/bin/env node
import { program } from "./program/program";
import "./program/metadata";
import "./program/commands/helloworld";

try {
    program.parse();
} catch (error) {
    console.error(error);
    process.exit(1);
}