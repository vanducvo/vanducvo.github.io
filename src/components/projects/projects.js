import React from 'react';

function Project(props){
    return (
        <div className="px-1 w-full rounded shadow-md mt-1 border boder-gray-200 bg-gray-100 pt-2 md:px-2 md:w-1/3 md:my-0">
            <p className="text-md text-blue-500"><b className="text-gray-700">{props.name} / </b>{props.course}</p>
            <p className="text-ms text-gray-500">From {props.from} to {props.to}</p>
            <ul className="pl-8 list-disc text-md">
                <li>Programming Languages: <span className="text-gray-800">{props.language}</span></li>
                <li>Team size: <span className="text-gray-800">{props.teamsize}</span></li>
                <li>Responsibilities: <span className="text-gray-800">{props.respon}</span></li>
                <li>Technologies: <span className="text-gray-800">{props.tech}</span></li>
                <li>Source Control: <a className="text-blue-500 break-words" href={"https://"+ props.link}>{props.link}</a></li>
            </ul>
        </div>
    );
}

function Projects(props){
    let lprojects = [
        {
            name: 'Music Web Application',
            course: 'Practice on Software Engineering',
            from: ' April 2019',
            to: 'June 2019',
            language: 'Python3(backend), JS(frontend)',
            teamsize: 5,
            respon: 'Build database by MySQL. Implement feature: group chat (send text message only), play music page',
            tech: 'Backend: Django. Front-end: Bootstrap, JQuery',
            link: 'github.com/vanducvo/music'
        },
        {
            name: 'Chat Application In LAN Network',
            course: 'Computer Networks',
            from: 'October 2019',
            to: 'November 2019',
            language: 'Java',
            teamsize: 3,
            respon: 'Build application in client side with feature: send text message and send file by P2P protocol',
            tech: 'Java Swing, Java API networking package',
            link: 'github.com/vanducvo/LANMessenger'
        },
        {
            name: 'V.Duc Porfolio',
            course: 'Self Study React',
            from: '1 May 2019',
            to: '2 May 2019',
            language: 'Javascript',
            teamsize: 1,
            respon: 'Design and Implement',
            tech: 'ReactJS, Tailwind',
            link: 'github.com/vanducvo/portfolio'
        }
    ]
    return (
        <div id="projects" className="w-full mt-2 rounded shadow-md bg-gray-100">
            <div className="px-1 md:px-5 py-1">
                <p className="font-bold text-xl mb-1">Projects</p>
                <div className="flex flex-wrap md:flex-row w-full">
                    {lprojects.map(v =>  <Project key={v.name} {...v}/>)}
                </div>
            </div>
        </div>
    );
}

export default Projects;