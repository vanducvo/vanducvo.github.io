import React, { Fragment } from "react";
import Navigation from '../navigation/navigation';
import Content from '../content/content';
import AboutMe from '../aboutme/aboutme';
import Education from '../education/education';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

function App(props){
    return(
        <Fragment>
            <Navigation />
            <Content padding = "pt-16">
                <AboutMe />
                <Education />
                <Skills />
            </Content>
            <Content padding = "">
                <Projects />
            </Content>
            <Content padding="pt-1">
                <Contact />
            </Content>
        </Fragment>
    );
}

export default App;