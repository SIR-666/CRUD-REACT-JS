import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      jabatan: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    }, {
      timestamps: true, // Enable timestamps
      createdAt: 'created_at', // Rename createdAt field
      updatedAt: 'updated_at', // Rename updatedAt field
    // role: DataTypes.STRING,
},{
    freezeTableName: true
})

export default User;

(async () => {
    await db.sync();
    console.log('Database connected successfully.');
})();