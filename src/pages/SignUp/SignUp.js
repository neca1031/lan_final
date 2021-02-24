import React from 'react';
import Forma from '../../components/Forma/index';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Forma />
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
}

export default SignUp;
