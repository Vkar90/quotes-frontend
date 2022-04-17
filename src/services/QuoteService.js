import http from '../http-common'

const getAll = () => {
    return http.get('/api/quotes')
}

const get = id => {
    return http.get(`/api/quotes/${id}`)
}

const create = data => {
    return http.post('api/quotes', data)
}

const update = (id, data) => {
    return http.put(`/api/quotes/${id}`, data)
}

const remove = id => {
    return http.delete(`/api./quotes/${id}`)
}

const QuoteService = { getAll, get, create, update, remove }

export default QuoteService