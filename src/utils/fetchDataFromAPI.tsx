import axios from 'axios';


const options = {
  url: import.meta.env.VITE_BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchDataFromAPI = async (url : string): Promise<unknown> =>{
    const { data }= await axios.get(`${import.meta.env.VITE_BASE_URL}/${url}`, options);
    return data;
}
