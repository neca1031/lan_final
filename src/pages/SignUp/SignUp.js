import React from 'react';
import Forma from '../../components/Forma/index';
import { InfoSection2 } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection2 {...homeObjOne} />
      <Forma />
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
}

export default SignUp;
