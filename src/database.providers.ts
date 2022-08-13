import { Sequelize } from 'sequelize-typescript';
import { produto } from './produtos/entities/produto.entity';
import { registers } from './registers/entities/register.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'food_nas',
      });
      sequelize.addModels([produto, registers]);
      await sequelize.sync();
      return sequelize;
    },
  },
];