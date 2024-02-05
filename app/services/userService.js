import httpService from "./httpService";
import config from "../config.json";

const apiEnd = config.apiUrl + "/users";

export function register(user) {
  return httpService.post(apiEnd, {
    email: user.email,
    password: user.password,
    name: user.name,
    role: user.role,
  });
}
