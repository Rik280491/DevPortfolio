import React, { useEffect } from "react";

const styles = {
	embed: {
		// height: "50%",
		// width: "50%"
	},
};


function Blogs() {
	
	useEffect(() => {
		window.mediumWidget();
		
		
	});


	return (
		<div
			id="medium-widget"
			style={styles.embed}
			aria-label="link to external website, medium.com, for full blog"
			role="link"
			
		>
		
		</div>
	);
}

export default Blogs;
