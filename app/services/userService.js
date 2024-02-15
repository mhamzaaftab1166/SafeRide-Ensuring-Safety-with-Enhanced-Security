import httpService from "./httpService";
import config from "../config.json";

const apiEnd = config.apiUrl + "/users";

export const forgotPassword = async (email) => {
  return httpService.post(`${apiEnd}/forgot`, { email });
};

export const verifyForgotPassword = async (code) => {
  return httpService.post(`${apiEnd}/code`, { forgotPassword: true, code });
};

export const updatePassword = async (email, password) => {
  return httpService.put(`${apiEnd}/updatePass`, { email, password });
};

export function register(user) {
  return httpService.post(apiEnd, {
    email: user.email,
    password: user.password,
    name: user.name,
    role: user.role,
  });
}
export function verification(code) {
  return httpService.post(`${apiEnd}/code`, { code });
}
export function resend() {
  return httpService.get(`${apiEnd}/resend`);
}
