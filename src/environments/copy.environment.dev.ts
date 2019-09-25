import * as shell from 'shelljs';

shell.cp('-R', './src/environments/environment.dev.ts', './src/environments/environment.ts');