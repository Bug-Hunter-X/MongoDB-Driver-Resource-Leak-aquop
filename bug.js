```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Insert a document
    const doc = { name: 'John Doe', age: 30 };
    const result = await collection.insertOne(doc);
    console.log(`Inserted document with id: ${result.insertedId}`);

    // Find a document
    const query = { name: 'John Doe' };
    const cursor = collection.find(query);
    const documents = await cursor.toArray();
    console.log('Found documents:', documents);

    // Update a document
    const updateDoc = { $set: { age: 31 } };
    const updatedResult = await collection.updateOne(query, updateDoc);
    console.log(`Updated ${updatedResult.modifiedCount} documents`);

    // Delete a document
    const deletedResult = await collection.deleteOne(query);
    console.log(`Deleted ${deletedResult.deletedCount} documents`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```