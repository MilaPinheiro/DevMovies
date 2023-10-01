import axios from 'axios'


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key: '82d3891a9d3dbedf60388dccf9081a90',
        language: 'pt-BR',
        page: 1
    }
})

export default api