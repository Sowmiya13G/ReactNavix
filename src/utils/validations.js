const userNameRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateEmail = email => {
  if (!email.toLowerCase().includes('@gmail.com')) {
    return 'Email should contain @gmail.com';
  }
  return '';
};

export const validateUserName = userName => {
  if (!userName.match(userNameRegex)) {
    return 'Username should consist only of alphabets';
  }
  return '';
};

export const validatePassword = password => {
  if (!password.match(passwordRegex)) {
    return 'Password must be 8 characters with letters and numbers';
  }
  return '';
};

export const validatePasswordMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};
