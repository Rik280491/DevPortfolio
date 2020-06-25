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
        zIndex: 2,
        
	},
});

function Header(props) {
	const { triggerModal } = props
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const navigator = (newValue) => {
		switch (newValue) {
            case 0:
                document.getElementById("app").scrollIntoView({ behavior: "smooth" });
            break;
            
            case 1:
				document.getElementById("cv").scrollIntoView({ behavior: "smooth" });
				break;
			case 2:
				document
					.getElementById("projects")
					.scrollIntoView({ behavior: "smooth" });
				break;
			case 3:
				document.getElementById("blogs")
					.scrollIntoView({ behavior: "smooth" });
				break;
			// case 4:
			// 	document.getElementById("contact")
			// 		.scrollIntoView({ behavior: "smooth" });
			// 	break;
			default:
                return 
                
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
			<BottomNavigationAction label="Home" />
            <BottomNavigationAction label="Curriculum vitae" />
			<BottomNavigationAction label="Projects" />
			<BottomNavigationAction label="Blogs" />
			<BottomNavigationAction label="Contact" onClick={triggerModal} />

			{/* <BottomNavigationAction label="About Me" icon={<LocationOnIcon />} /> */}
		</BottomNavigation>
	);
}

export default Header;
