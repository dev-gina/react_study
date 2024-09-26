import React from 'react';
import { FontSizeConsumer } from './FontContext';

const ContextComponent = () => {
  return (
    <div>
      <FontSizeConsumer>
      {/* context에 들어가있는 value메서드로 글자크기 0.3rem으로 변경 */}
      {/* context에 들어가있는 value값으로 p태그의 글자크기 변경 */}

      {
       (context) => {
        console.log(context);
        // const { state, action } = context;
        // const { fontSize } = state;
        // const { setFontSize } = action;
        // const FontSizeChange = () => {
        // setFontSize("0.3rem"); 
        // };

       return (
        <>
          <p style={{ fontSize: context.state.fontSize }}>안녕하세요, 컨텍스트입니다.🤗👍</p>
          <button onClick={() => context.action.setFontSize("0.3rem")}>글자 크기 변경 버튼</button>
         </>
        );
      }}
    </FontSizeConsumer>
   </div>
  );
};

export default ContextComponent;
