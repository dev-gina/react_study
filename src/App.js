import React from 'react';
// import HomeForm from './pages/home/HomeForm';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import CountContainer from './docs/day05/redux/count/CountContainer';
import FontCountainer from './docs/day05/redux/font/FontCountainer';
import Counter from './docs/day05/zustand/Counter';
import Form from './docs/day05/form/Form';
// import AnimalsContainer from './docs/day04/context/expert/AnimalsContainer';
// import ParentContainer from './docs/day04/context/normal/ParentContainer';
// import HomeIcon from './pages/home/HomeIcon';
// import PowButton from './pages/home/PowButton';
// import CharContainer from './docs/day04/context/basic/CharContainer';
// import ParentContainer from './docs/day04/context/basic/ParentContainer';


function App() {
  return (
    <>
    <ThemeProvider theme={theme} >
     <GlobalStyle />
     {/* <HomeIcon /> */}
     {/* {<PowButton />} */}
     {/* <CharContainer /> */}
    {/* <ParentContainer /> */}
    {/* <ParentContainer />0*/}
    {/* <AnimalsContainer /> */}
    {/* <CountContainer /> */}
    {/* <FontCountainer /> */}
    {/* <Counter /> */}
    <Form />
    </ThemeProvider>
    </>
  );
}

export default App;
