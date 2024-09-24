import React, { useState, useRef } from 'react';

//빨간색 버튼을 누르면 글자색을 빨갛게
//파란색 버튼을 누르면 글자색을 파랗게
//핑크색을 입력하면 글자색을 없앤다.
//Ref 쓰는 이유 = DOM을 가져오기 위해서 (document 쓰지 못하니까)

 const Color = () => {

 const [result, setResult] = useState("");
 const [color, setColor] = useState("");

 const inputRef = useRef();
 const textReset = () => {
  inputRef.current.value = "";
 }
 
 const onResult = (e) => {
  if(e.target.value === "핑크색"){ setColor("") };
   setResult(e.target.value)
 }

 const colorRed = () => { setColor("red") };
 const colorBlue = () => { setColor("blue") };

 return (
  <div>
   <p style={{color}}>{result}</p>
   <input ref={inputRef} type="text" onChange={onResult} placeholder='색깔을 입력하세요.' />
   <button onClick={colorRed}>빨간색</button>
   <button onClick={colorBlue}>파란색</button>
   <button onClick={textReset}>값 초기화</button>
  </div>
 );
};

export default Color;





