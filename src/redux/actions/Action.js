export const storeData = (email, password, username) => {
  return {
    type: 'SAVE_DATA',
    payload: {email, password, username},
  };
};
