import React from 'react';
import HearTogether from './hearTogether/HearTogether' 
import MusicPlayer from './musicPlayer/MusicPlayer'
import WhoSaidIt from './whoSaidIt/WhoSaidIt'

const styles = {
    
}



function ProjectContainer() {
	return (
		<div id="projects" style={styles}>
			<h1 id="title">Projects</h1>
            <HearTogether/>
            <MusicPlayer />
            <WhoSaidIt/>
            
            
		</div>
	);
}

export default ProjectContainer;
