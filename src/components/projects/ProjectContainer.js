import React from "react";
import HearTogether from "./hearTogether/HearTogether";
import MusicPlayer from "./musicPlayer/MusicPlayer";
import WhoSaidIt from "./whoSaidIt/WhoSaidIt";
import { Grid } from "semantic-ui-react";


const styles = {
	display: 'flex', 
	justifyContent: 'center',
	
};

function ProjectContainer() {
	return (
		<div id="projects" >
            <h1 id="title" style={styles}>Projects</h1>
			<br></br>
			<Grid columns={3} style={styles} >
				<Grid.Row>
					<Grid.Column>
						<HearTogether />
						<br></br>
						<MusicPlayer />
						<br></br>
						<WhoSaidIt />
					</Grid.Column>
				</Grid.Row>
            </Grid>
           
		</div>
	);
}

export default ProjectContainer;
