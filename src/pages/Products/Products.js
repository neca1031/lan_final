import React from 'react';
import { InfoSection2 } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <InfoSection2 {...homeObjOne} />
      <InfoSection2 {...homeObjTwo} />
    </>
  );
}

export default Products;
