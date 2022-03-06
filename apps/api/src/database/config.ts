import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { join } from 'path';

export const databaseConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'test.db',
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [join(__dirname, '..', '/**/*.entity{.ts,.js}')],
};
