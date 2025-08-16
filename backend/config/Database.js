import { Sequelize } from "sequelize";

const db = new Sequelize('bazaar_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;