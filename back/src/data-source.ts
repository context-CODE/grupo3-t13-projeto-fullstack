import path from 'path';
import { DataSourceOptions, DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';

const getDataSourceOptions = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, './entities/.{**js,ts}');
  const migrationsPath = path.join(__dirname, './migrations/.{**js,ts}');

  return {
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource = new DataSource(getDataSourceOptions());

export default AppDataSource;
