import { ConnectionOptions } from 'typeorm';

import { BBDD_BBDD, BBDD_HOST, BBDD_PASS, BBDD_PORT, BBDD_USER } from '../src/environments/environment';

export const config: ConnectionOptions = {
  type: 'postgres',
  host: BBDD_HOST,
  port: BBDD_PORT,
  username: BBDD_USER,
  password: BBDD_PASS,
  database: BBDD_BBDD,
  logging: true,
  entities: [
    '../../src/app/entities/*.entity{.ts,.js}',
  ],
  migrations: [
    '../../src/app/migrations/*.ts',
  ],
  subscribers: [
    '../../src/app/subscribers/*.ts',
  ],
  cli: {
    entitiesDir: '../../src/app/entities',
    migrationsDir: '../../src/app/migrations',
    subscribersDir: '../../src/app/subscribers',
  },
};
