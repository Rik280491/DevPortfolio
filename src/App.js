import React from 'react';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import CVContainer from './components/cv/CVContainer';
import ProjectContainer from './components/projects/ProjectContainer';
import Header from './components/header/Header'
import BlogsContainer from './components/blogs/BlogsContainer'
import ContactForm from './components/contact/ContactForm';

function App() {
	return (
		<div id="app" className="App">
			<Header/>
      		<LandingPage />
			<CVContainer />
			<br></br>
			<ProjectContainer />
			<br></br>
			<BlogsContainer />
			<br></br>
			<ContactForm/>
		</div>
	);
}

export default App;
