import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
	root: {
		background: "white",
        // is the text too small?
        height: 75,
        // makes navbar sticky
        width: '100%',
        position: 'fixed',
        top: 0,
    },
});

function Header() {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
            {/* add aria-labels */}
			<BottomNavigationAction label="Curriculum vitae" />
			<BottomNavigationAction label="Projects" />
			<BottomNavigationAction label="Blogs" />
			<BottomNavigationAction label="Contact" />

			{/* <BottomNavigationAction label="About Me" icon={<LocationOnIcon />} /> */}
		</BottomNavigation>
	);
}

export default Header;
