import { Sequelize } from 'sequelize-typescript';
import { produto } from './produtos/entities/produto.entity';

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
      sequelize.addModels([produto]);
      await sequelize.sync();
      return sequelize;
    },
  },
];