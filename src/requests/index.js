import 'whatwg-fetch';

/**
 * Using https://rss2json.com API to parse the rss feed to json
 * Sample url GET request: https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss&api_key=cu9juohyy0qdve6w5jxv3ry56gakhlah9c9o7wol&order_dir=desc&count=20
 */

const DEFAULT_RSS_URL =
  'http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444';

export const getRSSFeed = (rss_url = DEFAULT_RSS_URL, count = 20) => {
  const apiUrl = 'https://api.rss2json.com/v1/api.json';
  const apiKey = 'cu9juohyy0qdve6w5jxv3ry56gakhlah9c9o7wol';

  const url = `${apiUrl}?count=${count}&rss_url=${rss_url}&api_key=${apiKey}&order_dir=desc`;
  return fetch(url).then(response => response.json());
};
