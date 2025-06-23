async function callApi(method, endpoint, data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }
  const response = await fetch(endpoint, options);

  return response.json();
}

export default callApi;