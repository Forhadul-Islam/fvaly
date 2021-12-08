import axios, { AxiosResponse } from "axios"

const instance = axios.create({
    baseURL: "https://fvaly.herokuapp.com/api/",
    timeout: 1600,
})

// interface IRequestMethods {
//     get: <T>(url: string) => Promise<AxiosResponse<T>>
//     post: (url: string, body: {}) => Promise<AxiosResponse>
//     patch: (url: string, body: {}) => Promise<AxiosResponse>
//     delete: (url: string) => Promise<AxiosResponse>
// }

const responseBody = (response: AxiosResponse) => response.data.data

// const requests: IRequestMethods = {} as IRequestMethods

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) =>
        instance.post(url, body).then(responseBody),
    patch: (url: string, body: {}) =>
        instance.patch(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
}

// requests.get = (url) => instance.get(url).then(responseBody)
// requests.post = (url, body) => instance.post(url, body).then(responseBody)
// requests.patch = (url, body) => instance.patch(url, body).then(responseBody)
// requests.delete = (url) => instance.delete(url).then(responseBody)

export default requests
