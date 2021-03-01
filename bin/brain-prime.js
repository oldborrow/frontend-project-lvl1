#!/usr/bin/env node
import sayHi from '../src/cli.js';
import prime from '../src/prime.js';

const name = sayHi();
prime(name);
