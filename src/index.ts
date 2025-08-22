#!/usr/bin/env node
import { program } from "./program/program";
import "./program/metadata";
import "./program/commands";

try {
    program.parse();
} catch (error) {
    console.error(error);
    process.exit(1);
}