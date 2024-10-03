function getResponseFromAPI() {
  const success = true;
  if (success) {
    return Promise.resolve('Success');
  }
  return Promise.reject(new Error('Failed'));
}

export default getResponseFromAPI;
