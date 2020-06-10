import React from 'react';
import Header from '../header/Header';

function LandingPage(props) {
	return (
		<div className="backgroundImage">
            {/* slightly hacky but ensures a11y to the div image */}
            <span role="img" aria-label="A photograph of a Typewriter. Decorative Image"> </span>
            <Header />
		</div>
	);
}

export default LandingPage;
