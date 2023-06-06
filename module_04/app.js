const mongo = require("mongodb")
const mongoClint = mongo.MongoClient
const dburl = "mongodb://127.0.0.1:27017/"


// Q3. Create database for online shopping app.
mongoClint.connect(dburl).then(result=>{
    const db =  result.db("Amazon")
    
    console.log("connected...")

// Q4. Create Require collections for online shopping app and documents.
    // db.createCollection("User").then(result=>{
    //     console.log("successfull create collection..");
    // }).catch()

    
    // db.createCollection("Product category").then(result=>{
    //     console.log("successfull create collection..");
    // }).catch()

    // db.createCollection("Product").then(result=>{
    //     console.log("successfull create collection..");
    // }).catch()

    // db.createCollection("Order").then(result=>{
    //     console.log("successfull create collection..");
    // }).catch()

    // db.createCollection("Review").then(result=>{
    //     console.log("successfull create collection..");
    // }).catch()

// Q5. Write command to show all data from product collections and sort in ascending order.

    // db.collection("Product").insertOne({name:"T-shirts",price:600,qty:10}).then(result =>{
    //     console.log("successfull add product...");
    // }).catch(err=>{
    //     console.log(err);
    // })

    // const d1 = {name:"fan",price:1800,qty:5}
    // const d2 = {name:"friz",price:45000,qty:1}
    // const d3 = {name:"tv",price:15000,qty:10}
    

    // db.collection("Product").insertMany([d1,d2,d3]).then(result=>{
    //     console.log("successfull add product...");
    // }).catch(err=>{
    //     console.log(err);
    // })

    // db.collection("Product").find().sort({"name":-1 }).toArray().then(result=>{
    //     console.log(result);
    // }).catch(err=>{
    //     console.log(err);
    // })

    
// Q6. Update product price for particular product.
    // const dbc =db.collection("Product")
    // dbc.updateOne({name:"tv"},{$set:{price:10000}}).then(result=>{
    //     console.log(result);
    // }).catch()

// Q7. Write command to delete particular document and collection.

    // dbc.deleteOne({name:"T-shirts"}).then(result=>{
    //     console.log(result);
    // }).catch()

    // dbc.deleteMany({price:15000}).then(result=>{
    //     console.log(result);
    // }).catch()

    // db.collection("Order").drop().then(result=>{
    //     console.log(result);
    // }).catch()



}).catch(err=>{
    console.log(err);
})

