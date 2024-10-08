export const validateEmail = (email: string): Boolean => {
  const emailExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email || email === '' || !emailExp.test(email)) {
    return false;
  }

  return true;
};

export const validatePassword = (password: string): Boolean => {
  const passwordExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

  if (!password || password === '' || !passwordExp.test(password)) {
    return false;
  }

  return true;
};
