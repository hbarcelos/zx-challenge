import { curry, compose, prop, head } from 'ramda';

const then = curry((f, p) => p.then(f));

const templateUrl = apiKey => address =>
  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

const searchUrl = templateUrl(process.env.GOOGLE_GEOCODING_API_KEY);

const checkExists = result => {
  if (!result) {
    throw new Error('Endereço não encontrado!');
  }

  return result;
};

const formatAddress = ({ formatted_address: address, geometry }) => ({
  address,
  lat: String(geometry.location.lat),
  long: String(geometry.location.lng), // Not a typo!!!
});

const extractFirstResult = compose(
  formatAddress,
  checkExists,
  head,
  prop('results')
);

const jsonRequest = async ({ url, ...rest }) => {
  const response = await fetch(url, rest);
  const body = await response.json();

  return body;
};

const fetchAddress = compose(
  then(extractFirstResult),
  jsonRequest
);

export async function find({ address }) {
  const url = searchUrl(address);
  return fetchAddress({ url });
  // return { lat: '-20', long: '-40', address: 'foo' };
}
