import React, { useEffect } from "react";




function Blogs() {
	
	useEffect(() => {
		window.mediumWidget();
		
		
	});


	return (
		<div
			id="medium-widget"
			aria-label="link to external website, medium.com, for full blog"
			role="link"
			
		>
		
		</div>
	);
}

export default Blogs;
