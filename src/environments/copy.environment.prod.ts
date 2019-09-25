import * as shell from 'shelljs';

shell.cp('-R', './src/environments/environment.prod.ts', './src/environments/environment.ts');