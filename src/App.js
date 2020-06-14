import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landing-page/LandingPage";
import CVContainer from "./components/cv/CVContainer";
import ProjectContainer from "./components/projects/ProjectContainer";

function App() {
	return (
		<div id="app" className="App">
			<LandingPage />
			<CVContainer />
			<ProjectContainer />

			{/* <Router>
				{/* <Route exact path="/" component={LandingPage} /> */}
				{/* <Route exact path="/cv" component={CVContainer} />
				<Route exact path="/projects" component={ProjectContainer} />
			</Router> */} 
		</div>
	);
}

export default App;
