import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

import NamesDAO from './dao/namesDAO.js';
import TodosDAO from './dao/todosDAO.js';

async function main() {
    dotenv.config();

    const client = new mongodb.MongoClient(
            process.env.ATLAS_URI, 
            {useNewUrlParser: true, useUnifiedTopology: true}
    );
    const PORT = process.env.PORT || 4444;

    try {
        await client.connect();
        await NamesDAO.injectDB(client);
        await TodosDAO.injectDB(client);

        app.listen(PORT, () => {
            console.log(`Nomming on port: ${PORT}`);
        })
    }
    catch(err) {
        console.log("*****ERROR: index.js")
        console.error(err);
        process.exit(1);
    }
}

main().catch(console.error);