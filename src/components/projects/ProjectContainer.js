import React from "react";
import HearTogether from "./hearTogether/HearTogether";
import MusicPlayer from "./musicPlayer/MusicPlayer";
import WhoSaidIt from "./whoSaidIt/WhoSaidIt";
import { Grid, Rail } from "semantic-ui-react";

function ProjectContainer() {
	return (
		<div id="projects">
			<h1>Projects</h1>
			<br></br>
			<Grid centered columns={3}>
				<Grid.Row>
					<Grid.Column width={9}>
						<HearTogether />
						<Rail dividing position="left">
							<i className="devicon-rails-plain-wordmark colored"></i>
						</Rail>

						<Rail dividing position="right">
							<i className="devicon-react-original-wordmark colored"></i>
						</Rail>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={9}>
						<MusicPlayer />
						<Rail dividing position="left">
							<i className="devicon-rails-plain-wordmark colored"></i>{" "}
						</Rail>

						<Rail dividing position="right">
							<i className="devicon-react-original-wordmark colored"></i>
						</Rail>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={9}>
						<WhoSaidIt />
						<Rail dividing position="left">
							<i className="devicon-rails-plain-wordmark colored"></i>{" "}
						</Rail>

						<Rail dividing position="right">
							<i className="devicon-javascript-plain colored"></i>
						</Rail>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}

export default ProjectContainer;
