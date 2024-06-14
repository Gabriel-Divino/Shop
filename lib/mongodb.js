import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://gdodivino:m1nZseyMZ87j5ki1@gabriel.fjuthuf.mongodb.net/"//process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise



client = new MongoClient(uri, options)
clientPromise = client.connect()


export default clientPromise