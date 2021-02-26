#!/usr/bin/env node
import sayHi from '../src/cli.js';
import gcd from '../src/gcd.js';

const name = sayHi();
gcd(name);
