const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&74pCiLoA#x2SAaO2z-3kPwQ37kqBlgjLdRpsbX-kAVDIYtmhKkk8' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'KHF4ZHwUjoQEauiWCl5XbdDqp4CfXs1DNFYS' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'thrishal8111' : process.env.SESSION_NAME, 

};

