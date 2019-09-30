import { ConnectionOptions } from 'typeorm';

import { BBDD_BBDD, BBDD_HOST, BBDD_PASS, BBDD_PORT, BBDD_USER } from './environments/environment';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: BBDD_HOST,
  port: BBDD_PORT,
  username: BBDD_USER,
  password: BBDD_PASS,
  database: BBDD_BBDD,
  logging: true,
  entities: [
    'src/app/entities/*.entity.ts}',
  ],
  migrations: [
    'src/app/migrations/*.ts',
  ],
  subscribers: [
    'subscribers/*.ts',
  ],
  cli: {
    entitiesDir: 'src/app/entities',
    migrationsDir: 'src/app/migrations',
    subscribersDir: 'src/app/subscribers',
  },
};

export default connectionOptions;
