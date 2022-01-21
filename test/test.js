const fs = require('fs').promises;

try {
    const data = fs.readFile('../dist/');
} catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
}