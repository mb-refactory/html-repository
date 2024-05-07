/* eslint-disable */
const userSystem = "PodcastApp";

console.log('running script utils.js');

const currentDate = Math.floor(Date.now() / 1000);
const authKey = '8YERZRSEJBTHAAASUDXK';
const apiSecret = 'pfSK93B7xjh5FHXKdnStQxNk7qrgXzKBNUgxS72u';
const authDate = currentDate;
const concat = authKey + apiSecret + currentDate;

async function sha1EncryptionInHexFormat(str) {
  const buffer = new TextEncoder("utf-8").encode(str);
  const digest = await crypto.subtle.digest("SHA-1", buffer);
  // Convert digest to hex string
  const result = Array.from(new Uint8Array(digest))
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
  return result;
}

async function podcastIndexAPI(fullURL) {
  console.log(`Podcast index API: fetching results for "${fullURL}"`);
  let signature = await sha1EncryptionInHexFormat(concat);
  return fetch(fullURL, {
    headers: {
      "X-Auth-Date": authDate,
      "X-Auth-Key": authKey,
      Authorization: signature,
      "User-Agent": userSystem,
    },
  })
    .then((response) => response.json())

    .catch((error) => {
      console.error("CHECK YOUR API CREDENTIALS");
      console.error("Error:", error);
    });
}

export async function podcastIndexSearchAPI(query, maxResults) {
  console.log('podcastIndexApi');
  const encodedQuery = encodeURIComponent(query);
  let fullRequestURL = `https://api.podcastindex.org/api/1.0/search/byterm?q=${encodedQuery}&max=${maxResults}`;
  return podcastIndexAPI(fullRequestURL);
}

export async function podcastIndexTrendingAPI(maxResults, categories) {
  let catList = categories.join(',');
  let language = navigator.language;
  let fullRequestURL = `https://api.podcastindex.org/api/1.0/podcasts/trending?pretty&max=${maxResults}&lang=${language}&cat=${catList}`;
  return podcastIndexAPI(fullRequestURL);
}

// export async function podcastIndexByID(podcastIDs) {
  // ...
// }