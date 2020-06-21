import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import AppDemo from "./hearTogether/AppDemo";

function ProjectCard(props) {
	const { name, link, screenshot, platform, platform2, description, useInfo } = props;

	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`This card is a link to the ${name} website`}
			href={link}
		>
			<Card id="project-card" style={{ width: "100%" }}>
				<Image src={screenshot} wrapped ui={false} />
				{name === "Hear Together" ? <AppDemo /> : null}
				<Card.Content>
					<Card.Header>{name}</Card.Header>
					<Card.Meta>
						<span
							aria-label={`This application is designed for use on a ${platform}/${platform2}`}
							// test what it sounds like if platform 2 is empty. is it going to say undefined?
						>
							{<Icon name={platform} />}
							{platform2 ? <Icon name={platform2} /> : null}
						</span>
					</Card.Meta>
					<Card.Description>{description}</Card.Description>
				</Card.Content>
				<Card.Content extra>{useInfo}</Card.Content>
			</Card>
		</a>
	);
}

export default ProjectCard;
