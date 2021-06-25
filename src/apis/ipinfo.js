import axios from "axios";
import {IPINFO_APIKEY} from '@env';

export default axios.create({
  baseURL: "https://ipinfo.io",
  headers: {
    Authorization:
      `Bearer ${IPINFO_APIKEY}`,
  },
});
