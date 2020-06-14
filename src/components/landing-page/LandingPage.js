import React from 'react';

function LandingPage() {
	return (
		<div className="backgroundImage">
            {/* slightly hacky but ensures div image a11y */}
            <span role="img" aria-label="A photograph of a Typewriter. Decorative Image"> </span>
		</div>
	);
}

export default LandingPage;
