import React from 'react';
// import HomeForm from './pages/home/HomeForm';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import AnimalsContainer from './docs/day04/context/expert/AnimalsContainer';
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
    <AnimalsContainer />
    </ThemeProvider>
    </>
  );
}

export default App;
