// Import Modules
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID 41c953e00629e3488f427e4aa6f17a329abe43c1eabf9228c0a8db6727ed9852'
  }
});
