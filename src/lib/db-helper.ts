import { tables } from '../config.json';
import db from 'quick.db';
export function tablehelper(arraynum: number) {
    new db.table(tables[arraynum])
}