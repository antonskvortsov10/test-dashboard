import { api } from './index'

export const fetchTests = async () => {
    const {data} = await api.get('tests')

    return data
}

export const fetchSites = async () => {
    const {data} = await api.get('sites')

    return data
}
