import axios from "axios";
import { BASE_URL } from "../../const/Constants";
const userAPI = {
  getUserList,
  createUser,
  deleteUser,
};
function getUserList() {
  return axios.get(`${BASE_URL}users`);
}

function createUser(user) {
  return axios.post(`${BASE_URL}users`, user);
}

function deleteUser(id) {
  return axios.delete(`${BASE_URL}users/${id}`);
}

export default userAPI;
