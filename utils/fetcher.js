export function getResults(query) {
  const requestUrl = `https://api.spotify.com/v1/search?q=${ query }&type=artist`;

  return fetch(requestUrl)
    .then((response) => response.json());
}
