#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var index_1 = require("../lib/index");
var s = (0, index_1.greet)();
console.log("s:", s);
var arg = process.argv.splice(2);
console.log(arg);
