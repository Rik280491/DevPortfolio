import React from "react";

const styles = {
	demoStyle: {
		// flex: 1,
	},
};

function AppDemo() {
	return (
		<div style={styles.demoStyle}>
			<iframe
				title="demo of Hear Together project"
				width="100%"
				height="200px"
				src="https://www.youtube.com/embed/X9MAZSlLMWw"
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			{/* text about why i chose to do the project and interest in A11Y, alongside regular programming */}
		</div>
	);
}

export default AppDemo;
