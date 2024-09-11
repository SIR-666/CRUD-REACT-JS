// models/dataPenghuni.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const dataPenghuni = db.define('data_penghuni', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kampus: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tanggalmasuk: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tanggalbayar: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    durasikost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    // timestamps: false, // Uncomment if you don’t want createdAt and updatedAt
});

// Use export default for ES6 module syntax
export default dataPenghuni;

(async () => {
    await db.sync();
    console.log('Database connected successfully.');
})();
