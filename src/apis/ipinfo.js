import axios from "axios";
import env from '../configs/env';

export default axios.create({
  baseURL: "https://ipinfo.io",
  headers: {
    Authorization:
      `Bearer ${env.IPINFO_APIKEY}`,
  },
});
