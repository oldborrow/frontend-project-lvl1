#!/usr/bin/env node
import sayHi from '../src/cli.js';
import calc from '../src/calculator.js';

const name = sayHi();
calc(name);
