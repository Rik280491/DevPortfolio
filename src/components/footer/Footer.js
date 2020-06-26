import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
	root: {
		width: "100%",
		"text-align": "center",
		top: "auto",
		bottom: 0,
	},
});

function Footer() {
	const classes = useStyles();

	return (
		<AppBar className={classes.root}>
			{"Copyright © Rikesh Balakrishnan"}
			{' '}
			{new Date().getFullYear()}
		</AppBar>
	);
}

export default Footer;
