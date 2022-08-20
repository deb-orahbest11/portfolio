import React from 'react'
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import './App.css';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName='deb-orahbest11' />} />
          <Route path='/projects' element=
            {<Projects userName='deb-orahbest11' />} />
          <Route path='/projects/:name' element=
            {<ProjectDetail userName='deb-orahbest11' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;