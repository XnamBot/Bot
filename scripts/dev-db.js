require('dotenv').config()
const db = require('quick.db');
const { devserverid } = require('../config.json');
if (process.env.DEV == true) {
const moderation = new db.table(`moderation_${devserverid}`);
const level = new db.table(`level_${devserverid}`);
const guildsettings = new db.table(`guildsettings_${devserverid}`);
console.log(moderation)
console.log(level)
console.log(guildsettings)
}