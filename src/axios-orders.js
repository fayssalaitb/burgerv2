import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-v2b.firebaseio.com/"
});

export default instance;
