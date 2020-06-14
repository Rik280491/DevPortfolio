import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
	root: {
		background: "white",
		// is the text too small?
		height: 75,
		// makes navbar sticky
		width: "100%",
		position: "fixed",
        top: 0,
        "z-index": 2
	},
});

function Header() {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const navigator = (newValue) => {
		switch (newValue) {
			case 0:
				document.getElementById("cv").scrollIntoView({ behavior: "smooth" });
				break;
			case 1:
				document
					.getElementById("projects")
					.scrollIntoView({ behavior: "smooth" });
				break;
			case 2:
				console.log("Blogs!");
				break;
			case 3:
				console.log("Contact!");
				break;
			default:
				document.getElementById("app").scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				navigator(newValue);
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
			{/* add aria-labels and tabindex */}
			<BottomNavigationAction label="Curriculum vitae" />
			<BottomNavigationAction label="Projects" />
			<BottomNavigationAction label="Blogs" />
			<BottomNavigationAction label="Contact" />

			{/* <BottomNavigationAction label="About Me" icon={<LocationOnIcon />} /> */}
		</BottomNavigation>
	);
}

export default Header;
