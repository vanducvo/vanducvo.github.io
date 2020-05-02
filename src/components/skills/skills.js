import React, { Fragment } from 'react';

function KList(props) {
    return (
        <p className="text-gray-700 text-md ml-8">
            <b>{props.name}:</b> {props.description}
        </p>
    );
}

function KLists(props) {
    return (
        <Fragment>
            {props.klist.map(v => <KList key={v.name} name={v.name} description={v.description} />)}
        </Fragment>
    );
}

function Skills(props) {
    let flist = [
        {
            name: "Programming Languages",
            description: "Javascript, Python, C++, C"
        },
        {
            name: "Makup Languages",
            description: "HTML5"
        },
        {
            name: "Style Sheet Languages",
            description: "CSS"
        },
        {
            name: "Database",
            description: "MySQL, MongoDB"
        },
        {
            name: "FrameWork",
            description: "ExpressJS, Django"
        },
        {
            name: "Javascript Library",
            description: "React, Socket.IO"
        },
        {
            name: "Flatform",
            description: "Node.js"
        },
        {
            name: "Operating Systems",
            description: "Ubuntu, Windows"
        },
        {
            name: "Source Control",
            description: "git"
        },
    ];

    let klist = [
        {
            name: "Programming Languages",
            description: "C#, Java, Scala"
        },
        {
            name: "Database",
            description: "SQLServer, SQLite3"
        },
        {
            name: "FrontEnd Libary",
            description: "Boostrap, Tailwind, JQuery"
        },
        {
            name: "Webserver",
            description: "NGINX"
        },
        {
            name: 'Tools',
            description: 'Webpack, Eslint'
        },
        {
            name: "IDEs/Editor",
            description: "Visual Studio Code, Visual Studio, Netbeans"
        }
    ]
    return (
        <div id="skills" className="w-full mt-2 rounded shadow-md bg-gray-100 pt-2 md:px-2 md:w-4/12 md:my-0">
            <div className="px-5 py-1">
                <p className="font-bold text-xl mb-1">Skills</p>
                <p className="text-gray-700 text-lg ml-4">
                    <b><i>Familiar With:</i></b>
                </p>
                <KLists klist={flist} />
                <p className="text-gray-700 text-lg ml-4">
                    <b><i>Knowledgeable:</i></b>
                </p>
                <KLists klist={klist} />
            </div>
        </div>
    );
}

export default Skills;