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
			<a
				href="https://www.canva.com/design/DAD92QPhsBE/view?utm_content=DAD92QPhsBE&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
				target="_blank"
				rel="noopener noreferrer"
			></a>
		</>
	);
}

export default CV;
