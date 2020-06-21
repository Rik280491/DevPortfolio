import React from 'react';
import ProjectCard from '../ProjectCard'

function HearTogether() {
	return (
		<div >
			
            <ProjectCard 
            name="Hear Together"
            link="https://heartogether.netlify.app/"
            screenshot="https://user-images.githubusercontent.com/57149887/84830126-d360cd00-b020-11ea-8dd5-78c6b756108f.png"
            platform='mobile alternate'
            description="An attempt to bridge the communication gap between the deaf and hearing worlds. After all, we are Here Together."
            useInfo="Does not currently work on iOS. Can be used on larger screens but designed for mobile"
            />
            
		</div>
	);
}

export default HearTogether;
