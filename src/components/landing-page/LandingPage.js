import React from "react";
import Typist from 'react-typist';


function LandingPage() {
	return (
		<div className="backgroundImage">
			{/* slightly hacky but ensures div image a11y */}
			<span
				role="img"
				aria-label="A photograph of a Typewriter. Decorative Image"
			/>

			
			<Typist className="typewriter">
				 Rikesh Balakrishnan. Software Engineer
			</Typist>
			
			
		</div>
	);
}

export default LandingPage;
