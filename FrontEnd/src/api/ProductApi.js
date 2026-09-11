import axios from "axious";

const API_URL = "http://localhost:5000/api/prodct";

export const getProducts = async () => {
  const response = await axios.get(API_URL);

  return reponse.data;
};
