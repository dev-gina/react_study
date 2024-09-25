import styled from 'styled-components';
import { flexCenterColummn } from '../../global/common';
import { fadeIn } from '../../keyframes/keyframes';

const S = {};

S.StyledInput = styled.input`
  width: 200px;
  height: 200px;
  border: none;
  color : white;
`;

S.StyledButton = styled.button`
   background-color : ${(props) => props.backgroundColor && props.backgroundColor};
`;


S.Wrapper = styled.div`
  ${flexCenterColummn}
`;

S.Form = styled.form`
  ${flexCenterColummn}

    /* & 자기 자신을 선택하는 선택자 */
    & input {
     width: 100px;
     border: none;
     box-shadow: 2px 2px 2px rgba(0,0,0,0.15);
    }

    ::placeholder {
     color: gray;
     font-size: 10px;
    }

    span {
     display: block;
     width: 100px;
     text-align: left;
     margin: 0 0 6px 0
    }

    .button {
     width: 100px;
     background-color: purple;
     color: #fff;
     border: none;
     margin: 20px 0 0 0;
     box-shadow: 2px 2px 2px rgba(0,0,0,0.15);
     animation: ${fadeIn} 2s forwards;
    }

`;

S.Button = styled.button`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
`;

export default S;



// import { styled } from 'styled-components';

// const S = {};

// S.StyledDiv = styled.div`
//   width: 200px;
//   height: 200px;
//   border: none;
//   font-size: 20px;
// `;

// S.StyleButton = styled.button`
//   color : ${(props) => props.color && props.color};
//   background-color: orange;
//   border: none;
// `;

// export default S;