import { container } from "@sapphire/framework";

const { QuickDB, MySQLDriver } = require('quick.db')
(async () => {
    const mysql = new MySQLDriver({
        host:     'localhost',
        user:     'me',
        password: 'secret',
        database: 'my_db'
    });
    
    await mysql.connect();
    
    const db = new QuickDB({ driver: mysql });
    container.db = db
    container.logger.info('Connected to Mysql DB')
})
declare module '@sapphire/pieces' {
    interface Container {
        db: any
    }
}