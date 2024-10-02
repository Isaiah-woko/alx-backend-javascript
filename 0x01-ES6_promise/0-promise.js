export default getResponseFromAPI;
function getResponseFromAPI() {
  let success = true;
  if (success) {
    return Promise.resolve('Sucesss');
  } else {
    return Promise.reject('Failed')
  }
}
