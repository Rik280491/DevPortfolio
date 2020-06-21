import React from 'react';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import CVContainer from './components/cv/CVContainer';
import ProjectContainer from './components/projects/ProjectContainer';
import Header from './components/header/Header'
import BlogsContainer from './components/blogs/BlogsContainer'

function App() {
	return (
		<div id="app" className="App">
			<Header/>
      		<LandingPage />
			<CVContainer />
			<ProjectContainer />
			<BlogsContainer />
		</div>
	);
}

export default App;
