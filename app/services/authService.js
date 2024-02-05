import httpService from "./httpService";
import config from "../config.json";

const apiEnd = config.apiUrl + "/auth";

export async function login(email, password) {
  return httpService.post(apiEnd, { email, password });
}
