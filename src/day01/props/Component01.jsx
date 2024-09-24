import React from 'react';

const Component01 = (props) => {
 console.log(props)
 console.log(props.name)
 console.log(props.age)


 return (
  <div>
   {/* props의 이름과 나이를 화면에 출력*/}
   {props.name}님의 나이는 {props.age}입니다.
  </div>
 );
};

export default Component01;





