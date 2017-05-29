export const required = (value) => {
  return value ? undefined : 'Required';
}

export const email = (value) => {
  return value && checkEmail(value) ? undefined : 'Invalid email!';
}

export const password = (value) => {
  return value && checkPassword(value) ? undefined : 'Min 8 letters, upper, lower, and a digit.';
}

// min 8 letter, upper, lower, digit
const checkPassword = (password) => {
    const passwordRegexp = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    return passwordRegexp.test(password);
}

const checkEmail = (email) => {
  const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegexp.test(email);
}
