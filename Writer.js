const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.write = util.promisify(fs.writeFile);
    }

    async Write(filename, date){
        try {
            await this.Write(filename, date);
            return true; 
        } catch (error) {
            return false;
        }        
    }
}

module.exports = Writer;    