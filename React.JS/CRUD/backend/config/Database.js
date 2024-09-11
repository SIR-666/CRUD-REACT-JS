import { Sequelize } from "sequelize";

const db = new Sequelize('sir','root','283010Roni',{
    host: '34.71.7.30',
    dialect: 'mysql'
});

export default db;