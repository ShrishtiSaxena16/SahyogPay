import { Sequelize } from "sequelize";
import dotenv  from "dotenv";

dotenv.config(); 

const sequelize= new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
    logging: console.log,
    dialectOptions: {
        ssl: {
            require : true,
            rejectUnauthorized: false,//adjust it based ssl configuration
        },
    },
});
sequelize
  .authenticate()
  .then(()=>{
    console.log('Connected to the database');
  })
  .catch((error)=>{
    console.error('Error connecting to the database',error.message);
  });
const jwtSecret= process.env.JWT_SECRET;
const config={
    sequelize,
    jwtSecret,
    port: process.env.PORT || 5000
}
export default config;