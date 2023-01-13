import axios from "axios";

const API_KEY = "AIzaSyCKx4efGFPRS0ejmHucsIV4vAqFRqZHwsY";

const SIGN_UP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

const SIGN_IN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  console.log(mode);

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
};

export const signUp = async (email, password) => {
  await authenticate("signUp", email, password);
};

export const signIn = async (email, password) => {
  await authenticate("signInWithPassword", email, password);
};

// export const signIn = async () => {
//   await authenticate("signInWithPassword", email, password);
// };

// export const signUp = async (email, password) => {
//   await axios.post(
//     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
//     { email: email, password: password, returnSecureToken: true }
//   );
// };

// export const signIn = async (email, password) => {
//   await axios.post(
//     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
//     { email: email, password: password, returnSecureToken: true }
//   );
// };
