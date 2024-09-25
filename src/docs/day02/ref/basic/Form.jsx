import React from 'react';

// Form 컴포넌트로 분리
const Form = ({inputRef, formRef, onClickToCheck}) => {

  return (
   <form ref={formRef} action='test'>
     <div>
      <spn>아이디</spn>
      <input type="text" name='id' ref={(el) => inputRef.current[0] = el}/>
      </div>
      <div>
      <spn>비밀번호</spn>
      <input type="text" name='password' ref={(el) => inputRef.current[1] = el} />
      </div>
      <button type="button" onClick={onClickToCheck}>전송</button>
   </form> 
  );
};

export default Form;
