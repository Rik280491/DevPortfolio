import React, { useEffect } from "react";

// const style = {
// change height and width
// };

function CV() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://sdk.canva.com/v1/embed.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<div
				class="canva-embed"
				data-design-id="DAD92QPhsBE"
				data-height-ratio="1.4143"
				// style={style}
			></div>
		</>
	);
}

export default CV;
