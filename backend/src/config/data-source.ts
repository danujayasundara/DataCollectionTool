import { DataSource } from 'typeorm';
//import { User } from '../models/Speaker'; // Add other entities here

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: '',
  synchronize: true,
  logging: false,
  //entities: [Speaker],
  migrations: [],
  subscribers: [],
});
