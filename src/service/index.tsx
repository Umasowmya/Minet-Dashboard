import axios from "axios";

export const GetCryptoItems = () => {
  return axios.get(`http://localhost:3000/cryptoItems`);
};

export const GetSelectedItems = () => {
  return axios.get(`http://localhost:3000/selectedItems`);
};

export const GetSoldtems = () => {
  return axios.get(`http://localhost:3000/soldItems`);
};

export const GetPurchasedItems = () => {
  return axios.get(`http://localhost:3000/purchasedItems`);
};

export const PostSoldItems = (obj: any) => {
  return axios.post(`http://localhost:3000/soldItems`, obj);
};

export const PostPurchasedItems = (obj: any) => {
  return axios.post(`http://localhost:3000/purchasedItems`, obj);
};

export const DeleteSelectedItems = (id: number) => {
  return axios.delete(`http://localhost:3000/selectedItems/` + id);
};

export const GetDiscoverItems = () => {
  return axios.get(`http://localhost:3000/discoverItems`);
};

export const GetPortfolioItems = () => {
  return axios.get(`http://localhost:3000/portfolioItems`);
};

export const GetButtonList = () => {
  return axios.get(`http://localhost:3000/buttonList`);
};
