import httpService from './http.service';

const searchEndpoint = '?q=';

const booksService = {
    getAll: async (param, page, orderBy, limit = 30) => {
        const { data } = await httpService.get(searchEndpoint + param, {
            params: {
                startIndex: page,
                maxResults: limit, 
                orderBy: orderBy
            },
        });
        console.log(data);
        return data;
    },
    getOne: async (id) => {
        const { data } = await httpService.get(id);
        return data;
    },
    getSearchHeader: async (search) => {
        const { data } = await httpService.get(searchEndpoint + search + `+intitle`, {
            params: {
                startIndex: 1,
                maxResults: 3,
            },
        });
        return data;
    }
};

export default booksService;
