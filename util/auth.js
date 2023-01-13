import axios from "axios";

const API_KEY = "AIzaSyCKx4efGFPRS0ejmHucsIV4vAqFRqZHwsY";

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  console.log(mode);

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;

  console.log(response.data);
};

export const signUp = (email, password) => {
  return authenticate("signUp", email, password);
};

export const signIn = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
