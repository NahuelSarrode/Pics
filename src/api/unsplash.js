import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization: 'Client-ID p3ZDfRki9idWDMmQ84CoGwAXB4n2nfr5zEi7WXe1UVQ'
}
});