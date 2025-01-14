```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_CONNECTION_STRING";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // ... database operations ...
  } catch (err) {
    console.error('Error during database operations:', err);
  } finally {
    await client.close();
    console.log('Connection closed successfully.');
  }
}

run().catch(console.dir);
```