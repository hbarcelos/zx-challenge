import React from 'react';
import { render } from 'react-dom';
import { search, getProductList } from './services/poc';
import { find as findLocation } from './services/maps';
import './index.css';

const title = 'My minimal React Webpack Babel Setup';

(async () => {
  // const pocs = await search({
  //   lat: '-23.632919',
  //   long: '-46.699453',
  // });

  // const products = await getProductList({ pocId: pocs[0].id });
  console.log(process.env.GOOGLE_GEOCODING_API_KEY);

  const data = await findLocation({
    address: 'Avenida presidente vargas, Dourados',
  });
  console.log(data);
  // console.log('Products:', products);
})();

render(<div>{title}</div>, document.querySelector('#app'));

module.hot.accept();
