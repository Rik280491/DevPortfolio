import React from "react";
import HearTogether from "./hearTogether/HearTogether";
import MusicPlayer from "./musicPlayer/MusicPlayer";
import WhoSaidIt from "./whoSaidIt/WhoSaidIt";
import { Grid, Image } from "semantic-ui-react";
import AppDemo from "./hearTogether/AppDemo";

const styles = {};

function ProjectContainer() {
	return (
		<div id="projects" style={styles}>
            <h1 id="title">Projects</h1>
			<Grid columns={3} divided>
				<Grid.Row>
					<Grid.Column>
						<HearTogether />
					</Grid.Column>
					<Grid.Column>
						<MusicPlayer />
					</Grid.Column>
					<Grid.Column>
						<WhoSaidIt />
					</Grid.Column>
				</Grid.Row>
            </Grid>
            <AppDemo/>
		</div>
	);
}

export default ProjectContainer;
