import axios from "axios";

export default class PostServices{
    static async getAll(){
        return await axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}