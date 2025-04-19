import React from 'react';
import { Html } from '@react-three/drei';
import { BeatLoader } from 'react-spinners';


const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='w-[10vw] h-[10vw] text-md rounded-full flex-col flex-center'>
          <BeatLoader
            color="#86868b"
            loading
            margin={5}
            size={10}
            speedMultiplier={0.8}
          />
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;
