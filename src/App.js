import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./utilities/theme";
import Education from './componente/Education';
import Experience from './componente/Experience';
import Navbar from './componente/Navbar';
import Profile from './componente/Profile';
import Footer from './componente/Footer';
import Skills from './componente/Skills';
import Projects from './componente/Project';
import Contact from './componente/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
    background-color: ${({theme}) => theme.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    background-color: #f2f7f2;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Navbar />
        <Body>
          <Profile />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
