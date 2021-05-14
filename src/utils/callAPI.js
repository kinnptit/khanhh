import axios from 'axios'

const callAPI = async ({path, data, method = 'get', params}) => {
    return axios({
        method,
        url: `http://103.142.26.213:4000/api/v1/${path}`,
        data,
        params
    }).then((response) => {
        return response.data;
    });
}

export default callAPI;