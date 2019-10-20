import Sequelize from 'sequelize';

import User from'../app/models/User';
import Customer from '../app/models/Customer';

import databaseConfig from'../config/database';

const model_user = [User];
const model_customer = [Customer];

class Database{
  constructor (){
    this.init();
  }

  init() {
    // conexão base dados
    this.connection = new Sequelize(databaseConfig);

    model_user.map(model => model.init(this.connection));

    model_customer.map(model => model.init(this.connection));



  }
}
export default new Database();
