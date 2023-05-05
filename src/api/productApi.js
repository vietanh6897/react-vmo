import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(payload) {
    const url = "/products";
    return axiosClient.post(url, payload);
  },
  update(payload) {
    const url = `/products/${payload.id}`;
    return axiosClient.patch(url, payload);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
