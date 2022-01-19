let names;

export default class NamesDAO{
    static async injectDB(conn) {
        if(names) {
            return
        }
        try {
            names = await conn.db(process.env.DBNAME)
                .collection('userweeklytodos');
        }
        catch(err) {
            console.error(`Unable to connect in NamesDAO: ${err}`);
        }
    }
    static async getNames({
        filters = null,
        page = 0,
        namesPerPage = 10
    } = {}) {
        let query;
        if(filters) {
            if('name' in filters) {
                query = {$text: {$search: filters['name']}}
            } 
        }
        let cursor;
        try{
            cursor = await names
                .find(query)
                .limit(namesPerPage)
                .skip(namesPerPage * page);
            const namesList = await cursor.toArray();
            const totalNumNames = await names.countDocuments(query);
            return {namesList, totalNumNames}
        }
        catch(err) {
            console.error(`Unable to issue find command, ${err}`)
            return {namesList: [], totalNumNames: 0}
        }
    }
}