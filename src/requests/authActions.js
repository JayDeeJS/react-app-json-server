import { $api } from "requester";


export const loginFetch = async (params) => {
    try {
        const data = await $api.post('login', params)
        return data
    } catch (error) {
        console.error(error);
    }
}

export const refreshFetch = async (token) => {
    try {
        const data = await $api.post('refresh', token)
        return data
    } catch (error) {
        console.error(error);
    }
}