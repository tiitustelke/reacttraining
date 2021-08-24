const doFetch = async (url, options) => {
  const response = fetch(url, options);
  const json = response.json();
  if(json.error) {
    throw new Error(json.message + ': ' + json.error);
  } else if (!response.ok) {
    throw new Error('fetch failed :(');
  } else {
    return json;
  }
};

export {doFetch};
