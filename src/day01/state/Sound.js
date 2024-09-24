import React, { useState } from 'react';

const Sound = () => {
  const [sound, setSound] = useState('');

  const dog = () => {
    setSound('멍멍');
  };

  const cat = () => {
    setSound('야옹');
  };

  return (
    <>
 
      <p>{sound}</p>
      <button onClick={cat}>고양이 버튼🐈‍⬛</button>
    </>
  );
};

export default Sound;
