import React, { useEffect } from "react";

function Blogs() {
	useEffect(() => {
		window.mediumWidget();
	});

	return <div id="medium-widget"></div>;
}

export default Blogs;
