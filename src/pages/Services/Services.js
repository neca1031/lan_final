import React from 'react';
import { InfoSection2, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection2 {...homeObjOne} />
      <InfoSection2 {...homeObjThree} />
      <InfoSection2 {...homeObjTwo} />
      <InfoSection2 {...homeObjFour} />
    </>
  );
}

export default Services;
