import NamesDAO from '../dao/namesDAO.js';

export default class NamesController {
    static async getNames(req,res,next) {
        const namesPerPage = req.query.namesPerPage ? parseInt(req.query.namesPerPage) : 10;
        const page = req.query.page ? parseInt(req.query.page) : 0

        let filters = {};
        if(req.query.name) {
            filters.name = req.query.name;
        }

        const {namesList, totalNumNames} = await NamesDAO.getNames({filters, page, namesPerPage});

        let response = {
            names: namesList,
            page: page,
            filters: filters,
            entries_per_page: namesPerPage,
            total_results: totalNumNames
        }
        res.json(response);
    }
}