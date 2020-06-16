import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import AppDemo from "./hearTogether/AppDemo";

function ProjectCard(props) {
	const { name, link, screenshot } = props;

	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			title={`The card is a link to the ${name} website`}
			href={link}
		>
			<Card style={{ width: "100%" }}>
				
					<Image src={screenshot} wrapped ui={false} />
			{ name === "Hear Together" ? <AppDemo /> : ""}
					
				
				<Card.Content>
					<Card.Header>{name}</Card.Header>
					<Card.Meta>
						<span className="date">Joined in 2015</span>
					</Card.Meta>
					<Card.Description>
						Matthew is a musician living in Nashville.
					</Card.Description>
				</Card.Content>
				<Card.Content extra>Test</Card.Content>
			</Card>
		</a>
	);
}

export default ProjectCard;
