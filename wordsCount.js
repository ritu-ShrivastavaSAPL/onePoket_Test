const fs = require('fs');

async function asyncFileRead(filename){
    try{
        const str = await fs.promises.readFile(filename, 'utf-8');
        const arrLen = str.split(' ').length;
        console.log(arrLen);
    }
    catch(err){
            console.log(err);
    }
}

asyncFileRead('./data.txt');





