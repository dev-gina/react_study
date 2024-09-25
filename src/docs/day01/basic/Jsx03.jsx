//컴포넌트를 만들어서
//여러분의 이름과 나이, 만나이(나이( -1)를 화면에 출력하기!
import React from "react";

export default function Jsx03() {

 const name = "이진아";
 const age = 31;


 return (
  <React.Fragment>
   <h1>이름 : {name}</h1>
   <h1>나이 : {age}</h1>
   <h1>만 나이 : {age - 2}</h1>
  </React.Fragment>
 )
}