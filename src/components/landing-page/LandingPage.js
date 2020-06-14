import React from 'react';
import Header from '../header/Header';

function LandingPage(props) {
	return (
		<div className="backgroundImage">
            {/* slightly hacky but ensures div image a11y */}
            <span role="img" aria-label="A photograph of a Typewriter. Decorative Image"> </span>
            <Header />
		</div>
	);
}

export default LandingPage;
