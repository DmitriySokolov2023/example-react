import axios from "axios";

export default class PostServices {
    static async getAll(limit = 10, page = 1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })

    }
    static async getPostById(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)

    }
    static async getComments(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')

    }
}