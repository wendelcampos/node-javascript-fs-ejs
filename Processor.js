class Processor{

    static Process(data){
        let row = data.split("\r\n")
        let rows = []

        row.forEach(element => {
           let arr = element.split(",")
           rows.push(arr);
        });

        return rows
    }

}

module.exports = Processor;