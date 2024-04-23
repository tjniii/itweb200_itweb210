
const mongoose = require("mongoose")

main().then(() => {
    console.log("Database Connected");
    try {
        mongoose.connection.db.listCollections().toArray(function(err, names) {
            if (err) {
                console.log(err);
            }
            else {
                names.forEach(function(e,i,a) {
                    console.log("--->>", e.name);
                });
            }
        });
    } catch (error) {
        console.log(error)
    }
   


}).catch(error => console.log(error))

async function main() {
    await mongoose.connect("mongodb+srv://tjniii:GU1hmJYthJWYo2BA@cluster0.eqi9ohh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
}