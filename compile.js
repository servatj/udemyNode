const path = require('path');
const fs = require('fs');

const solc = require('solc');
        
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

solc.compile(source, 1); // the second param is for the number of contract sources we want to compile 

//console.log(solc.compile(source,1));

module.exports = solc.compile(source,1).contracts[':Inbox']