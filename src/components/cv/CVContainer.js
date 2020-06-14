import React from "react";
import AppDemo from "./AppDemo";
import CV from "./CV";



const styles = {
    display: "flex",
    alignContent: "stretch",
}



function CVContainer() {
	return (
		<div id="cv" style={styles}>
			<CV />
			<AppDemo />
		</div>
	);
}

export default CVContainer;
