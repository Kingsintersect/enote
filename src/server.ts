import "reflect-metadata"
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "enote",
    migrationsRun: true,
    synchronize: true,
    logging: true,
    entities: ["./src/entities/**/*.ts"],
    migrations: ["./src/migrations/**/*.ts"],
    subscribers: ["./src/subscribers/**/*.ts"],
});

const main = async () => {
    console.log("server started...");
    try {
        await AppDataSource.initialize()
        .then(async() => {
           console.log("Database Conneted..."); 
        });
    } catch (err) {
        console.log(err);        
    }
}

main();