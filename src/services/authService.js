export const Auth = {
  getToken() {
    return localStorage.getItem('token');
  },
  get hastToken() {
    return !!localStorage.getItem('token');
  },
  removeToken() {
    localStorage.removeItem('token');
  },
  storeToken(token) {
    localStorage.setItem('token', token);
  },
};
