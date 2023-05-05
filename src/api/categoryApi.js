import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(payload) {
    const url = "/categories";
    return axiosClient.post(url, payload);
  },
  update(payload) {
    const url = `/categories/${payload.id}`;
    return axiosClient.patch(url, payload);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};
export default categoryApi;
