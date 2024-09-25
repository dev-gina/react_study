import React, {useState} from 'react';

// 사용자가 입력한 값을 화면에 출력
const Name = () => {

 const [result, setResult] = useState("");
 const viewResult = (e) => {
   setResult(e.target.value)
 }

 return (
  <div>
   <p>{result}</p>
   <input type="text" onChange={viewResult} placeholder='메세지를 입력해주세요.'/>
  </div>
 );
};

export default Name;