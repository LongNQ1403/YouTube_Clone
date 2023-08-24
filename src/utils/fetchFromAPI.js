import axios from "axios";




const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'e64d522dccmshd25447b8ecd1678p1a0555jsn54fe03f439e3', //'e64d522dccmshd25447b8ecd1678p1a0555jsn54fe03f439e3',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}