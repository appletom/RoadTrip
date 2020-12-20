import { API_baseURL, BEARER_TOKEN } from './config';
import queryString from 'query-string';


export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_baseURL}${path}?${query}`), {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true, //normally browser doesn't send authorization to headers so tell it to do so explicitly
        }
    }

}