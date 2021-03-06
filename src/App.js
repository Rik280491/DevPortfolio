import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/landing-page/LandingPage";
import CVContainer from "./components/cv/CVContainer";
import ProjectContainer from "./components/projects/ProjectContainer";
import Header from "./components/header/Header";
import BlogsContainer from "./components/blogs/BlogsContainer";
import ContactModal from "./components/contact/ContactModal";
import Footer from "./components/footer/Footer";

function App() {
	const [open, setOpen] = useState(false);

	const triggerModal = () => {
		setOpen(true);
	};

	return (
		<div id="app" className="App">
			<Header triggerModal={triggerModal} />
			<LandingPage />
			<CVContainer />
			<hr className="dashed"></hr>
			<br></br>
			<ProjectContainer />
			<br></br>
			<hr className="dashed"></hr>
			<br></br>
			<BlogsContainer />
			{open ? <ContactModal open={open} setOpen={setOpen} /> : null}
			<Footer />
		</div>
	);
}

export default App;
