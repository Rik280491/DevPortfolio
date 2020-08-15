import React, { useEffect } from "react";

const styles = {
	cvStyle: {
         zIndex: 1

	},
};

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
	
            <div
                role="document"
                aria-label="embedded pdf file showing my cv"
				className="canva-embed"
				data-design-id="DAD92QPhsBE"
				data-height-ratio="1.4143"
				style={styles.cvStyle}
			></div>
		
	
	);
}

export default CV;
