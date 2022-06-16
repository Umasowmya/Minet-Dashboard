import axios from "axios";

export const GetCryptoItems = () => {
  return axios.get(`http://localhost:3000/cryptoItems`);
};

export const GetSelectedItems = () => {
  return axios.get(`http://localhost:3000/selectedItems`);
};

export const PostSoldItems = ({ obj }: any) => {
  return axios.get(`http://localhost:3000/soldItems`, obj);
};

export const PostPurchasedItems = ({ obj }: any) => {
  return axios.get(`http://localhost:3000/purchasedItems`, obj);
};

export const DeleteSelectedItems = ({ id }: any) => {
  return axios.get(`http://localhost:3000/selectedItems` + id);
};
