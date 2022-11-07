const fs = require("fs")

class Product {
    constructor(title, price, thumbnail){
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail
    }

    async getAll() {
        let dataFile = []
        try {
            dataFile = await fs.promises.readFile("products.json", "utf-8")
            dataFile = JSON.parse(dataFile)
        }
        catch(error){
            console.log(error)
        }
        return dataFile
    }

    async save(object) {
        let dataFile = await this.getAll()
        let id = dataFile.length + 1
        object.id = id
        dataFile.push(object)
        dataFile = JSON.stringify(dataFile, null, "\t")
        await fs.promises.writeFile("products.json", dataFile)
        return id
    }

    async getById(id) {
        let dataFile = await this.getAll()
        return dataFile.find(object => object.id == id)
    }

    async deleteById(id) {
        let dataFile = await this.getAll()
        dataFile = dataFile.filter(object => object.id != id)
        dataFile = JSON.stringify(dataFile, null, "\t")
        await fs.promises.writeFile("products.json", dataFile)
    }

    async deleteAll() {
        await fs.promises.unlink("products.json")
    }

}

const product1 = new Product("cheems samurai", 1000, "https://steamcommunity.com/sharedfiles/filedetails/?l=latam&id=2797293393&searchtext=")
const product2 = new Product("cup of wine", 2000, "https://media.wired.com/photos/592730a9cefba457b079c5b0/master/pass/WineGlass-90199744.jpg")

const checkMethods = async () => {
    //These two methods create the products
    let firstId = await product1.save(product1)
    console.log(`The first id is: ${firstId}`)

    let secondId = await product2.save(product2)
    console.log(`The id of the object is: ${secondId}`)


    //this method get you an specific product by it's id
    let getOne = await product1.getById(1)
    console.log(getOne)


    //this method get's you all products in the JSON
    const allObjects = await product1.getAll()
    console.log(allObjects)

    //this method deletes an specific product by it's id
    await product1.deleteById(1)
    console.log(allObjects)

    //this method deletes the file 
    await product1.deleteAll()
    console.log(allObjects)
}

checkMethods();