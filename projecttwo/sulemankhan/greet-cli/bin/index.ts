#!/usr/bin/env node

import { greet } from "../lib/index";

let s: string = greet();
console.log("s:", s);

let arg: string[] = process.argv.splice(2);
console.log(arg);