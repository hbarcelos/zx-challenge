const template = apiKey => address =>
  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

const searchUrl = template(process.env.GOOGLE_GEOCODING_API_KEY);

export async function find({ address }) {
  const url = searchUrl(address);

  const result = await fetch(url);
  const body = await result.json();

  return body;
}
