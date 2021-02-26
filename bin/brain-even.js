#!/usr/bin/env node
import sayHi from '../src/cli.js';
import evenGame from '../src/even.js'

console.log('Welcome to the Brain Games!');
const name = sayHi();
evenGame(name);
