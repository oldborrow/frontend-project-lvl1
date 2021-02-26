#!/usr/bin/env node
import sayHi from '../src/cli.js';
import progression from '../src/progression.js';

const name = sayHi();
progression(name);