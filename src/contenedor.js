import fs from "fs";

class Container {
    constructor(fileName){
        this.name = fileName;
    }

    async getAll() {
        let dataFile = [];
        try {
            dataFile = await fs.promises.readFile("products.json", "utf-8");
            dataFile = JSON.parse(dataFile);
        }
        catch(error){
            console.log(error);
        }
        return dataFile;
    }

    async save(object) {
        let dataFile = await this.getAll();
        let id = dataFile.length + 1;
        object.id = id;
        dataFile.push(object);
        dataFile = JSON.stringify(dataFile, null, "\t");
        await fs.promises.writeFile("products.json", dataFile);
        return id;
    }

    async getById(id) {
        let dataFile = await this.getAll();
        return dataFile.find(object => object.id == id);
    }

    async deleteById(id) {
        let dataFile = await this.getAll();
        dataFile = dataFile.filter(object => object.id != id);
        dataFile = JSON.stringify(dataFile, null, "\t");
        await fs.promises.writeFile("products.json", dataFile);
    }

    async deleteAll() {
        await fs.promises.unlink("products.json");
    }

}

export default Container;