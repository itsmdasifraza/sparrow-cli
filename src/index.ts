#!/usr/bin/env node
const { Command } = require("commander");
import { SparrowCommand } from "./commands";

const program = new Command();

// Set the version of the CLI tool
program.version("1.0.0");

const commands = [new SparrowCommand(program)];
commands.forEach((command) => {
  command.exec();
});
console.log("hello");
// Parse the command-line arguments
program.parse(process.argv);
